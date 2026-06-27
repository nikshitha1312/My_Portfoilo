import React from "react";
import { motion } from "framer-motion";
import projectEndangered from '../assets/images/project_endangered.png';
import projectGrammar from '../assets/images/project_grammar.png';
import projectTripmate from '../assets/images/project_tripmate.png';
import '../assets/styles/Project.scss';

const projectsData = [
  {
    id: "endangered",
    title: "Endangered Species Detection & Prevention",
    image: projectEndangered,
    tech: "React.js, Flask, Python, PyTorch, YOLO, OpenCV, REST APIs, Netlify",
    desc: "Built a full-stack wildlife conservation platform using React.js, Flask, PyTorch, YOLO, and OpenCV. The application identifies endangered species from uploaded images and provides conservation insights through an integrated knowledge base containing IUCN Red List information, habitat details, and conservation status. The platform was deployed on Netlify with an interactive user interface for real-time predictions.",
    github: "https://github.com/nikshitha1312/Endagered_species_guide",
    demo: "https://endangerdspecies.netlify.app/",
    alt: false
  },
  {
    id: "grammar",
    title: "Grammar Scoring Engine",
    image: projectGrammar,
    tech: "Python, Streamlit, SpeechRecognition, TextBlob, LanguageTool, NLP",
    desc: "Developed an AI-powered grammar evaluation application using Streamlit, SpeechRecognition, TextBlob, and LanguageTool. The application converts spoken English into text, analyzes grammatical correctness using NLP techniques, and provides automated grammar feedback along with evaluation scores through an interactive web interface.",
    github: "https://github.com/nikshitha1312/Grammar_Scoring_Engine_SHL_assess",
    alt: true
  },
  {
    id: "tripmate",
    title: "TripMate Travel Manager",
    image: projectTripmate,
    tech: "React, HTML, JavaScript, CSS, Frontend UI",
    desc: "TripMate Travel Manager is a travel planning web application built using React, HTML, JavaScript, and CSS. The system allows users to manage their travel schedules, customize lists of attractions, and log submissions of up to 100+ items. It features interactive guides for key sightseeing destinations in Japan, equipped with embedded maps, video links, and details on local history and culture, enabling users to orchestrate and visualise their travel itineraries in a single platform.",
    github: "https://github.com/nikshitha1312",
    alt: false
  }
];

function Project() {
  return (
    <div className="container" id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <p className="subtitle">Some of the projects I've built to solve real-world problems.</p>
        
        <div className="projects-list-vertical">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-row-card ${project.alt ? 'row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Side */}
              <div className="project-image-side">
                <a href={project.demo || project.github} target="_blank" rel="noreferrer" className="image-link-wrapper">
                  <img src={project.image} alt={project.title} className="project-photo" />
                </a>
              </div>

              {/* Content Side */}
              <div className="project-content-side">
                <h2>{project.title}</h2>
                
                <p className="tech-list">
                  Technologies Used: {project.tech}
                </p>
                
                <p className="description">{project.desc}</p>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Project;