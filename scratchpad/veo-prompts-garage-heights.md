# Veo prompts: Heights garage conversion, 40 seconds

Five clips of eight seconds, generated one at a time and joined in Flow's
Scenebuilder. Each clip starts from one of our own images, so the house stays
the same house across all five. This is the sequence Levi actually built.

**Where to run it:** labs.google/flow, signed in with any Google account.
50 free credits a day, a Veo 3.1 Lite clip costs 10, so five clips is exactly
one free day. Not the Gemini app, which does not do video on the free tier.

**How to feed the image:** use image-to-video and set our file as the first
frame. Do not describe the room from scratch; the image already defines it.

---

## Rules baked into every prompt below

**Everything is written in English, including the narration.** The earlier
attempt came out in Hebrew because the prompt was Hebrew. Veo follows the
language it is given.

**The word "project" never appears.** It made Veo render something abstract.
Every prompt says house, garage, slab, room or wall instead.

**Nobody appears on camera and nobody claims to be anyone.** The voice is an
unnamed narrator. It never says "I am Levi", never says "I am a licensed
engineer", never speaks as an employee. Naming the company in the last line is
ordinary advertising; a person on screen claiming the credentials is not, and
we are not doing that.

**Exclusions, phrased as descriptions rather than negations**, because Veo
handles "a clean frame" better than "no text": append to each prompt

> A clean frame with bare walls and plain surfaces, free of lettering,
> captions, subtitles, signage and watermarks. Camera movement is slow and
> steady, like a property film.

---

## Clip 1 of 5

**First frame:** `public/images/project-heights-garage-1-before.jpg`

> Slow dolly-in, starting wide and ending at a medium shot of a closed
> two-car garage door on a single-storey brick house in Houston, Texas. The
> garage is unchanged and still used for storage. Late afternoon sun rakes
> across the driveway from the left, long shadows, warm natural light,
> shot on a full-frame camera with a 35mm lens, shallow depth of field.
> A narrator with a clear British accent says, "A Houston garage is the
> cheapest square footage you will ever add. It is also the most
> structurally misunderstood."
> Ambient noise: a quiet suburban street, distant cicadas.

## Clip 2 of 5

**First frame:** `public/images/project-heights-garage-2-during.jpg`

> Slow tracking shot moving left to right through a garage stripped back to
> new timber stud framing, insulation batts visible between the studs and a
> fresh concrete pour levelling the floor. Daylight comes through the open
> doorway where the garage door used to be. Documentary construction
> photography, neutral white balance, deep focus, everything sharp.
> A narrator with a clear British accent says, "The slab sits lower than the
> house, and the header over the door was never sized to carry a wall."
> SFX: a nail gun fires twice in the distance.
> Ambient noise: the low hum of a job site.

## Clip 3 of 5

**First frame:** `public/images/project-heights-garage-2-media-room.jpg`

> Slow pan across a finished media room with dark painted walls, recessed
> ceiling lights, a large wall-mounted screen and built-in seating. The room
> is warm and lived in. Cinematic interior lighting, soft falloff into the
> corners, shot on a 24mm lens, rich contrast.
> A narrator with a clear British accent says, "Get those two right and the
> room stops feeling like a garage. Ceiling height, insulation and drainage
> all follow from the structure."
> Ambient noise: the faint hush of an air conditioning vent.

## Clip 4 of 5

**First frame:** `public/images/project-heights-garage-3-bathroom.jpg`

> Slow crane shot rising gently in a finished full bathroom with tiled walls,
> a walk-in shower, a vanity and a mirror. Clean, bright, newly built.
> Architectural interior photography, even daylight-balanced lighting, high
> dynamic range, crisp detail in the tile grout.
> A narrator with a clear British accent says, "Plumbing here meant cutting
> the slab, which is an engineering decision, not a plumbing one."
> Ambient noise: the soft echo of a tiled room.

## Clip 5 of 5

**First frame:** `public/images/project-heights-garage-4-bedroom.jpg`

> Slow dolly-out from a finished guest bedroom with a made bed, soft bedside
> lighting and a window letting in evening light, ending on a wide shot of
> the whole room. Warm, calm, golden hour interior, 35mm lens, gentle film
> grain.
> A narrator with a clear British accent says, "Six hundred square feet in
> the Heights. Permitted, sealed and finished. Levi's Houston Structural
> Repairs, houstonstructure dot com."
> Ambient noise: a quiet room at dusk.

---

## After the five clips exist

1. In Scenebuilder, drag them into order 1 to 5.
2. If a join feels abrupt, use **Extend** on the clip before it rather than
   regenerating both.
3. Export at 1080p, 16:9.
4. Upload with `node scripts/youtube-upload.mjs <file> <meta.json>`.

## What to expect to go wrong

**Text still appears.** Veo likes putting words on screen. If it does,
regenerate that clip; the exclusion sentence usually fixes it on the second
pass.

**The narration drifts off script.** Veo paraphrases. Keep each spoken line
under about twenty words so it fits inside eight seconds without rushing.

**Every output carries a SynthID watermark**, and free Flow exports may carry a
visible Flow mark as well. Check the corner of the frame before uploading.
