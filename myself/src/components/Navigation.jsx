import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuInfoRef = useRef(null);
  const bgRef = useRef(null);

  const menuItems = [
    { name: 'Home', href: '#home', number: '01' },
    { name: 'Work', href: '#work', number: '02' },
    { name: 'About', href: '#about', number: '03' },
    { name: 'Contact', href: '#contact', number: '04' },
  ];

  useEffect(() => {
    const menu = menuRef.current;
    const items = menuItemsRef.current;
    const info = menuInfoRef.current;
    const bg = bgRef.current;

    if (menuOpen) {
      // Body lock
      document.body.style.overflow = 'hidden';

      // Open animation
      gsap.set(menu, { display: 'flex' });
      
      gsap.to(bg, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 80,
          rotateY: 20,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      gsap.fromTo(
        info,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );

    } else {
      // Close animation
      gsap.to(items, {
        opacity: 0,
        y: -40,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.in',
      });

      gsap.to(info, {
        opacity: 0,
        x: 50,
        duration: 0.4,
        ease: 'power2.in',
      });

      gsap.to(bg, {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(menu, { display: 'none' });
          document.body.style.overflow = '';
        }
      });
    }
  }, [menuOpen]);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating Menu Button Only */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`nav-toggle-btn floating-btn ${menuOpen ? 'open' : ''}`}
        data-cursor-hover
        aria-label="Toggle menu"
      >
        <div className="hamburger">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </div>
      </button>

      {/* Full-Screen Menu Overlay */}
      <div ref={menuRef} className="menu-overlay" style={{ display: 'none' }}>
        {/* Background Layer inside so we can fade it */}
        <div ref={bgRef} className="menu-overlay-bg" style={{ opacity: 0 }} />
        
        <div className="menu-content">
          <nav className="menu-nav">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                >
                  <a
                    href={item.href}
                    onClick={handleMenuItemClick}
                    data-cursor-hover
                  >
                    <span className="menu-item-number">{item.number}</span>
                    <span className="menu-item-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info Side Panel */}
          <div className="menu-info" ref={menuInfoRef} style={{ opacity: 0 }}>
            <div className="menu-info-block">
              <h4>Socials</h4>
              <div className="menu-socials">
                {['Twitter', 'Instagram', 'LinkedIn', 'Github'].map((social) => (
                  <a key={social} href="#" data-cursor-hover>
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="menu-info-block">
              <h4>Get in touch</h4>
              <a href="mailto:hello@dushmanta.com" className="menu-email" data-cursor-hover>
                hello@dushmanta.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
