# Dushmanta Khilari - Premium Interactive Portfolio

A high-end, award-winning style personal portfolio website built with React, GSAP, and buttery-smooth Lenis scrolling. Inspired by top-tier agency designs like Paper Tiger.

## ✨ Key Features

- **100% Pure CSS:** Zero Tailwind dependencies. Clean, modular, and performant custom CSS.
- **GSAP Animations:** Extensive use of GSAP and ScrollTrigger for premium motion design.
- **Lenis Smooth Scroll:** Flawless inertia scrolling at 60fps.
- **Custom Magnetic Cursor:** A custom-built, dual-layer interactive cursor that magnetically snaps to interactive elements using GSAP's `quickTo` for buttery responsiveness.
- **Cinematic Preloader:** A 5-block staggered reveal animation ensuring a premium entrance.
- **Horizontal Scroll Architecture:** The Work section features a complex scroll-jacking mechanism where vertical scroll is pinned to translate projects horizontally.
- **Full-Screen Overlays:**
  - **Navigation Menu:** Split-layout, high-contrast dark overlay.
  - **Resume Modal:** A beautiful, scroll-locked modal displaying detailed experience, education, and skills.
- **Dynamic Theming:** Built iteratively starting from a minimal green palette to vibrant multi-layer mesh gradients and elegant dark modes.

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## 📁 Project Architecture

All source code lives within the `src` directory with a 1:1 component-to-styling architecture:

- **Global Ecosystem:**
  - `App.jsx` & `App.css`: Main application container, Lenis wrapper, and section composition.
  - `index.css`: Global styles, CSS variables, typography, and reset rules.
- **Components:**
  - `Preloader`: Manages the initial load animation and transition.
  - `CustomCursor`: Advanced tracking and magnetic sticky logic for hovering over buttons (`.floating-btn`).
  - `Navigation`: Fixed floating action button that opens the main site directory.
  - `ResumeOverlay`: Symmetric top-left button that triggers the detailed PDF/information modal.
  - `Hero`: Giant typography with GSAP staggered animations and parallax scrolling.
  - `Work`: The horizontal scrolling project showcase.
  - `About`: Bio, stats, and animated skill progress sections.
  - `Contact`: Bottom-of-page interactive footer and social links.

## 🎨 Design Philosophy

- **Typography First:** Uses large, bold text for visual hierarchy (primarily using the `Inter` font, complemented by stylized headers).
- **Interactive Depth:** Extensive use of `backdrop-filter: blur`, z-index stacking, mixed blend modes, and parallax scrolling to create a 3D feel on a 2D canvas.
- **Color Palette:** Grounded in earthy, premium tones—specifically Dark Green (`#102F15`), Sage Green (`#728C5A`), and Light Cream (`#EAF1B1`)—interwoven with dynamic gradient accents.

## 🛠️ Tech Stack

- **React 18/19** (Vite + SWC)
- **GSAP** (Core, ScrollTrigger)
- **Lenis** (Smooth scroll library by Studio Freight)
- **Pure CSS3** (Flexbox, Grid, CSS Variables)

---

_Developed by Dushmanta Khilari - Web Developer & Motion Designer_
