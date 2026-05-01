import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, ExternalLink, Mail, Code, Terminal, Palette, Database } from 'lucide-react';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="text-gradient" style={{ fontWeight: 800, fontSize: '1.5rem', cursor: 'pointer' }}>
        DEV.IO
      </div>
      
      <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
        Resume
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ 
          color: 'var(--accent-primary)', 
          fontWeight: 600, 
          letterSpacing: '2px',
          marginBottom: '1rem',
          display: 'block'
        }}>WELCOME TO MY WORLD</span>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Building Digital <span className="text-gradient">Masterpieces</span>
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-muted)', 
          maxWidth: '700px',
          marginBottom: '2.5rem'
        }}>
          A full-stack developer specialized in crafting premium web experiences with a focus on high-end aesthetics and performance.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button className="btn-primary">View My Work</button>
          <button style={{ 
            background: 'transparent', 
            border: '1px solid var(--glass-border)',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer'
          }}>Let's Talk</button>
        </div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass" 
    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
  >
    <div style={{ 
      width: '50px', height: '50px', 
      borderRadius: '12px', 
      background: 'rgba(139, 92, 246, 0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--accent-primary)'
    }}>
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)' }}>{desc}</p>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: Code, title: 'Frontend', desc: 'React, Next.js, Framer Motion, GSAP' },
    { icon: Database, title: 'Backend', desc: 'Node.js, PostgreSQL, MongoDB, Redis' },
    { icon: Terminal, title: 'DevOps', desc: 'Docker, AWS, CI/CD, Nginx' },
    { icon: Palette, title: 'Design', desc: 'Figma, UI/UX, Design Systems' },
  ];

  return (
    <section id="skills" className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Core <span className="text-gradient">Specialties</span></h2>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem' 
      }}>
        {skills.map((s, i) => <SkillCard key={i} {...s} />)}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, category, img }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass" 
    style={{ overflow: 'hidden', cursor: 'pointer' }}
  >
    <div style={{ 
      height: '300px', 
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '2rem'
    }}>
      <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{category}</span>
      <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{title}</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          Live Demo <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Featured <span className="text-gradient">Work</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>A glimpse into my creative laboratory.</p>
        </div>
        <button style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>View All Projects →</button>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2.5rem' 
      }}>
        <ProjectCard title="Luxe Estates" category="REAL ESTATE APP" img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" />
        <ProjectCard title="Crypto Pulse" category="FINTECH DASHBOARD" img="https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" />
        <ProjectCard title="Aether UI" category="DESIGN SYSTEM" img="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3" />
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center' }}>
      <div className="glass" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Let's <span className="text-gradient">Collaborate</span></h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="mailto:hello@example.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Mail size={20} /> Send an Email
          </a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <motion.a whileHover={{ scale: 1.2 }} href="#"><Github /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#"><Linkedin /></motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Bharat. Built with React & Passion.</p>
      </footer>
    </div>
  );
};

export default App;
