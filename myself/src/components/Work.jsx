import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'LUXURY RETAIL',
      category: 'E-Commerce',
      year: '2024',
      image: '/project-1.jpg',
      description: 'Premium fashion platform with seamless checkout experience',
    },
    {
      id: 2,
      title: 'FINTECH APP',
      category: 'Mobile Design',
      year: '2024',
      image: '/project-2.jpg',
      description: 'Modern banking interface with real-time analytics',
    },
    {
      id: 3,
      title: 'ARTIST PORTFOLIO',
      category: 'Web Design',
      year: '2023',
      image: '/project-3.jpg',
      description: 'Minimalist showcase for contemporary photography',
    },
    {
      id: 4,
      title: 'BRAND IDENTITY',
      category: 'Design System',
      year: '2023',
      image: '/hero-bg.jpg', // Using hero bg as placeholder if needed
      description: 'Comprehensive visual language for tech startup',
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    
    // Animate each project card
    projectsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          x: 200,   // Start from Right
          y: 200,   // Start from Bottom
          opacity: 0,
          scale: 0.9, // Start slightly smaller
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%', // Trigger when top of card hits 85% of viewport height
            end: 'top 30%',
            toggleActions: 'play none none reverse', // Reverse when scrolling back up
            scrub: 0.5 // Smooth scrubbing effect linked to scroll
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="work-section">
      {/* Section Title */}
      <div className="work-header">
        <p className="work-category">SELECTED WORK</p>
        <h2 className="work-title">Projects</h2>
      </div>

      {/* Vertical Project List */}
      <div className="work-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectsRef.current[index] = el)}
            className="project-card-container"
          >
            <div className="project-card">
              {/* Project Image */}
              <div className="project-card-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-gradient" />
              </div>

              {/* Project Info - Floating to the side/top */}
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                
                <h3 className="project-title">
                  {project.title}
                </h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-cta">
                  <span>VIEW PROJECT</span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Big Number */}
              <div className="project-number">
                {String(project.id).padStart(2, '0')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
