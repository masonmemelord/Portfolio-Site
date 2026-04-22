import React from 'react';
import { ExternalLink } from 'lucide-react';
import './index.css';
import resume from './assets/CS-Focused-Resume.pdf'



// Define the shape of a Project



interface PreviewerProps {
  fileUrl: string;
  fileType: 'pdf' | 'image' | 'text';
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Greenlab AI Cell Detection App",
    description: "A lightweight, full-stack application utilizing deep-learning to detect hematopoietic cell colonies.",
    techStack: ["Next.js, ", "TypeScript, ", "Firebase, ", "TailwindCSS, ", "Python"],
    github: "https://github.com/masonmemelord/Greenlab_Cell_App",
  },
  {
    title: "Gifts From Rah",
    description: "Currently redesigning a fullstack storefront website for my uncle's business (in progress).",
    techStack: ["React, ", "Node.js, ", "TypeScript, ", "(Currently a HTML/CSS/JS stack)"],
    link: "https://www.gifts-from-rah.com/",
    github: "https://github.com/masonmemelord/GiftsFromRah"
  },
  {
    title: "Auditorials",
    description: "Designing and architecting an online newsletter and forum my love of music (starting Summer '26).",
    techStack: ["React, ", "Next.js, ", "TypeScript, "],
    github: "https://github.com/masonmemelord/website-project/tree/main/1600-website-project/public"
  }
];


const App: React.FC<PreviewerProps> = ({ fileUrl, fileType }) => {
  if (!fileUrl || !fileType) {
    console.error("Missing props!");
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Configuration Error</h2>
        <p>File URL or Type is missing. Check main.tsx!</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Mason Mitchell
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Majoring in Computer Science at Tulane University. <i>C.o. 2028</i>
        </p>
        <img src='./src/assets/profile.jpeg' style = {{float: 'right', marginLeft: '15px', width: '25%', paddingLeft: '2.5%', borderRadius: '20px'}}></img>
      </header>

      {/* Projects Grid */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div>
          
          <h2>Who am I?</h2>
          <p>My name is Mason Mitchell. I was born and raised in Compton, CA and technology has been an integral part of my life.
            I got my first introduction to programming in 2020 when I joined <a href='https://www.hiddengeniusproject.org/'>The Hidden Genius Project</a>.
            Since then, for better and for worse I've immersed myself into all things tech. I got some pretty cool projects linked below and my resume,
            so feel free to take a look!
          </p>
        </div>
        <div className="preview-container" style={{paddingTop: "2.5%"}}>
          <h2 >
            <a href={resume} download="Mason_Mitchell_Resume.pdf" className="download-btn"> 
              My Resume!
              </a> 
            </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8 border-b pb-2" style={{paddingTop: "2.5%"}}>Technical Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-snug">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} className="tech-tag bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">
                      <a/> GitHub
                    </a>
                  )}<br></br>
                  {project.link && (
                    <a href={project.link} className="flex items-center gap-1 text-sm font-medium hover:text-blue-600">
                      Link <ExternalLink /> 
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        


      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-20 text-slate-400 text-sm flex justify-between items-center">
        <p>© {new Date().getFullYear()} — Built with React & TSX</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/mason-mitchell-355510309/" className="hover:text-slate-900 transition-colors">LinkedIn </a>
          <a href="https://github.com/masonmemelord" className="hover:text-slate-900 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
