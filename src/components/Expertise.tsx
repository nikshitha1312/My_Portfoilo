import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faRobot, faCode, faAward } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../assets/styles/Expertise.scss';

// Import generated abstract illustrations
import imgAiMl from '../assets/images/expertise_aiml.png';
import imgFullStack from '../assets/images/expertise_fullstack.png';
import imgTools from '../assets/images/expertise_tools.png';
import imgStrengths from '../assets/images/expertise_strengths.png';

const skillsData = [
  {
    id: "aiml",
    icon: faBrain,
    title: "AI/ML & Deep Learning Research",
    desc: "Engineering advanced deep learning architectures, computer vision systems, federated learning frameworks, and modern GenAI patterns like RAG, LangGraph, and Transformers. Focused on bridging academic research with real-world product intelligence.",
    image: imgAiMl,
    tagTitle: "Research & ML Stack:",
    tags: [
      "Machine Learning", "PyTorch", "TensorFlow", "Scikit-Learn", "CNN", 
      "Transfer Learning", "Federated Learning", "RAG", "LangGraph", 
      "Transformers", "Computer Vision", "NLP", "Speech Recognition"
    ],
    alt: false
  },
  {
    id: "fullstack",
    icon: faRobot,
    title: "Full Stack & Frontend Development",
    desc: "Building responsive, modern web applications and mobile platforms using the MERN stack, React Native, Flask, and Streamlit. Implementing secure JWT authentication, state management, and highly optimized REST APIs.",
    image: imgFullStack,
    tagTitle: "Development Tech:",
    tags: [
      "MERN Stack", "React", "React Native", "Node.js", "Express.js", 
      "Flask", "Streamlit", "REST APIs", "JWT Authentication", "HTML", "CSS"
    ],
    alt: true
  },
  {
    id: "tools",
    icon: faCode,
    title: "Tools, Cloud & Infrastructure",
    desc: "Orchestrating containerized nodes using Docker, deploying infrastructure on AWS (EC2, S3), Netlify, and Vercel, and maintaining robust CI/CD pipelines. Using advanced visualization tools like PowerBI, Excel, and data libraries like OpenCV and Plotly.",
    image: imgTools,
    tagTitle: "Cloud & Dev Tools:",
    tags: [
      "Git", "Docker", "AWS (EC2, S3)", "Netlify", "Vercel", "OpenCV", 
      "Jupyter", "Plotly", "Matplotlib", "Seaborn", "PostgreSQL", "SQL"
    ],
    alt: false
  },
  {
    id: "strengths",
    icon: faAward,
    title: "Core Execution & Strengths",
    desc: "Leading cross-functional developer operations, running customer discovery sprints, coordinating agile product backlogs, and managing product design from ideation to production delivery.",
    image: imgStrengths,
    tagTitle: "Leadership & Strategy:",
    tags: [
      "Problem Solving", "Research & Analysis", "Algorithm Design", 
      "Data Annotation & Evaluation", "Model Training", "Prompt Engineering", 
      "Product Development", "Leadership & Execution"
    ],
    alt: true
  }
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <p className="subtitle">Technologies and tools I work with to build intelligent and scalable solutions.</p>
        
        <div className="skills-list-vertical">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`skill-row-card ${skill.alt ? 'row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Side */}
              <div className="skill-image-side">
                <div className="image-frame">
                  <img src={skill.image} alt={skill.title} />
                </div>
              </div>

              {/* Content Side */}
              <div className="skill-content-side">
                <div className="title-area">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <h2>{skill.title}</h2>
                </div>
                
                <p className="description">{skill.desc}</p>
                
                <div className="tech-stack-area">
                  <span className="stack-title">{skill.tagTitle}</span>
                  <div className="tags-grid">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Expertise;