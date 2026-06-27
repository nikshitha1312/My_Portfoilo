import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BriefcaseIcon from '@mui/icons-material/Work';
import FileTextIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/FolderOpen';
import RocketIcon from '@mui/icons-material/RocketLaunch';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/nikshitha_profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Nikshitha Vadthyavath" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nikshitha1312" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/v-nikshitha-860655258/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nikshitha1312@gmail.com"><EmailIcon/></a>
          </div>
          <h1>Nikshitha Vadthyavath</h1>
          <p className="hero-subtitle">AI Researcher & Full-Stack Developer | Founder & CEO @ Gozy Private Limited</p>
          
          <p className="hero-pitch">
            Building intelligent systems at the intersection of AI research, full-stack development, and product innovation to create real-world impact.
          </p>

          <div className="hero-buttons">
            <a 
              href="https://github.com/nikshitha1312/CERTIFICATE/blob/main/Internship%20Completion%20Letter%20-%20Vadthyavath%20Nikshitha.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
            >
              Download Resume
            </a>
            <a 
              href="#projects" 
              className="btn-secondary"
            >
              View My Work
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <BriefcaseIcon />
              <div>
                <span className="number">3+</span>
                <span className="label">Experiences</span>
              </div>
            </div>
            <div className="stat-card">
              <FileTextIcon />
              <div>
                <span className="number">2</span>
                <span className="label">IEEE Publications</span>
              </div>
            </div>
            <div className="stat-card">
              <FolderIcon />
              <div>
                <span className="number">3+</span>
                <span className="label">Major Projects</span>
              </div>
            </div>
            <div className="stat-card">
              <RocketIcon />
              <div>
                <span className="number">1</span>
                <span className="label">Startup Founded</span>
              </div>
            </div>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/nikshitha1312" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/v-nikshitha-860655258/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nikshitha1312@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;