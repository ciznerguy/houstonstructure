import { readFileSync, statSync } from "node:fs";
import { getYouTubeAccessToken, youtube, YOUTUBE_CHANNEL_ID } from "./youtube-auth.mjs";

// Set the channel banner from the command line.
//
//   node scripts/youtube-banner.mjs path/to/banner.jpg
//
// Two steps, as the API requires: the image is uploaded on its own and comes
// back as a URL, then that URL is written into the channel's branding.
//
// The profile picture cannot be set this way. There is no API for it at all,
// so that one stays a manual upload in YouTube Studio.
//
// YouTube wants 2560x1440 with the important content inside the middle
// 1546x423, which is the only part visible on a phone.

const [, , filePath] = process.argv;
if (!filePath) {
  console.error("usage: node scripts/youtube-banner.mjs <image>");
  process.exit(1);
}

const bytes = readFileSync(filePath);
const token = await getYouTubeAccessToken();
console.log(`uploading ${Math.round(statSync(filePath).size / 1024)} KB`);

const up = await fetch(
  "https://www.googleapis.com/upload/youtube/v3/channelBanners/insert?uploadType=media",
  {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "image/jpeg" },
    body: bytes,
  }
);
const upText = await up.text();
if (!up.ok) {
  console.error("banner upload failed:", up.status, upText.slice(0, 400));
  process.exit(1);
}
const bannerUrl = JSON.parse(upText).url;

// channels.update replaces the whole brandingSettings part rather than merging
// into it, and rejects a body carrying only the image with a bare 400
// "Required". Read what is there and send it back with the banner added.
const current = await youtube(
  `channels?part=brandingSettings&id=${YOUTUBE_CHANNEL_ID}`,
  { token }
);
const branding = current.items?.[0]?.brandingSettings ?? {};

const updated = await youtube("channels?part=brandingSettings", {
  method: "PUT",
  token,
  body: {
    id: YOUTUBE_CHANNEL_ID,
    brandingSettings: {
      ...branding,
      image: { ...(branding.image ?? {}), bannerExternalUrl: bannerUrl },
    },
  },
});

console.log("banner set on", updated.items?.[0]?.id ?? YOUTUBE_CHANNEL_ID);
console.log("it can take a few minutes to appear on the channel page");
