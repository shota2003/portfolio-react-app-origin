# Portfolio — Shota Kurdgelashvili

A personal portfolio website built with React, showcasing my work as a web developer.
The site features a fullscreen animated Vanta.js background, bilingual support (English / Georgian),
and a responsive layout that adapts to both desktop and mobile devices.

🔗 **Live site:** [shotakurdgelashvili.dev](https://shotakurdgelashvili.dev)

---

## ✨ Features

- **Animated 3D background** — Vanta.js NET effect rendered on a WebGL canvas, running behind all content.
- **Bilingual support (EN / KA)** — Full language switching via a dropdown, with translations stored in a single
  `translations` object. Preference is persisted in `localStorage` and detected from the browser on first visit.
- **Responsive design** — Separate desktop and mobile layouts. Mobile uses a slide-in sidebar; desktop uses a
  sticky header.
- **Scroll-aware UI** — Header and background react to scroll position; a "return to top" arrow appears after
  scrolling down.
- **AOS animations** — Scroll-triggered fade/slide animations on section content.
- **Swiper.js carousel** — Coverflow-style portfolio slider. Clicking a slide opens a detail modal.
- **Modal / popup system** — Two independent overlays (portfolio detail, service description) with shared
  close behavior: X button, click-outside, and `Escape` key.
- **Contact form section** — Users can place an order directly from the site.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React |
| Background animation | Vanta.js (`NET` effect) |
| 3D engine | Three.js — **pinned to `0.140.2`** (see note below) |
| Carousel | Swiper.js |
| Scroll animations | AOS |
| Styling | Plain CSS (`./styles/App.css`) |
| Language switching | Custom implementation with `data-i18n` attributes |

---

## 📁 Project Structure
