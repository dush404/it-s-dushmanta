import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll('.contact-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-container">
        {/* Title */}
        <div className="contact-header contact-item">
          <p className="contact-category">LET'S CONNECT</p>
          <h2 className="contact-title">
            Got a project?
            <br />
            <span className="contact-title-accent">Let's talk.</span>
          </h2>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods contact-item">
          <a
            href="mailto:hello@portfolio.com"
            className="contact-email"
            data-cursor-hover
          >
            hello@portfolio.com
          </a>
          <a
            href="tel:+1234567890"
            className="contact-phone"
            data-cursor-hover
          >
            +1 (234) 567-890
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links contact-item">
          {[
            { name: 'Twitter', url: '#' },
            { name: 'Instagram', url: '#' },
            { name: 'LinkedIn', url: '#' },
            { name: 'Dribbble', url: '#' },
            { name: 'GitHub', url: '#' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="social-link"
              data-cursor-hover
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="contact-footer contact-item">
          <p>
            © 2024 Portfolio. Crafted with passion and precision.
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="contact-decoration" />
    </section>
  );
};

export default Contact;
