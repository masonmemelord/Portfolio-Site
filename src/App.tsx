import React from 'react';
import { ArrowUpRight, Code, FileDown, Link, MapPin } from 'lucide-react';
import './index.css';
import resume from './assets/CS-Focused-Resume.pdf';
import profilePic from './assets/profile.jpeg';

interface Project {
  title: string;
  type: string;
  year: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Greenlab AI Cell Detection',
    type: 'Computer Vision',
    year: '2026',
    description:
      'Full-stack cell colony detection workflow that turns model output into a usable lab-facing product.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Roboflow', 'Python', 'Docker'],
    link: 'https://greenlab-frontend.vercel.app',
  },
  {
    title: 'Proxify LLC',
    type: 'Infrastructure',
    year: '2026',
    description:
      'IaaS proxy platform focused on dynamic IP rotation, request routing, and network automation.',
    techStack: ['Next.js', 'Python', 'Docker', 'Linux'],
    link: 'https://proxifyllc.com',
  },
  {
    title: 'Unstuck iOS',
    type: 'Health / Wellness',
    year: '2026',
    description:
      'Semi-serious health and wellness app for college students designed to reduce friction, build momentum, and increase productivity.',
    techStack: ['Swift', 'SwiftUI', 'Firebase'],
    github: 'https://github.com/masonmemelord/Unstuck-iOS',
  },
];

const App: React.FC = () => {
  return (
    <div className="page-shell">
      <header className="system-header">
        <a className="brand-lockup" href="#top" aria-label="Mason Mitchell portfolio home">
          <span>Mason Mitchell</span>
        </a>
        <nav className="system-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="menu-label">Majoring in Computer Science and InfoTech @ Tulane </p>
            <h1 id="hero-title">Who am I?</h1>
            <p>
              My name is Mason Mitchell. I'm a rising junior majoring in Computer Science with a minor in IT at Tulane. 
              I was born and raised in the Los Angeles area and am currently working on a lot of projects. Feel free to
              take a look. I'm always on a device so don't be afraid to reach out either!
            </p>
            <div className="action-row">
              <a className="primary-link" href="#work">
                Browse work
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={resume} download="Mason_Mitchell_Resume.pdf">
                Resume
                <FileDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="preview-window">
            <img src={profilePic} alt="Abstract profile photograph for Mason Mitchell" />
            <figcaption>
              <span>Memory Card</span>
              <strong>Slot 01</strong>
            </figcaption>
          </figure>
        </section>

        <section className="profile-strip" id="profile" aria-label="Profile summary">
          <p>
            <MapPin size={15} aria-hidden="true" />
            Los Angeles, CA / New Orleans, LA
          </p>
          <p>I first started programming at The Hidden Genius Project in 2020.</p>
          <p>Interested in tech innovation, global economics, and martial arts.</p>
        </section>

        <section className="work-browser" id="work" aria-labelledby="work-title">
          <div className="browser-title">
            <p className="menu-label">Selected Work</p>
            <h2 id="work-title">Project Browser</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-main">
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    <span>{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} technology stack`}>
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-meta">
                  <span>{project.year}</span>
                  <div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} live link`}>
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                        <Code size={17} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <p>React / TypeScript / Console menu energy</p>
        <div>
          <a href="https://www.linkedin.com/in/mason-mitchell-355510309/" target="_blank" rel="noreferrer">
            <Link size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a href="https://github.com/masonmemelord" target="_blank" rel="noreferrer">
            <Code size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
