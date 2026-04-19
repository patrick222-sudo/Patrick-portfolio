import React from 'react';
import './App.css';
import profilePic from './assets/pic.jpeg';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo text-gradient">Patrick Okoro.</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className="section-container hero">
        <div className="hero-content animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="hero-subtitle">Frontend Developer</span>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Patrick Okoro</span><br />
            Building digital experiences.
          </h1>
          <p className="hero-desc">
            I craft responsive, dynamic, and beautiful web applications. 
            Blending aesthetics with functionality is my passion.
          </p>
          
          <div className="stats-container">
            <div className="stat-box">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
          </div>

          <div className="hero-actions" style={{ marginTop: '30px' }}>
            <a href="#projects" className="btn-primary">
              View Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-bg"></div>
          <img src={profilePic} alt="Patrick Okoro" className="hero-image" />
        </div>
      </section>

      <section id="about" className="section-container">
        <h2 className="section-title text-gradient">About Me</h2>
        <div className="about-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="about-text">
            Hello! I'm Patrick Okoro, a passionate Frontend Developer who loves crafting immersive and beautiful digital experiences. With a keen eye for design and a strong foundation in modern web technologies, I transform complex ideas into elegant, intuitive interfaces. I believe that great code is just as important as great design, and I strive to build applications that are not only performant but also accessible and visually stunning.
          </p>
          <div className="location-badge glass">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Nigeria
          </div>
          <p className="availability">
            Available for remote work
          </p>
        </div>
      </section>

      <section id="skills" className="section-container">
        <h2 className="section-title text-gradient">Tech Stack</h2>
        <div className="skills-grid">
          
          <div className="skill-card glass animate-fade-in">
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path fill="#61DAFB" d="M64 80.648a16.648 16.648 0 1 1 0-33.296 16.648 16.648 0 0 1 0 33.296zm0-119.78C26.541-39.132-7.536 10.373 14.86 49.167 37.257 87.962 82.68 97.433 113.843 66.27c31.163-31.163 21.692-76.586-17.103-98.983C77.946-43.208 47.93-44.595 24.37-30.803L14.73 24.086c8.533-31.854 44.13-48.55 75.984-40.017C122.569-7.398 139.265 28.2 130.732 60.054c-8.533 31.854-44.13 48.55-75.984 40.017C22.894 91.538 6.198 55.94 14.731 24.086l-9.64 54.889c-23.56 13.792-22.173 43.808-10.686 64.933a64.062 64.062 0 1 0 125.109-24.51c-16.711-40.354-68.6-59.39-106.662-36.95L24.37 92.42c23.56-13.792 53.576-12.405 76.51 10.53L89.37 91.43c-15.688-15.688-39.366-18.423-57.944-7.252l9.02-51.341c29.13 17.587 64.957-2.316 64.957-36.273a38.4 38.4 0 1 0-76.8 0c0 33.957 35.827 53.86 64.957 36.273L89.37 84.178c18.578-11.171 21.313-34.849 5.625-50.537l-11.51 11.52c-22.934 22.934-21.547 52.95 2.013 76.51L64 102.32c-38.062 22.44-89.951 3.404-106.662-36.95A64.062 64.062 0 1 0 54.36 143.81l9.64-54.89z" transform="scale(0.8) translate(15, 40)"></path>
            </svg>
            <span className="skill-name">React</span>
          </div>

          <div className="skill-card glass animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path d="M14.075 5.568L22.935 105.114 62.909 116.299 102.836 105.114 111.458 8.441z" fill="#E34F26"></path>
              <path d="M62.909 107.568V14.153L102.261 14.153 94.613 99.412z" fill="#EF652A"></path>
              <path d="M25.992 25.109L27.027 36.904 90.959 36.904 89.986 48.699 28.094 48.699 29.129 60.494 88.948 60.494 86.822 84.975 62.915 91.545 39.008 84.975 37.94 72.84H26.113L28.188 92.93 62.915 102.664 97.643 92.93 101.403 50.41z" fill="#EBEBEB"></path>
            </svg>
            <span className="skill-name">HTML5</span>
          </div>

          <div className="skill-card glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path d="M14.075 5.568L22.935 105.114 62.909 116.299 102.836 105.114 111.458 8.441z" fill="#1572B6"></path>
              <path d="M62.909 107.568V14.153L102.261 14.153 94.613 99.412z" fill="#33A9DC"></path>
              <path d="M25.992 25.109L99.475 25.109 98.44 36.904 38.647 36.904 39.682 48.699 88.948 48.699 86.822 84.975 62.915 91.545 39.008 84.975 37.94 72.84H26.113L28.188 92.93 62.915 102.664 97.643 92.93 101.403 50.41 102.438 38.614 103.473 26.819z" fill="#EBEBEB"></path>
            </svg>
            <span className="skill-name">CSS</span>
          </div>

          <div className="skill-card glass animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path d="M26 68.321c2.146-24.636 18.06-38.384 41.522-38.384 14.622 0 25.433 4.292 34.469 13.91l-14.316 11.764c-5.748-6.13-11.493-9.5-20.153-9.5-12.756 0-18.423 7.852-19.188 17.581-.383 4.98-.383 14.939-.383 14.939-.383 14.025 8.12 18.391 19.112 18.391 8.887 0 14.861-3.6 20.457-10.342l14.239 10.651c-8.964 12.029-21.225 18.468-35.155 18.468-23.77 0-41.905-13.791-41.905-38.653 0-.154.076-4.52.076-4.52" fill="#38B2AC"></path>
              <path d="M49.205 29.937h70.364v34.466H49.205z" fill="#38B2AC" opacity=".25"></path>
            </svg>
            <span className="skill-name">Tailwind</span>
          </div>

          <div className="skill-card glass animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path d="M0 0h128v128H0z" fill="#F7DF1E"></path>
              <path d="M72.391 103.567c-6.845 4.887-14.776 7.498-23.364 7.498-6.079 0-11.83-1.077-17.151-3.14-5.321-2.064-9.829-4.887-13.435-8.312l9.043-12.637c3.914 3.197 8.041 5.566 12.38 7.027 4.341 1.465 8.674 2.193 12.981 2.193 4.298 0 7.747-.84 10.252-2.493 2.492-1.652 3.766-3.839 3.766-6.495 0-2.316-.763-4.184-2.28-5.59-1.517-1.406-4.708-2.613-9.458-3.564L46.66 76.54c-7.904-1.579-13.884-4.22-17.842-7.854-3.957-3.633-5.962-8.528-5.962-14.61 0-6.202 2.457-11.396 7.37-15.544 4.908-4.148 11.536-6.242 19.839-6.242 8.358 0 15.556 1.942 21.534 5.86l-7.794 13.064c-5.238-3.085-10.463-4.646-15.659-4.646-3.791 0-6.736.816-8.835 2.457-2.083 1.637-3.141 3.585-3.141 5.82 0 1.947.886 3.498 2.656 4.636 1.765 1.144 5.405 2.194 10.903 3.146l8.47 1.511c9.309 1.706 15.932 4.62 19.813 8.745 3.882 4.12 5.85 9.429 5.85 15.908 0 6.643-2.632 12.062-7.868 16.208-5.234 4.145-12.289 6.22-21.135 6.22-9.699 0-18.06-2.456-25.077-7.372l9.646-13.332zM111.42 108.854h-18v-68h18z" fill="#000"></path>
            </svg>
            <span className="skill-name">JavaScript</span>
          </div>

          <div className="skill-card glass animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path d="M125.101 60.106L67.892 2.899a7.618 7.618 0 0 0-10.771 0L42.235 17.781l14.417 14.417c3.483-1.609 7.788-.868 10.514 1.859 3.031 3.031 3.654 7.65 1.83 11.233l13.565 13.565c3.583-1.823 8.204-1.2 11.233 1.83 3.854 3.854 3.854 10.101 0 13.955-3.853 3.85-10.102 3.85-13.955 0-3.03-3.03-3.651-7.65-1.83-11.233l-13.256-13.256v28.845c1.472.635 2.843 1.638 3.96 2.756 3.854 3.854 3.854 10.102 0 13.955-3.854 3.854-10.102 3.854-13.956 0-3.853-3.853-3.853-10.101 0-13.955 1.547-1.548 3.493-2.529 5.568-2.91V64.062a9.854 9.854 0 0 0-4.634-1.895l-13.88 13.88c.032.544.113 1.077.113 1.625 0 3.85-3.111 6.963-6.964 6.963-3.853 0-6.963-3.113-6.963-6.963 0-3.851 3.11-6.964 6.963-6.964.631 0 1.237.106 1.826.262l14.076-14.076C50.292 56.634 50 55.772 50 54.858c0-3.854 3.11-6.964 6.963-6.964 1.156 0 2.247.288 3.2.793l-15.023-15.02L2.898 60.106a7.618 7.618 0 0 0 0 10.77l57.209 57.21a7.618 7.618 0 0 0 10.771 0l54.223-54.211a7.618 7.618 0 0 0 0-10.769" fill="#F1502F"></path>
            </svg>
            <span className="skill-name">Git</span>
          </div>
          
          <div className="skill-card glass animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <svg className="skill-icon" viewBox="0 0 128 128">
              <path d="M64 0C28.652 0 0 28.652 0 64c0 28.271 18.334 52.25 43.765 60.672 3.2.593 4.372-1.385 4.372-3.084 0-1.523-.058-6.6-.088-11.96-17.801 3.87-21.561-7.469-21.561-7.469-2.91-7.393-7.106-9.359-7.106-9.359-5.811-3.974.44-3.894.44-3.894 6.425.452 9.8 6.592 9.8 6.592 5.706 9.774 14.975 6.953 18.625 5.318.577-4.137 2.235-6.953 4.066-8.549-14.21-.659-30.737-12.724-30.737-32.969 0-7.28 2.602-13.226 6.868-17.893-.687-1.616-2.977-8.461.652-17.636 0 0 5.6-1.792 18.328 6.822 5.321-1.48 11.03-2.22 16.697-2.245 5.666.025 11.376.765 16.697 2.245 12.721-8.614 18.315-6.822 18.315-6.822 3.636 9.175 1.346 16.02.658 17.636 4.274 4.667 6.863 10.613 6.863 17.893 0 20.301-16.551 32.288-30.803 32.911 2.298 1.986 4.348 5.897 4.348 11.874 0 8.573-.078 15.485-.078 17.587 0 1.71 1.157 3.702 4.4 3.078C109.688 116.236 128 92.261 128 64c0-35.348-28.652-64-64-64z" fill="#FFF"></path>
            </svg>
            <span className="skill-name">GitHub</span>
          </div>

        </div>
      </section>

      <section id="projects" className="section-container">
        <h2 className="section-title text-gradient">Featured Projects</h2>
        <div className="projects-grid">
          
          <a href="https://task-ify-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card glass animate-fade-in">
            <div className="project-img-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Taskify App</h3>
              <p className="project-desc">A beautiful task management web app with gamified points system, streaks, and modern UI capabilities.</p>
              <span className="project-link">View Project →</span>
            </div>
          </a>

          <a href="https://pzimgadgets.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="project-img-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">PzimGadgets</h3>
              <p className="project-desc">Premium gadget store interface, featuring polished dark mode aesthetics and rich digital interactions.</p>
              <span className="project-link">View Project →</span>
            </div>
          </a>

          <a href="https://vicbank-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card glass animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="project-img-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">VicBank App</h3>
              <p className="project-desc">A professional fintech application demo with secure balance abstractions and smooth utility modules.</p>
              <span className="project-link">View Project →</span>
            </div>
          </a>

        </div>
      </section>

      <section id="contact" className="section-container">
        <h2 className="section-title text-gradient">Let's Work Together</h2>
        <div className="contact-grid">
          
          <div className="contact-cards">
            <a href="mailto:patrickokoro604@gmail.com" className="contact-card glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span className="contact-method">Email Me</span>
              <span className="contact-value">patrickokoro604@gmail.com</span>
            </a>

            <a href="https://wa.me/2348023722260" target="_blank" rel="noopener noreferrer" className="contact-card glass animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span className="contact-method">WhatsApp</span>
              <span className="contact-value">+234 802 372 2260</span>
            </a>
          </div>

          <div className="contact-form-wrapper glass animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="contact-form-title">Send a Message</h3>
            <form className="contact-form" action="mailto:patrickokoro604@gmail.com" method="POST" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="Name" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="Email" className="form-control" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="Message" className="form-control" placeholder="Hello Patrick, I would like to discuss..." required></textarea>
              </div>
              <button type="submit" className="btn-primary btn-submit">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>

        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Patrick Okoro. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
