# Portfolio Website - Paper Tiger Inspired

## ✅ Phase 1 & Phase 2 - COMPLETED

### What's Been Done:

#### **Phase 1: Project Setup** ✅

- ✅ Vite with React initialized
- ✅ Dependencies installed:
  - `gsap` (v3.14.2) - For animations
  - `@studio-freight/lenis` (v1.0.42) - For buttery smooth scroll
  - `react-router-dom` (v7.13.0) - For routing
  - `tailwindcss` (v4.1.18) - For styling
  - `postcss` & `autoprefixer` - For CSS processing
- ✅ Tailwind CSS configured (`tailwind.config.js` + `postcss.config.js`)
- ✅ Global styles created (`src/index.css`) with:
  - Tailwind directives
  - Inter font from Google Fonts
  - Native scrollbar hidden
  - Lenis smooth scroll compatibility styles
  - Custom selection colors
  - Dark background (#0a0a0a)

#### **Phase 2: Shell & Smooth Scroll** ✅

- ✅ **ReactLenis** wrapper implemented in `App.jsx` with optimized settings:
  - `lerp: 0.1` - Smooth interpolation
  - `duration: 1.5` - Scroll duration
  - `smoothWheel: true` - Enables the "buttery" effect
- ✅ **CustomCursor** component created (`src/components/CustomCursor.jsx`) with:
  - GSAP-powered smooth mouse tracking
  - Blend mode (`mix-blend-mode: difference`) for that signature Paper Tiger aesthetic
  - Dual-layer cursor (ring + dot)
  - Hover state animations (scales up on hover)
  - Auto-detects links, buttons, and elements with `data-cursor-hover` attribute

### Project Structure:

```
myself/
├── src/
│   ├── components/
│   │   └── CustomCursor.jsx ✨ (GSAP cursor with blend mode)
│   ├── App.jsx ✨ (React Lenis wrapper + test sections)
│   ├── index.css ✨ (Global styles + Tailwind + Lenis compatibility)
│   └── main.jsx
├── tailwind.config.js ✨
├── postcss.config.js ✨
└── package.json ✨ (All dependencies installed)
```

### How to Test:

1. **Start the dev server:**

   ```bash
   npm run dev
   ```

2. **Open browser**: Navigate to `http://localhost:5173`

3. **What to look for:**
   - **Smooth Scroll**: Scroll feels completely different from native scroll - it should have inertia and feel "buttery"
   - **Custom Cursor**: A white ring + dot cursor that follows your mouse smoothly
   - **Blend Mode**: Move cursor over text - it should invert colors (white text becomes black where cursor overlaps)
   - **Hover Effect**: Cursor should scale up when hovering over buttons or text

### Current Test Sections:

The app has 3 temporary sections to demonstrate smooth scroll:

1. "PAPER TIGER" - Hero-style title
2. "Smooth Scroll Works" - Mid section with dark background
3. "Phase 1 & 2 Complete" - Confirmation section

---

## 🚀 Next Steps (Phase 3 & Beyond):

### **Phase 3: Hero Component** (READY TO START)

- Create `Hero.jsx` with:
  - Giant typography (text-9xl or custom sizes)
  - GSAP stagger animations (text slides up on load)
  - Parallax background image using ScrollTrigger
  - Split text animations for individual lines

### **Phase 4: Work/Projects Section**

- Create `Work.jsx` with:
  - Horizontal scroll pinning effect
  - GSAP ScrollTrigger to translate container horizontally while scrolling vertically
  - Stacked/sliding project images
  - This is the signature "Paper Tiger" scroll experience

### **Phase 5: Navigation & Menu**

- Create fixed header with blend mode
- Full-screen overlay menu
- GSAP menu animations (slide/fade from top)
- React Router DOM integration for page transitions

---

## 🔧 Tech Stack Recap:

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3.14
- **Smooth Scroll**: @studio-freight/lenis 1.0
- **Routing**: React Router DOM 7
- **Font**: Inter (Google Fonts)

---

## 💡 Tips for Phase 3:

- Use `useGSAP` hook for better React integration
- ScrollTrigger markers can be enabled for debugging: `markers: true`
- For split text animations, consider using GSAP's SplitText plugin or a library like `splitting.js`
- Parallax speed: typical range is `0.5` to `-0.5` for ScrollTrigger

---

**Status**: ✅ Foundation Complete | Ready for Hero Animations

**Confirm when ready to proceed to Phase 3!**
