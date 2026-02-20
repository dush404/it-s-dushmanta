import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const bg = bgRef.current;

    // Small delay to ensure preloader is done
    const initAnimation = setTimeout(() => {
      // Set initial states
      gsap.set([title, subtitle], { 
        opacity: 0, 
        y: 100 
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({ 
        defaults: { 
          ease: 'power4.out' 
        },
        delay: 0.3  // Small delay after preloader
      });

      // Stagger animation for title lines
      if (title) {
        const titleLines = title.querySelectorAll('.title-line');
        tl.to(titleLines, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
        }, 0);
      }

      // Subtitle fade in
      tl.to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 1,
      }, 0.5);

      // Parallax effect on background
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (bg) {
            gsap.to(bg, {
              y: self.progress * 200,
              scale: 1 + self.progress * 0.1,
              duration: 0.3,
            });
          }
        },
      });

      // Fade out hero content on scroll
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to([title, subtitle], {
            opacity: 1 - self.progress,
            y: -self.progress * 100,
            duration: 0.3,
          });
        },
      });
    }, 100); // 100ms delay to ensure component is mounted

    // Cleanup
    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="hero-background"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="hero-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Giant Typography */}
        <h1 ref={titleRef} className="hero-title">
          <div className="title-line">
            It's Me
          </div>
          <div className="title-line">
            Dushmanta
          </div>
        </h1>

        {/* Subtitle
        <p ref={subtitleRef} className="hero-subtitle">
          Crafting award-winning digital experiences
          <br />
          <span>with passion and precision</span>
        </p> */}

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <div className="scroll-indicator-inner">
            <span>SCROLL</span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>

      {/* Grain Texture Overlay */}
      <div className="hero-grain-overlay" />
    </section>
  );
};

export default Hero;
