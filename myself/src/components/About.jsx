import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    // Animate on scroll
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );

    gsap.fromTo(
      content.querySelectorAll('.about-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-container">
        {/* Section Title */}
        <div ref={titleRef} className="about-header">
          <p className="about-category">ABOUT ME</p>
          <h2 className="about-title">
            Creating Digital
            <br />
            <span className="about-title-accent">Experiences</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="about-grid">
          {/* Bio */}
          <div className="about-item">
            <h3>Who I Am</h3>
            <div className="about-bio">
              <p>
                I'm a creative developer and designer with a passion for crafting
                exceptional digital experiences. I am a developer cum editor cum 
                explorer.
              </p>
              <p>
                With expertise in modern web technologies and a keen eye for design,
                I transform ideas into interactive realities that captivate and engage.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="about-item">
            <h3>What I Do</h3>
            <div>
              {[
                { skill: 'Frontend Development', level: '95%' },
                {skill: 'UI/UX Design', level: '90%' },
                { skill: 'Animation & Motion', level: '88%' },
                { skill: 'Performance Optimization', level: '92%' },
              ].map((item) => (
                <div key={item.skill} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{item.skill}</span>
                    <span className="skill-level">{item.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: item.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

{/* Coding Timeline - Replaces Services & Contact */}
          <div className="about-item about-timeline">
            <h3>Coding Timeline</h3>
            <div className="timeline-wrapper">
              <table className="timeline-table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { topic: 'CSS', category: 'Frontend', priority: 'Medium', status: 'Completed', icon: '</>' },
                    { topic: 'HTML', category: 'Frontend', priority: 'Medium', status: 'Completed', icon: '</>' },
                    { topic: 'Javascript', category: 'Backend', priority: 'High', status: 'In Progress', icon: '</>' },
                    { topic: 'Node.js', category: 'Backend', priority: 'Medium', status: 'Not Started', icon: '</>' },
                    { topic: 'Express', category: 'Backend', priority: 'Medium', status: 'Not Started', icon: '</>' },
                    { topic: 'UI/UX Design', category: 'Frontend', priority: 'Medium', status: 'On Hold', icon: '🎨' },
                    { topic: 'React.js', category: 'Frontend', priority: 'High', status: 'On Hold', icon: '</>' },
                    { topic: 'JS Advance', category: 'Frontend+Backend', priority: 'High', status: 'On Hold', icon: '</>' },
                    { topic: 'C Language', category: 'Algorithms', priority: 'Medium', status: 'In Progress', icon: '</>' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="col-topic">
                        <span className="topic-icon">{item.icon}</span>
                        {item.topic}
                      </td>
                      <td>
                        <span className={`status-badge category-${item.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                          {item.category}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge priority-${item.priority.toLowerCase()}`}>
                          {item.priority}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="about-decoration" />
    </section>
  );
};

export default About;
