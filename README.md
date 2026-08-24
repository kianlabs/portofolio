# KYAN.DEV — Terminal Portfolio

Personal portfolio website styled as a developer IDE / terminal system.
Live at **[kyandev.vercel.app](https://kyandev.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✦ Concept

The whole site is an interface: you are "logged in" to my personal system.

- **File explorer sidebar** — pages as files (`home.tsx`, `profile.tsx`, ...)
- **Editor tabs** — visited pages open as closable tabs
- **Command palette** — press `Ctrl+K` anywhere
- **Boot sequence** — BIOS-style boot lines on load
- **Interactive terminal** — `/terminal`, try `sudo hire-me`
- **Kernel panic 404** — visit any unknown URL
- **Easter egg** — type `arch` on any page

## ✦ Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS + CSS variables, Cozette pixel font |
| Animation | Framer Motion, pure CSS keyframes |
| Contact | Web3Forms (spam-protected) |
| Hosting | Vercel |

## ✦ Pages

| Route | Description |
|---|---|
| `/` | Home — identity, focus, featured project |
| `/profile` | Identity, about, animated skill bars |
| `/work` | Project directory with case studies |
| `/lab` | Experiments & small projects |
| `/setup` | My PC specs (`neofetch` style) |
| `/hobbies` | What I do outside coding |
| `/devlog` | Short build logs & notes |
| `/terminal` | Interactive guest shell |
| `/contact` | Working contact form → my inbox |

## ✦ Run Locally

```bash
git clone https://github.com/kianlabs/portofolio.git
cd portofolio
npm install
npm run dev
```

Open http://localhost:3000

## ✦ Author

**Ridzkyan (Kyan)** — Web Developer, Kartasura Indonesia

- GitHub: [@kianlabs](https://github.com/kianlabs)
- Site: [kyandev.vercel.app](https://kyandev.vercel.app)

---

*btw, i use arch.*
