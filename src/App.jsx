import React, { useState } from 'react';
import './App.css';
import profilePic from './assets/pic.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="logo-container">
          <div className="logo-box">OP</div>
          <span className="logo-text">Okoro Patrick</span>
        </a>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <a href="#contact" className="btn-hire" onClick={closeMenu}>Hire Me</a>
        </div>
      </nav>

      <section id="hero" className="section-container hero">
        <div className="hero-content animate-fade-in">
          <div className="availability-badge">
            <span className="status-dot"></span>
            Available for new projects
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Okoro<br/>Patrick<br/>Onyedikachukwu</span>
          </h1>
          <div className="hero-roles">
            Web Developer | AI Engineer | Tech Specialist
          </div>
          <div className="hero-neon-desc">
            DELIVERING EXCELLENCE IN EVERY PROJECT
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
            <a href="#contact" className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Contact Me
            </a>
            <a href="/CV.pdf" download className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download CV
            </a>
          </div>

          <div className="stats-container">
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years of<br/>Experience</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-border">
            <img src={profilePic} alt="Okoro Patrick Onyedikachukwu" className="hero-image" />
          </div>
          <div className="ai-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
            <span>AI Engineer</span>
          </div>
        </div>
      </section>

      <section id="about" className="section-container">
        <div className="section-head animate-fade-in">
          <span className="section-subtitle">WHO I AM</span>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </div>
        <div className="glass" style={{ padding: '40px', borderRadius: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            Hello! I'm Okoro Patrick Onyedikachukwu, a passionate Developer and AI Engineer who loves crafting immersive and beautiful digital experiences. With a keen eye for design and a strong foundation in modern tech, I transform complex ideas into elegant, intuitive interfaces.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', marginTop: '20px', border: '1px solid var(--border-color)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Nigeria
          </div>
        </div>
      </section>

      <section id="services" className="section-container">
        <div className="section-head animate-fade-in">
          <span className="section-subtitle">WHAT I DO</span>
          <h2 className="section-title">Services <span className="text-gradient">tailored for impact</span></h2>
        </div>
        
        <div className="services-grid">
          <div className="service-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
            </div>
            <h3 className="service-title">Front-end Development</h3>
            <p className="service-desc">Pixel-perfect, performant interfaces built with modern web standards.</p>
          </div>

          <div className="service-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
            </div>
            <h3 className="service-title">Web Design</h3>
            <p className="service-desc">Distinctive, conversion-focused designs that elevate your brand.</p>
          </div>

          <div className="service-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
            </div>
            <h3 className="service-title">SEO Optimization</h3>
            <p className="service-desc">Technical & content SEO to help you rank and reach the right users.</p>
          </div>

          <div className="service-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
            </div>
            <h3 className="service-title">Website Maintenance</h3>
            <p className="service-desc">Ongoing updates, security, and performance tuning for your site.</p>
          </div>
        </div>

        <div className="services-footer animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a href="#services" className="see-all-link">
            See all services
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </section>

      <section id="projects" className="section-container">
        <div className="section-head animate-fade-in">
          <span className="section-subtitle">PORTFOLIO</span>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <a href="https://task-ify-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="glass animate-fade-in" style={{ borderRadius: '24px', overflow: 'hidden', display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)', background: 'linear-gradient(135deg, rgba(0,242,254,0.1), rgba(168,85,247,0.1))' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>Taskify App</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>A beautiful task management web app with gamified points system, streaks, and modern UI capabilities.</p>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>View Project →</span>
            </div>
          </a>

          <a href="https://pzimgadgets.netlify.app/" target="_blank" rel="noopener noreferrer" className="glass animate-fade-in" style={{ borderRadius: '24px', overflow: 'hidden', display: 'block', textDecoration: 'none', color: 'inherit', animationDelay: '0.2s' }}>
            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)', background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(0,242,254,0.1))' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>PzimGadgets</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>Premium gadget store interface, featuring polished dark mode aesthetics and rich digital interactions.</p>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>View Project →</span>
            </div>
          </a>

          <a href="https://vicbank-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="glass animate-fade-in" style={{ borderRadius: '24px', overflow: 'hidden', display: 'block', textDecoration: 'none', color: 'inherit', animationDelay: '0.4s' }}>
            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)', background: 'linear-gradient(135deg, rgba(0,242,254,0.1), rgba(0,242,254,0.1))' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>VicBank App</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>A professional fintech application demo with secure balance abstractions and smooth utility modules.</p>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>View Project →</span>
            </div>
          </a>

        </div>
      </section>

      <section id="contact" className="section-container">
        <div className="contact-grid">
          
          <div className="contact-cards animate-fade-in">
            <a href="mailto:patickokoro604@gmail.com" className="contact-card">
              <div className="contact-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-info">
                <span className="contact-method">Email</span>
                <span className="contact-value">patickokoro604@gmail.com</span>
              </div>
            </a>

            <a href="tel:08023722260" className="contact-card">
              <div className="contact-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-info">
                <span className="contact-method">Phone</span>
                <span className="contact-value">08023722260</span>
              </div>
            </a>

            <a href="https://wa.me/2348023722260" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div className="contact-info">
                <span className="contact-method">WhatsApp</span>
                <span className="contact-value">Chat instantly</span>
              </div>
            </a>

            <div className="contact-card" style={{ cursor: 'default' }}>
              <div className="contact-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-info">
                <span className="contact-method">Location</span>
                <span className="contact-value">Nigeria — Available worldwide</span>
              </div>
            </div>

            <div className="contact-card" style={{ flexDirection: 'column', alignItems: 'flex-start', cursor: 'default' }}>
              <span className="contact-method">Follow me</span>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://wa.me/2348023722260" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="contact-form-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form className="contact-form" action="mailto:patickokoro604@gmail.com" method="POST" encType="text/plain">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="Name" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input type="email" id="email" name="Email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="Phone" className="form-control" placeholder="+234..." />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="service">Service</label>
                <select id="service" name="Service" className="form-control" defaultValue="">
                  <option value="" disabled>Select a service...</option>
                  <option value="frontend">Front-end Development</option>
                  <option value="design">Web Design</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="maintenance">Website Maintenance</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="Message" className="form-control" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn-submit full">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>

        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Okoro Patrick Onyedikachukwu. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
