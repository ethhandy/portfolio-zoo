# Portfolio Zoo

A curated collection of stunning developer portfolio templates — free to use, easy to customize.

Browse the collection, pick a design you love, swap in your own content, and deploy. Works with any tech stack — plain HTML, React, Next.js, Vue, Svelte, you name it.

## Portfolios

| Preview | Name | Style | Tech | Author |
|---------|------|-------|------|--------|
| [Live Demo](https://ethhandy.github.io/portfolio-zoo/macos-desktop/) | **macos-desktop** | macOS Desktop | HTML / CSS / JS | — |
| [Live Demo](https://ethhandy.github.io/portfolio-zoo/retro-terminal/) | **retro-terminal** | Old PC / DOS Terminal | HTML / CSS / JS | — |
| [Live Demo](https://ethhandy.github.io/portfolio-zoo/designer-folio/) | **designer-folio** | Minimal UX/UI Designer | HTML / CSS / JS | — |

> Want yours here? [Contribute a portfolio!](#contributing)

## Quick Start

### Static portfolios (HTML / CSS / JS)

```bash
git clone https://github.com/ethhandy/portfolio-zoo.git
cd portfolio-zoo/macos-desktop
open index.html
```

### Framework-based portfolios (React, Next.js, Vue, etc.)

```bash
git clone https://github.com/ethhandy/portfolio-zoo.git
cd portfolio-zoo/some-nextjs-portfolio
npm install
npm run dev
```

Each portfolio's README has specific setup and deploy instructions.

## Deploying Your Copy

| Tech | Deploy to |
|------|-----------|
| HTML / CSS / JS | GitHub Pages, Netlify, Vercel, Cloudflare Pages — just drag & drop |
| React / Vue / Svelte | Vercel, Netlify — connect repo & set the root directory to the portfolio folder |
| Next.js | Vercel (recommended) — set root directory to the portfolio folder |
| Astro | Vercel, Netlify, Cloudflare Pages |

Most platforms let you set a **root directory** so you can deploy a single subfolder from this repo.

## Project Structure

```
portfolio-zoo/
├── README.md
├── CONTRIBUTING.md
├── macos-desktop/           # Static portfolio
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── script.js
├── some-react-portfolio/    # React portfolio
│   ├── README.md
│   ├── package.json
│   ├── src/
│   └── ...
└── ...
```

## Contributing

We'd love your portfolio designs! See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide, but the gist is:

1. **Fork** this repo
2. **Create a folder** with a descriptive name (e.g. `minimal-dark`, `retro-terminal`, `glassmorphism-card`)
3. **Add your portfolio** code + a `README.md` with a screenshot, setup instructions, and a live demo link
4. **Open a PR**

### What makes a good contribution?

- Looks fantastic out of the box
- Easy to customize (clear structure, comments where helpful)
- Responsive (works on mobile + desktop)
- Self-contained (everything in one folder)
- Includes a deployed live demo link
- Any tech stack is welcome — HTML, React, Next.js, Vue, Svelte, Astro, etc.

## License

MIT — use these portfolios for anything. Credit is appreciated but not required.
