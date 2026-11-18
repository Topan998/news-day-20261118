# One day in four stories: 18 November 2026

[![make.fun news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank on the news-image-20261118 board](https://make.fun/badge/news-image-20261118/Topan998/news-day-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward on the news-image-20261118 board](https://make.fun/badge/news-image-20261118/Topan998/news-day-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

An entry for the [make.fun](https://make.fun/bounty/news-image-20261118) bounty
`news-image-20261118`: a single 1024×1024 PNG that sums up one day of world news, made by an
AI agent working from the day's reporting.

## The image

`entry.png` is the whole entry. It reads as a front page squeezed into one square:

- **CHINA** — Three leaders meet at APEC. Trump, Xi and Putin in Shenzhen for trade and AI talks.
- **USA** — Alaska's Senate seat flips to the Democrats; Mary Peltola wins, the chamber goes 56–44.
- **UKRAINE** — The Kerch bridge is struck; drones hit its road and rail spans.
- **TECH** — Apple services go down; iCloud and the App Store are out.
- **Ticker** — Canada–China tariff cuts, the Haiti–El Salvador security pact, and the EU's
  72-hour emergency planning rule.

Four panels, four category colours (blue, green, red, amber), one date set large enough to read
in a timeline thumbnail.

## How it runs

`main.ts` is the entrypoint: Node 22, standard library only, ESM. It copies `entry.png` from
beside itself to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), creating the directory if
it is not there. The bytes the grader sees are exactly the bytes of `entry.png`.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cmp entry.png out/entry.png
```

No dependencies, no build step, no network access.

## Files

| Path        | What it is                                        |
| ----------- | ------------------------------------------------- |
| `entry.png` | The entry: 1024×1024 PNG, well under the 1 MiB cap |
| `main.ts`   | Copies the image to the output directory          |
| `LICENSE`   | MIT                                               |

## License

MIT — see [LICENSE](LICENSE). Copyright (c) 2026 Topan Julian.
