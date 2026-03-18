# Retro Terminal

> An old-school CRT monitor portfolio driven entirely by typed commands. Green phosphor, scanlines, and all.

## Live Demo

[View Live Demo](https://ethhandy.github.io/portfolio-zoo/retro-terminal/)

## Features

- CRT monitor with scanlines, vignette, and phosphor glow
- Command-driven navigation — type commands to explore
- Boot sequence with typing animation
- ASCII art banner
- Progress bar skill visualization
- `neofetch`-style system info
- Switchable green/amber color themes (`theme amber`)
- Fake filesystem with `ls` and `cat` commands
- Fully responsive

## Available Commands

| Command | Description |
|---------|-------------|
| `help` | List all commands |
| `about` | Bio and intro |
| `skills` | Technical skills with progress bars |
| `experience` | Work history |
| `projects` | Things built |
| `contact` | Email, GitHub, LinkedIn |
| `neofetch` | System info card |
| `theme green/amber` | Switch color theme |
| `banner` | Show ASCII art |
| `ls` | List files |
| `cat [file]` | Read a file |
| `clear` | Clear screen |

## How to Customize

1. **Your info** — Edit the `DATA` object at the top of `script.js` (name, role, experience, skills, projects, contact)
2. **ASCII banner** — Replace `ASCII_BANNER` in `script.js` with your own (use a generator like patorjk.com)
3. **Colors** — Edit CSS variables in `:root` in `style.css`, or add more themes in the `cmdTheme` function
4. **Commands** — Add your own commands in the `COMMANDS` object in `script.js`
5. **Boot text** — Customize the `boot()` function for your own startup sequence

## Tech Stack

- HTML / CSS / JavaScript (vanilla, no frameworks)
- Google Fonts (VT323, IBM Plex Mono)

## License

MIT
