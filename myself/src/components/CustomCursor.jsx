import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    // Set default initial state to prevent any CSS conflicts
    gsap.set(cursor, { 
      xPercent: -50, 
      yPercent: -50,
      width: 32,
      height: 32,
      border: '1.5px solid var(--color-dark)',
      borderRadius: '50%',
      backgroundColor: 'transparent'
    });
    
    gsap.set(cursorDot, {
      xPercent: -50, 
      yPercent: -50,
      width: 6,
      height: 6,
      backgroundColor: 'var(--color-medium)',
      borderRadius: '50%'
    });

    // Highly optimized positioning with GSAP quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });
    const dotXTo = gsap.quickTo(cursorDot, "x", { duration: 0.1, ease: "power3" });
    const dotYTo = gsap.quickTo(cursorDot, "y", { duration: 0.1, ease: "power3" });

    let activeTarget = null;
    let isStuck = false;
    let isStuckToFloating = false;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      dotXTo(x);
      dotYTo(y);

      // --- MAGNETIC PROXIMITY CHECK FOR FLOATING BUTTONS ---
      let nearbyFloatingBtn = null;
      let fCenterX = 0;
      let fCenterY = 0;
      let fRect = null;

      const floatingBtns = document.querySelectorAll('.floating-btn');
      for (const btn of floatingBtns) {
        const rect = btn.getBoundingClientRect();
        // Remove current GSAP transforms to get the true origin center
        const currX = gsap.getProperty(btn, "x") || 0;
        const currY = gsap.getProperty(btn, "y") || 0;
        const originLeft = rect.left - currX;
        const originTop = rect.top - currY;
        
        const centerX = originLeft + rect.width / 2;
        const centerY = originTop + rect.height / 2;
        
        // Calculate distance from cursor to the button's true center
        const dist = Math.hypot(x - centerX, y - centerY);
        
        // 90px radius means it attracts even when the pointer is ~30px outside the button
        if (dist < 90) { 
          nearbyFloatingBtn = btn;
          fCenterX = centerX;
          fCenterY = centerY;
          fRect = rect;
          break;
        }
      }

      if (nearbyFloatingBtn) {
        // We are close enough to a floating button to snap!
        if (!isStuckToFloating || activeTarget !== nearbyFloatingBtn) {
          isStuckToFloating = true;
          isStuck = true;
          activeTarget = nearbyFloatingBtn;

          // Morph cursor to embrace the button
          gsap.to(cursor, {
            width: fRect.width + 16,
            height: fRect.height + 16,
            backgroundColor: 'rgba(16, 47, 21, 0.08)',
            border: '1px solid transparent',
            borderRadius: '50%',
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(cursorDot, { scale: 0, opacity: 0, duration: 0.2 });
        }

        // Apply intense magnetic pull inside the attraction radius
        const originLeft = fRect.left - (gsap.getProperty(nearbyFloatingBtn, "x") || 0);
        const originTop = fRect.top - (gsap.getProperty(nearbyFloatingBtn, "y") || 0);
        // Recalculate true center to be exact
        const trueCenterX = originLeft + fRect.width / 2;
        const trueCenterY = originTop + fRect.height / 2;

        const pullX = (x - trueCenterX) * 0.4; // Strong pull
        const pullY = (y - trueCenterY) * 0.4;

        xTo(trueCenterX + pullX);
        yTo(trueCenterY + pullY);

        gsap.to(nearbyFloatingBtn, {
          x: pullX * 1.5, // Make the button physically jump towards cursor
          y: pullY * 1.5,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto" 
        });

      } else {
        // If we just left a floating button's magnetic radius
        if (isStuckToFloating && activeTarget) {
          isStuckToFloating = false;
          isStuck = false;
          
          gsap.to(activeTarget, {
            x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)'
          });
          activeTarget = null;

          gsap.to(cursor, {
            width: 32, height: 32, backgroundColor: 'transparent',
            border: '1.5px solid var(--color-dark)', borderRadius: '50%',
            duration: 0.3, ease: 'power2.out'
          });
          gsap.to(cursorDot, { scale: 1, opacity: 1, duration: 0.2 });
        }

        // --- STANDARD STICKY HOVER FOR NORMAL LINKS ---
        if (isStuck && activeTarget && !isStuckToFloating) {
          const rect = activeTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const pullX = (x - centerX) * 0.15;
          const pullY = (y - centerY) * 0.15;

          xTo(centerX + pullX);
          yTo(centerY + pullY);

          gsap.to(activeTarget, {
            x: pullX * 1.2,
            y: pullY * 1.2,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else if (!isStuckToFloating) {
          // Normal tracking
          xTo(x);
          yTo(y);
        }
      }
    };

    // Standard hover delegation strictly for non-floating buttons
    const handleMouseOver = (e) => {
      if (isStuckToFloating) return; // Prevent interference from nearby floating check
      
      const target = e.target.closest('a, button'); 
      if (target && !target.classList.contains('floating-btn')) {
        activeTarget = target;
        isStuck = true;

        const rect = target.getBoundingClientRect();
        if(rect.width > window.innerWidth * 0.6 || rect.height > window.innerHeight * 0.6) {
           isStuck = false;
           activeTarget = null;
           return;
        }

        const computedStyle = window.getComputedStyle(target);
        
        gsap.to(cursor, {
          width: rect.width + 16,
          height: rect.height + 16,
          backgroundColor: 'rgba(16, 47, 21, 0.08)',
          border: '1px solid transparent',
          borderRadius: computedStyle.borderRadius !== '0px' ? computedStyle.borderRadius : '8px',
          duration: 0.3,
          ease: 'power2.out'
        });
        
        gsap.to(cursorDot, { scale: 0, opacity: 0, duration: 0.2 });
      }
    };

    const handleMouseOut = (e) => {
      if (isStuckToFloating) return;

      const target = e.target.closest('a, button');
      if (target && activeTarget === target && !target.classList.contains('floating-btn')) {
        isStuck = false;
        activeTarget = null;

        gsap.to(cursor, {
          width: 32,
          height: 32,
          backgroundColor: 'transparent',
          border: '1.5px solid var(--color-dark)',
          borderRadius: '50%',
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to(target, {
          x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)'
        });

        gsap.to(cursorDot, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    const onLeaveWindow = () => gsap.to([cursor, cursorDot], { opacity: 0, duration: 0.3 });
    const onEnterWindow = () => gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.3 });
    
    window.addEventListener('mouseleave', onLeaveWindow);
    window.addEventListener('mouseenter', onEnterWindow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mouseleave', onLeaveWindow);
      window.removeEventListener('mouseenter', onEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
