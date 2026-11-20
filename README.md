# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/mrjxmx/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/mrjxmx/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

**The World in One Image** — a single 1024×1024 broadsheet front page that sums up Friday, 20 November 2026 in one page. The lead is the morning after the Shenzhen trilateral: some 40 of Ukraine's partners rallying in Berlin behind security guarantees and a proposed €45bn EU loan, the E3 calling for a winter ceasefire on energy strikes — and President Putin ruling out any sea or energy truce after Ukrainian forces hit the Kerch Bridge yet again. Around it, the page carries the day's other big stories: the world court's landmark 9–6 ruling that Myanmar committed genocide against the Rohingya, Iran stepping up its Hormuz tanker attacks even as Brent slides a fifth in November, the stalled race to succeed Guterres at the UN, GTA VI's record $2.36bn first day (24.58 million copies, Sensor Tower estimates), and Congo's Ebola outbreak at 11,504 cases six months on — plus Cyclone Akvan's landfall in India, Pete Rose's posthumous pardon, and a closing markets strip.

Every visual on the page is drawn in code. The front page is a single self-contained HTML file (`frontpage.html`) laid out with CSS and inline SVG — the broken Kerch Bridge beside the lead story, the Peace Palace frieze over the genocide verdict, the neon skyline in the GTA VI panel, and the Ebola cases-and-deaths bars are all hand-coded vector shapes — rendered to `entry.png` by headless Chrome (`render.cjs`). There are no photographs and no AI-generated imagery anywhere in the entry; the only artwork is what the code draws.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That runs `main.ts` (Node 22, standard library only), which copies the finished `entry.png` into the output directory. To rebuild the image itself from source, run `node render.cjs`, which renders `frontpage.html` to `entry.png` at exactly 1024×1024.

<sub>Entered on [make.fun](https://make.fun/?ref=fj3hte3r&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
