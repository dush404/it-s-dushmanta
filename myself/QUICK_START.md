# Quick Start Guide

## Running the Project

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Navigate to
http://localhost:5173
```

## What You Should See

1. **Smooth Scroll**: Feel the buttery smooth inertia scroll (Lenis)
2. **Custom Cursor**: White ring + dot cursor with blend mode
3. **Three Test Sections**: Demonstrating the scroll effect

## Project Files Created/Modified

### ✅ Configuration Files

- `tailwind.config.js` - Tailwind setup with Inter font
- `postcss.config.js` - PostCSS for Tailwind processing

### ✅ Source Files

- `src/index.css` - Global styles + Tailwind + Lenis compatibility
- `src/App.jsx` - Main app with ReactLenis wrapper
- `src/components/CustomCursor.jsx` - GSAP cursor component

### ✅ Dependencies Added

```json
{
  "dependencies": {
    "@studio-freight/lenis": "^1.0.42",
    "gsap": "^3.14.2",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.18",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.24"
  }
}
```

## Testing Checklist

- [ ] Dev server runs without errors
- [ ] Smooth scroll feels different from native scroll
- [ ] Custom cursor visible and smooth
- [ ] Cursor blends with background (difference mode)
- [ ] Cursor scales on hover over text
- [ ] No console errors

## Ready for Phase 3!

Once confirmed, we'll proceed with:

- Hero component with giant typography
- GSAP stagger animations
- Parallax background effects
- ScrollTrigger integration
