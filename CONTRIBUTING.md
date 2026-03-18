# Contributing to Portfolio Zoo

Thanks for contributing! This project thrives on the community sharing creative portfolio designs.

## Any Tech Stack Welcome

You can use whatever you want:

- **Static** — HTML, CSS, JS
- **Frameworks** — React, Next.js, Vue, Nuxt, Svelte, SvelteKit, Astro, Angular
- **Styling** — Tailwind, CSS Modules, Styled Components, Sass, vanilla CSS

The only rule: it must be a frontend-only portfolio (no backend/database required to run).

## How to Add Your Portfolio

### 1. Fork & Clone

```bash
git clone https://github.com/ethhandy/portfolio-zoo.git
cd portfolio-zoo
```

### 2. Create Your Portfolio Folder

Pick a short, descriptive name using lowercase and hyphens:

```
portfolio-zoo/
└── your-portfolio-name/
    ├── README.md          # Required
    ├── index.html         # Entry point (static)
    └── ...
```

Or for framework-based portfolios:

```
portfolio-zoo/
└── your-portfolio-name/
    ├── README.md          # Required
    ├── package.json
    ├── src/
    └── ...
```

**Folder naming examples:** `minimal-dark`, `retro-terminal`, `neon-card`, `glassmorphism-dev`, `brutalist-engineer`

### 3. Deploy a Live Demo

Every portfolio **must** have a live demo. Deploy yours for free on any of these:

| Platform | Best for | How |
|----------|----------|-----|
| **Vercel** | Next.js, React, Vue, static | Import repo, set root directory to your folder |
| **Netlify** | Any static or framework site | Drag & drop build output, or connect repo |
| **GitHub Pages** | Static HTML/CSS/JS | Enable in repo settings |
| **Cloudflare Pages** | Any static or framework site | Connect repo, set root directory |

### 4. Write a README for Your Portfolio

Every portfolio **must** include a `README.md` with:

```markdown
# Portfolio Name

> One-line description of the design style.

## Live Demo

[View Live Demo](https://your-deployed-url.vercel.app)

## Screenshot

![Screenshot](screenshot.png)

## Features

- Feature 1
- Feature 2

## Getting Started

npm install
npm run dev

(or "just open index.html" for static portfolios)

## How to Customize

1. Replace the name, bio, and links with your own
2. Update experience/projects sections
3. Swap colors by editing CSS variables / theme config

## Tech Stack

- Next.js / React / HTML (whatever you used)
- Tailwind CSS / vanilla CSS

## Author

- [Your Name](https://github.com/yourname)

## License

MIT
```

### 5. Checklist Before Submitting

- [ ] Portfolio looks great on desktop AND mobile
- [ ] All code is inside your single folder (no files in the repo root)
- [ ] README includes a **live demo link**, screenshot, and setup instructions
- [ ] No API keys, secrets, or personal tokens in the code
- [ ] No massive images (optimize to < 500KB each)
- [ ] `.gitignore` covers `node_modules/`, `dist/`, `.next/`, etc. (for framework projects)
- [ ] Tested in at least Chrome and Firefox

### 6. Open a Pull Request

- Title: `Add [portfolio-name] portfolio`
- Description: Brief description + a screenshot or GIF + live demo link
- We'll review and merge quickly!

## Guidelines

### Do

- Make it visually impressive
- Keep the code readable and well-structured
- Use CSS variables or theme config so users can easily customize colors/fonts
- Include responsive styles
- Add helpful comments for sections users will want to customize
- Include a `package.json` with `dev` and `build` scripts (for framework projects)

### Don't

- Don't include `node_modules/`, `.next/`, `dist/`, or build artifacts
- Don't use copyrighted images/assets without permission
- Don't add tracking scripts or analytics
- Don't require a backend, database, or external API to render the portfolio
- Don't submit someone else's work without credit

## Updating the Main README

After your PR is merged, a maintainer will add your portfolio to the table in the root `README.md` with your live demo link.

## Questions?

Open an issue and we'll help you out!
