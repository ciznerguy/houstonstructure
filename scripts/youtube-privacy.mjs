import { youtube } from "./youtube-auth.mjs";

// Change a video between private, unlisted and public.
//
//   node scripts/youtube-privacy.mjs <videoId> public
//
// videos.update replaces the whole status part rather than merging into it, the
// same trap as brandingSettings, so the current status is read first and sent
// back with only privacyStatus changed.

const [, , videoId, privacy] = process.argv;
if (!videoId || !["public", "private", "unlisted"].includes(privacy)) {
  console.error("usage: node scripts/youtube-privacy.mjs <videoId> public|private|unlisted");
  process.exit(1);
}

const current = await youtube(`videos?part=status,snippet&id=${videoId}`);
const item = current.items?.[0];
if (!item) {
  console.error(`no video ${videoId} on this channel`);
  process.exit(1);
}

const updated = await youtube("videos?part=status", {
  method: "PUT",
  body: { id: videoId, status: { ...item.status, privacyStatus: privacy } },
});

console.log(`"${item.snippet.title}"`);
console.log(`privacy: ${item.status.privacyStatus} -> ${updated.items?.[0]?.status?.privacyStatus ?? updated.status?.privacyStatus}`);
console.log(`https://www.youtube.com/watch?v=${videoId}`);
