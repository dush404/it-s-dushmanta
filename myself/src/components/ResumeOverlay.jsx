import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ResumeOverlay.css';

const ResumeOverlay = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const resume = resumeRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (resumeOpen) {
      document.body.style.overflow = 'hidden';

      gsap.set(resume, { display: 'flex' });
      
      gsap.to(bg, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      gsap.fromTo(
        content.querySelectorAll('.anim-item'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

    } else {
      gsap.to(content.querySelectorAll('.anim-item'), {
        opacity: 0,
        y: -30,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in',
      });

      gsap.to(bg, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(resume, { display: 'none' });
          document.body.style.overflow = '';
        }
      });
    }
  }, [resumeOpen]);

  return (
    <>
      <button
        onClick={() => setResumeOpen(!resumeOpen)}
        className={`resume-toggle-btn floating-btn ${resumeOpen ? 'open' : ''}`}
        data-cursor-hover
        aria-label="Toggle resume"
      >
        {!resumeOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>

      <div ref={resumeRef} className="resume-overlay" style={{ display: 'none' }}>
        <div ref={bgRef} className="resume-overlay-bg" style={{ opacity: 0 }} />
        
        <div className="resume-content-wrapper" ref={contentRef}>
          <div className="resume-modal anim-item" data-lenis-prevent="true">
            <div className="resume-header">
              <div className="resume-header-info anim-item">
                <h2>Dushmanta Khilari</h2>
                <h3>Developer</h3>
                <p className="resume-summary">
                  As a first-year Electrical Engineering student with a passion for coding, I am skilled in full-stack web development and UI/UX design, using languages like C++, Java, and JavaScript. I have practical experience with tools such as Figma and have deployed web projects, demonstrating my ability to turn ideas into reality. I am a proactive learner, eager to contribute to innovative tech solutions and grow my skills in a professional environment.
                </p>
              </div>
              <a href="/resume.jpeg" download="resume.jpeg" className="download-btn anim-item" data-cursor-hover>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download 
              </a>
            </div>

            <div className="resume-body">
              <div className="resume-column anim-item">
                <div className="resume-section">
                  <h3 className="section-title">Education</h3>
                  <div className="resume-item">
                    <h4>V.S.S.Int. of Science</h4>
                    <span className="resume-date">(2022-2024)</span>
                    <p>Plus 2 in Science - 78.5%</p>
                  </div>
                  <div className="resume-item">
                    <h4>IGI Technology</h4>
                    <span className="resume-date">(2025-2029)</span>
                    <p>Bachelor of Technology</p>
                  </div>
                </div>

                <div className="resume-section">
                  <h3 className="section-title">Experience & Stats</h3>
                  <ul className="resume-stats-list">
                    <li>5+ Website Designed from Scratch</li>
                    <li>30+ Graphics & UI/UX Designed</li>
                    <li>Recently Working on New Project</li>
                    <li>3+ Website Deployed</li>
                  </ul>
                </div>

                <div className="resume-section">
                  <h3 className="section-title">Projects</h3>
                  <div className="resume-item">
                    <h4>Strike Premium Course Website</h4>
                    <p>An e-learning platform designed to sell and deliver high-quality, premium video courses with user authentication and progress tracking.</p>
                  </div>
                  <div className="resume-item">
                    <h4>Genz Eventsz Official Website</h4>
                    <p>A responsive corporate website built with HTML, CSS, and JavaScript to showcase event management services, feature performers, and capture client inquiries.</p>
                  </div>
                  <div className="resume-item">
                    <h4>E-commerce Clothing Store</h4>
                    <p>A full-stack web application for an online clothing brand, featuring product catalogs, a shopping cart, and a secure checkout system using payment gateway integration.</p>
                  </div>
                  <div className="resume-item">
                    <h4>Interactive Personal Portfolio</h4>
                    <p>A dynamic single-page application built to showcase your skills, projects, and resume, featuring creative animations and a contact form for potential employers.</p>
                  </div>
                </div>
              </div>

              <div className="resume-column anim-item">
                <div className="resume-section sidebar-section">
                  <h3 className="section-title">Contact</h3>
                  <div className="contact-list">
                    <p><strong>Phone:</strong> +91 8917539000</p>
                    <p><strong>Email:</strong> dush@gmail.com</p>
                    <p><strong>GitHub:</strong> dush404</p>
                    <p><strong>LinkedIn:</strong> Dushmanta Khilari</p>
                    <p><strong>X/Twitter:</strong> Dushmanta404</p>
                    <p><strong>Location:</strong> Hirakud, Sambalpur, Odisha, PIN-784601</p>
                  </div>
                </div>

                <div className="resume-section sidebar-section">
                  <h3 className="section-title">Skills</h3>
                  <div className="skills-category">
                    <h4>Web Design</h4>
                    <p>HTML, CSS, Tailwind CSS, JavaScript, ReactJS, C-Language Basics, Python</p>
                  </div>
                  <div className="skills-category">
                    <h4>Version Control</h4>
                    <p>Git, GitHub</p>
                  </div>
                  <div className="skills-category">
                    <h4>UI/UX Designer</h4>
                    <p>Figma, Stitch</p>
                  </div>
                  <div className="skills-category">
                    <h4>Graphic Design</h4>
                    <p>Canva, Affinity, Pixellab, Picsart</p>
                  </div>
                  <div className="skills-category">
                    <h4>Freelancer</h4>
                  </div>
                </div>

                <div className="resume-section sidebar-section">
                  <h3 className="section-title">Language</h3>
                  <ul className="language-list">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Odia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeOverlay;
