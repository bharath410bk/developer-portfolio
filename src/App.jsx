import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, ExternalLink, Mail, Code, Terminal, Palette, Database, 
  MapPin, Phone, Briefcase, GraduationCap, Award, Heart, FileCode, CheckCircle,
  Layout, BookOpen, Activity, Sun, Moon
} from 'lucide-react';
import './index.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        BHARATH.DEV
      </div>
      
      {/* Desktop Navigation */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links desktop-nav">
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none' }}>
          Hire Me
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="mobile-only" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              marginTop: '1rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
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
      textAlign: 'center',
      paddingTop: '6rem'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '2rem' }}
      >
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          padding: '4px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          margin: '0 auto'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'var(--bg-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400" 
              alt="Bharath Kumar AR S"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span style={{ 
          color: 'var(--accent-primary)', 
          fontWeight: 600, 
          letterSpacing: '2px',
          marginBottom: '1rem',
          display: 'block',
          textTransform: 'uppercase'
        }}>Software Developer</span>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          <span className="text-gradient">Bharath Kumar AR S</span>
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-muted)', 
          maxWidth: '800px',
          marginBottom: '2.5rem',
          margin: '0 auto 2.5rem auto'
        }}>
          Dedicated and young enthusiast who always loves to work hard as well as smart. Exceptionally passionate about taking part in challenging tasks to improve myself. Eager to contribute my fresh perspective and dedication to every project I touch.
        </p>
        <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>View My Work</a>
          <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>Let's Talk</a>
        </div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({ icon: Icon, title, items }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass" 
    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
  >
    <div className="icon-box">
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
    <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={14} style={{ color: 'var(--accent-secondary)' }} /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { 
      icon: Code, title: 'Technological Skills', 
      items: ['HTML, CSS', 'SQL', 'SDLC', 'Python', 'Java (Core)', 'ASP.NET Core', 'WordPress', 'MS-Office'] 
    },
    { 
      icon: Layout, title: 'Soft Skills', 
      items: ['Observation', 'Decision Making', 'Communication', 'Multi-tasking', 'Time Management', 'Volunteering'] 
    },
    {
      icon: Heart, title: 'Interests',
      items: ['Singing', 'Listening to music', 'Chess']
    }
  ];

  return (
    <section id="skills" className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>My <span className="text-gradient">Specialties</span></h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Technologies, skills, and activities that drive me.</p>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {categories.map((c, i) => <SkillCard key={i} {...c} />)}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, category, desc, icon: Icon }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass" 
    style={{ overflow: 'hidden', cursor: 'pointer', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--accent-primary)' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ 
        width: '40px', height: '40px', 
        background: 'rgba(32, 178, 170, 0.1)', 
        borderRadius: '8px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--accent-secondary)',
        flexShrink: 0
      }}>
        <Icon size={20} />
      </div>
      <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>{category}</span>
    </div>
    <h3 style={{ fontSize: '1.5rem', lineHeight: 1.3 }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', flex: 1 }}>{desc}</p>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
      <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        View Details <ExternalLink size={16} />
      </span>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Online Library Management System",
      category: "PROJECT 01",
      desc: "The main objective of this system is to simplify and make easier the management of books in a Library.",
      icon: BookOpen
    },
    {
      title: "Course Explorer System",
      category: "PROJECT 02",
      desc: "Guiding students for higher studies who have just completed their class 12.",
      icon: Layout
    },
    {
      title: "Diabetic Retinal Disease Prediction",
      category: "PROJECT 03",
      desc: "Predicts whether the sample retina is affected by Diabetic Retinopathy or not using advanced models.",
      icon: Activity
    }
  ];

  return (
    <section id="projects" className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Featured <span className="text-gradient">Work</span></h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>A glimpse into the systems I've built.</p>
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {projectData.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, subtitle, desc, icon: Icon }) => (
  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
    <div className="icon-box" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
      <Icon size={24} />
    </div>
    <div>
      <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>{year}</span>
      <h4 style={{ fontSize: '1.3rem', margin: '0.2rem 0' }}>{title}</h4>
      {subtitle && <h5 style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 500 }}>{subtitle}</h5>}
      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{desc}</p>
    </div>
  </div>
);

const ExperienceAndEducation = () => {
  return (
    <section id="experience" className="container">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '4rem' 
      }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Experience & <span className="text-gradient">Education</span></h2>
          <div className="glass" style={{ padding: '2rem' }}>
            <TimelineItem 
              year="Jan 2025 - Present"
              title="Syncfusion"
              subtitle="Website Developer"
              desc="Working in the website team managing 2 ASP.NET Core projects for user account sites and handling front/back-end for WordPress environments."
              icon={Briefcase}
            />
            <TimelineItem 
              year="Oct 2023 - Nov 2023"
              title="OctaNet SW Services"
              subtitle="Web Developer Intern"
              desc="Online internship program focused on web development."
              icon={Briefcase}
            />
            <TimelineItem 
              year="2020 - 2024 (Graduated Jan 2025)"
              title="University College Of Engineering, Anna University"
              subtitle="Bachelor of Computer Science & Engg | CGPA - 8.099"
              desc="Tiruchirappalli - 24"
              icon={GraduationCap}
            />
            <TimelineItem 
              year="2018 - 2020"
              title="DAV BHEL School Ranipet"
              subtitle="AISSCE - 75% | CBSE"
              desc="Completed Senior Secondary Education."
              icon={GraduationCap}
            />
            <TimelineItem 
              year="Completed 2018"
              title="Our Lady's Matriculation School"
              subtitle="SSLC - 89% | Tamil Nadu State Board"
              desc="Completed Secondary Education."
              icon={GraduationCap}
            />
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Key <span className="text-gradient">Achievements</span></h2>
          <div className="glass" style={{ padding: '2rem' }}>
            <TimelineItem 
              year="2020 - 2024"
              title="Class Representative"
              desc="Managed class activities and represented students effectively."
              icon={Award}
            />
            <TimelineItem 
              year="2020 - 2022"
              title="NSS Student Co-ordinator"
              desc="Organized and led National Service Scheme activities."
              icon={Award}
            />
            <TimelineItem 
              year="2023 - 2024"
              title="Treasurer"
              desc="Ranipet Trainers Alliance Club."
              icon={Award}
            />
            <TimelineItem 
              year="2021 - 2023"
              title="Member"
              desc="Ranipet Liberty Lions Club."
              icon={Award}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center' }}>
      <div className="glass" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Get In <span className="text-gradient">Touch</span></h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          I am a good communicator, public speaker, and an excellent team player ready to contribute.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <div className="icon-box">
              <Mail size={24} />
            </div>
            <a href="mailto:bharathkumarars@gmail.com" style={{ color: 'var(--text-main)', wordBreak: 'break-all' }}>bharathkumarars@gmail.com</a>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <div className="icon-box">
              <Phone size={24} />
            </div>
            <span>+91 9488534631</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <div className="icon-box">
              <MapPin size={24} />
            </div>
            <span>7, Teacher's Colony,<br/>Ranipet - 632401</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="mailto:bharathkumarars@gmail.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
            <Mail size={20} /> Hire Me
          </a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/bharath-kumar-ar-s-848a44214/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}>
              <Linkedin size={28} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ paddingTop: '1rem' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <ExperienceAndEducation />
      <Projects />
      <Contact />
      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Bharath Kumar AR S. Built with React & Passion.</p>
      </footer>
    </div>
  );
};

export default App;
