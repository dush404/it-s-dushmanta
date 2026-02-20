# 🎬 PRELOADER CREATED!

## ✅ Preloader Features:

Your portfolio now has a **stunning animated preloader** with exactly the features you requested!

---

## 🎨 Preloader Design:

### **What It Looks Like:**

1. **Full Screen Coverage**
   - 5 vertical rectangular blocks
   - Initially looks like ONE single preloader
   - Dark black background with subtle gradients

2. **Center Content:**
   - Large text: **"It's."**
   - Spinning loader beneath it
   - Minimalist, professional look

3. **Exit Animation:**
   - Text fades out
   - 5 blocks slide UP one by one
   - **Left to right stagger** (0.15s delay each)
   - Smooth power4.inOut easing

---

## ⏱️ Timing:

- **Minimum duration**: 3 seconds
- **Also waits for**: Page fully loaded
- **Whichever is longer**: Shows until both conditions met

---

## 🎬 Animation Sequence:

### **1. Entrance (0-1 second):**

```
- "It's." text fades in + slides up
- Loader appears with scale-up effect
- Smooth, professional entrance
```

### **2. Loading State (1-3+ seconds):**

```
- "It's." text visible
- Loader spins continuously
- Subtle pulse effect on loader
- Waiting for minimum 3s + page load
```

### **3. Exit (3+ seconds):**

```
Step 1: Text + loader fade out (0.5s)
Step 2: Blocks slide up one by one:
  - Block 1 (left) slides up first
  - Block 2 slides up (0.15s delay)
  - Block 3 slides up (0.15s delay)
  - Block 4 slides up (0.15s delay)
  - Block 5 (right) slides up last
Total exit time: ~1.5 seconds
```

---

## 📐 Structure:

### **5 Blocks Layout:**

```
┌──────┬──────┬──────┬──────┬──────┐
│      │      │      │      │      │
│  1   │  2   │  3   │  4   │  5   │
│      │      │      │      │      │
│    "It's."                        │
│       (loader)                    │
│      │      │      │      │      │
└──────┴──────┴──────┴──────┴──────┘

Exit animation: ↑ ↑ ↑ ↑ ↑ (left to right)
```

---

## 🎨 Visual Details:

### **Text "It's.":**

- Font size: **8rem** (desktop)
- Color: **White**
- Font: **Inter** (bold)
- Animation: Fade in + slide up

### **Loader:**

- Size: **60px**
- Style: **Circular spinner**
- Border: White with transparent background
- Animation: **Continuous spin** (1s per rotation)
- Pulse effect: Subtle glow

### **5 Blocks:**

- Each block: **20% width** (1/5 of screen)
- Background: **#0a0a0a** with subtle gradients
- Slight color variation for depth
- Exit: Slide **y: -100%** (upward)

---

## 💻 Technical Implementation:

### **Component: `Preloader.jsx`**

```jsx
- useState: Track loading state
- useRef: Reference blocks, text, loader
- useEffect: Handle page load + minimum time
- GSAP Timeline: Smooth animations
- Callback: onComplete() when done
```

### **Animations:**

```javascript
// Entrance
gsap.fromTo(text, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });

// Exit - Stagger blocks
gsap.to(blocks, {
  y: "-100%",
  stagger: 0.15, // ← Left to right
  ease: "power4.inOut",
});
```

---

## 📱 Responsive:

### **Desktop (1920px):**

- Text: **8rem**
- Loader: **60px**
- Full block width

### **Tablet (768px):**

- Text: **4rem**
- Loader: **50px**
- Adjusted spacing

### **Mobile (480px):**

- Text: **3rem**
- Loader: **40px**
- Compact layout

---

## 🔧 How It Works:

### **1. Page Load:**

```javascript
const startTime = Date.now();
const minLoadTime = 3000; // 3 seconds

// Wait for BOTH:
// 1. Page fully loaded
// 2. Minimum 3 seconds elapsed
```

### **2. Exit Trigger:**

```javascript
// Calculate remaining time
const elapsedTime = Date.now() - startTime;
const remainingTime = Math.max(0, minLoadTime - elapsedTime);

// Wait if needed
setTimeout(() => animateExit(), remainingTime);
```

### **3. Animation:**

```javascript
// Fade out content
gsap.to([text, loader], { opacity: 0, y: -30 });

// Slide up blocks (staggered)
gsap.to(blocks, {
  y: "-100%",
  stagger: 0.15, // 150ms between each
  duration: 0.8,
  onComplete: () => onComplete(), // Hide preloader
});
```

---

## 🎯 Files Created:

1. ✅ **`src/components/Preloader.jsx`** - Component logic
2. ✅ **`src/components/Preloader.css`** - Styling
3. ✅ **`src/App.jsx`** - Updated with preloader state

---

## ✨ The Experience:

### **User sees:**

1. **Page loads** → Black screen appears
2. **0.5s** → "It's." text fades in elegantly
3. **0.8s** → Loader appears with bounce
4. **1-3s** → Loader spins while loading
5. **3s+** → Text fades out
6. **3.5s** → First block (left) slides up
7. **3.65s** → Second block slides up
8. **3.8s** → Third block slides up
9. **3.95s** → Fourth block slides up
10. **4.1s** → Fifth block (right) slides up
11. **4.5s** → Portfolio revealed! 🎉

---

## 🧪 Test It:

**Refresh your browser:**

```
http://localhost:5173
```

**You should see:**

1. Preloader appears (5 blocks as one)
2. "It's." text in center
3. Spinning loader below text
4. After 3 seconds minimum
5. Text fades out
6. Blocks slide up sequentially (left → right)
7. Your portfolio appears!

---

## 🎨 Customization Options:

Want to adjust it? Here's how:

### **Change Duration:**

```jsx
const minLoadTime = 5000; // 5 seconds instead of 3
```

### **Change Text:**

```jsx
<h1>Your Text Here</h1>
```

### **Change Stagger Speed:**

```css
stagger: 0.2  // Slower (200ms between blocks)
stagger: 0.1  // Faster (100ms between blocks)
```

### **Change Block Count:**

```jsx
{[0, 1, 2, 3, 4, 5, 6].map(...)}  // 7 blocks instead of 5
```

---

## ✅ Result:

Your portfolio now has a:

- ✅ **Professional preloader**
- ✅ **Minimum 3-second loading**
- ✅ **"It's." text + loader**
- ✅ **5 blocks that look like one**
- ✅ **Sequential slide-up exit (left → right)**
- ✅ **Smooth GSAP animations**
- ✅ **Responsive design**

---

**Refresh and enjoy your beautiful preloader!** 🎬✨

The blocks will slide up one by one from left to right, revealing your portfolio in a stunning way!
