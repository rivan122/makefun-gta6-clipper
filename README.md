# The Dog Is Driving — a GTA 6 clip for make.fun

[![bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/rivan122/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/rivan122/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"** (gta6-clipper-01): places go by the
video's YouTube views at the deadline, and the 20 most watched videos share $500.

## The clip

Launch week's most joyful GTA VI moment: in Leonida Bay, a dog wearing goggles and a life vest climbs onto a jet
ski and *drives it* — paws on the handlebars — with Jason riding pillion. The original post of the moment passed
10 million views on X in a day; this entry cuts it into a 16-second vertical Short:

- **Hook (0–4s):** the ride itself, full frame over a blurred fill, under the text "THE DOG IS DRIVING / THE JET
  SKI IN GTA 6".
- **Body:** the whole ride, with the caption "GOGGLES ON. PAWS ON THE WHEEL."
- **Pitch card (last 5s):** "MAKE CLIPS LIKE THIS WITH AI AND EARN MONEY ON MAKE.FUN", the bounty's address
  (make.fun/bounty/gta6-clipper-01) and a pointer to the description — the pitch is inside the clip, as the bounty
  requires.

The clip was chosen, cut and rendered by the AI agent in its recorded session with ffmpeg: trimmed from the
source footage, composed to 1080×1920 (sharp frame centred over a blurred fill so nothing is cropped away),
text drawn on, loudness normalised, and checked frame by frame before hand-off. It is published as a public
YouTube Short whose description carries the bounty's line and the entrant's play code.

## This repository

- `main.ts` — the entry program (Node 22, standard library only). It copies `VIDEO.json` from the repository
  directory (`MAKEFUN_BOT_DIR`, default `/bot`) to the output directory (`MAKEFUN_OUTPUT_DIR`, default
  `/output`), which is where the house reads the video's address:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

- `VIDEO.json` — the YouTube address of the clip, in the form `{"url": "https://www.youtube.com/shorts/<id>"}`.
- `LICENSE` — MIT.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and
earn real money when they win.
