import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const blocksRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time: 3 seconds
    const minLoadTime = 3000;
    const startTime = Date.now();

    // Animate text and loader entrance
    const tl = gsap.timeline();
    
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      loaderRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Wait for minimum time and page load
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        animateExit();
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const animateExit = () => {
    const exitTl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Fade out text and loader
    exitTl.to([textRef.current, loaderRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: 'power2.in',
    });

    // Slide up blocks one by one from left to right
    exitTl.to(
      blocksRef.current,
      {
        y: '-100%',
        duration: 0.8,
        stagger: 0.15, // Stagger from left to right
        ease: 'power4.inOut',
      },
      '-=0.2'
    );
  };

  return (
    <div ref={preloaderRef} className="preloader">
      {/* 5 Blocks - Initially look like one */}
      <div className="preloader-blocks">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            ref={(el) => (blocksRef.current[index] = el)}
            className="preloader-block"
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="preloader-content">
        {/* Text */}
        <h1 ref={textRef} className="preloader-text">
          It's...
        </h1>

        {/* Loader animation */}
        <div ref={loaderRef} className="preloader-loader">
          <div className="loader-spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
