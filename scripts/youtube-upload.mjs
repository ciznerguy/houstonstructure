import { readFileSync, statSync } from "node:fs";
import { basename } from "node:path";
import { getYouTubeAccessToken, youtube, YOUTUBE_CHANNEL_ID } from "./youtube-auth.mjs";

// Upload a video to the channel from the command line.
//
//   node scripts/youtube-upload.mjs <file> <meta.json> [--public]
//
// meta.json:
//   { "title": "...", "description": "...", "tags": ["..."] }
//
// Defaults to private so a bad upload is never public by accident; pass
// --public deliberately. Quota: an upload costs 1600 of the 10,000 free daily
// units, so roughly six a day. No billing account is required for this API,
// unlike Cloud Text-to-Speech.
//
// Category 26 is "Howto & Style", the closest fit for explainer content.

const [, , filePath, metaPath, ...flags] = process.argv;
if (!filePath || !metaPath) {
  console.error("usage: node scripts/youtube-upload.mjs <video file> <meta.json> [--public]");
  process.exit(1);
}

const meta = JSON.parse(readFileSync(metaPath, "utf8"));
const privacyStatus = flags.includes("--public") ? "public" : "private";
const size = statSync(filePath).size;
const token = await getYouTubeAccessToken();

const body = {
  snippet: {
    title: meta.title,
    description: meta.description,
    tags: meta.tags ?? [],
    categoryId: meta.categoryId ?? "26",
    defaultLanguage: "en",
  },
  status: {
    privacyStatus,
    selfDeclaredMadeForKids: false,
    embeddable: true,
  },
};

console.log(`uploading ${basename(filePath)} (${Math.round(size / 1024 / 1024)} MB) as ${privacyStatus}`);

// 1. open a resumable session
const init = await fetch(
  "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Upload-Content-Length": String(size),
      "X-Upload-Content-Type": "video/*",
    },
    body: JSON.stringify(body),
  }
);
if (!init.ok) {
  console.error("session failed:", init.status, (await init.text()).slice(0, 400));
  process.exit(1);
}
const location = init.headers.get("location");
if (!location) {
  console.error("no upload URL returned");
  process.exit(1);
}

// 2. send the bytes. Single PUT: these clips are tens of megabytes, well
// inside what one request handles, so chunking would only add failure modes.
const put = await fetch(location, {
  method: "PUT",
  headers: { "Content-Length": String(size), "Content-Type": "video/*" },
  body: readFileSync(filePath),
});
const text = await put.text();
if (!put.ok) {
  console.error("upload failed:", put.status, text.slice(0, 400));
  process.exit(1);
}

const video = JSON.parse(text);
console.log(`done: https://www.youtube.com/watch?v=${video.id}`);
console.log(`title: ${video.snippet?.title}`);
console.log(`privacy: ${video.status?.privacyStatus}`);

// 3. optional custom thumbnail. A channel that has not been phone-verified is
// refused here; the video itself is already up, so this is reported and not
// treated as a failure.
if (meta.thumbnail) {
  const thumb = readFileSync(meta.thumbnail);
  const r = await fetch(
    `https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${video.id}`,
    { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "image/jpeg" }, body: thumb }
  );
  console.log(r.ok ? "thumbnail set" : `thumbnail skipped (${r.status}, channel may need phone verification)`);
}

// Confirm it is really on the right channel rather than a personal one.
const check = await youtube(`videos?part=snippet&id=${video.id}`, { token });
const onChannel = check.items?.[0]?.snippet?.channelId;
console.log(
  onChannel === YOUTUBE_CHANNEL_ID
    ? "confirmed on the business channel"
    : `WARNING: landed on channel ${onChannel}, expected ${YOUTUBE_CHANNEL_ID}`
);
