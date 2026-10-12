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
    id: "fullstack",
    icon: faCode,
    title: "Full Stack & Frontend Engineering",
    desc: "Developing and enhancing production-facing full-stack platforms using React, TypeScript, Node.js, Express.js, PostgreSQL, and Drizzle ORM. Implementing type-safe schemas with Zod, state management with React Query, responsive UIs with Tailwind CSS and Material-UI, and high-performance REST APIs.",
    image: imgFullStack,
    tagTitle: "Full-Stack Development Stack:",
    tags: [
      "React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", 
      "Drizzle ORM", "Neon", "REST APIs", "React Native", "Tailwind CSS", 
      "Vite", "Material-UI", "React Query", "React Hook Form", "JWT Authentication", 
      "Zod", "Wouter", "Radix UI"
    ],
    alt: false
  },
  {
    id: "aiml",
    icon: faBrain,
    title: "AI/ML, Generative AI & Alignment",
    desc: "Engineering advanced deep learning models, federated learning pipelines, and modern GenAI architectures including LLMs, RAG, Embeddings, Vector Databases, and Agentic AI. Experienced in prompt engineering, ELO comparative benchmarking, and multimodal data alignment pipelines.",
    image: imgAiMl,
    tagTitle: "AI/ML & GenAI Stack:",
    tags: [
      "LLMs", "RAG", "Embeddings", "Vector Databases", "Agentic AI", 
      "Prompt Engineering", "OpenAI API", "PyTorch", "TensorFlow", 
      "Transformers", "NLP", "Scikit-Learn", "CNN", "Federated Learning", 
      "Computer Vision", "Speech Recognition"
    ],
    alt: true
  },
  {
    id: "tools",
    icon: faRobot,
    title: "Cloud, DevOps & Data Tools",
    desc: "Deploying and managing scalable applications with Docker, AWS (EC2, S3), Vercel, and Netlify. Orchestrating version control via Git & GitHub, and utilizing comprehensive data analysis and visualization tooling with OpenCV, Jupyter, Plotly, Matplotlib, and Seaborn.",
    image: imgTools,
    tagTitle: "Cloud & Dev Tools:",
    tags: [
      "Git", "GitHub", "Docker", "AWS (EC2, S3)", "Vercel", "Netlify", 
      "PostgreSQL", "MySQL", "OpenCV", "Jupyter", "Plotly", "Matplotlib", "Seaborn"
    ],
    alt: false
  },
  {
    id: "strengths",
    icon: faAward,
    title: "Programming Languages & Core Execution",
    desc: "Proficient across multiple languages and paradigms with deep algorithmic problem solving. Experienced in data annotation, model evaluation rubrics, workflow optimization, agile team execution, and leading startup operations from concept to production delivery.",
    image: imgStrengths,
    tagTitle: "Languages & Strengths:",
    tags: [
      "Python", "TypeScript", "JavaScript", "C/C++", "SQL", "HTML", "CSS", "Java",
      "Model Evaluation", "Workflow Optimization", "Product Strategy", "Leadership & Execution"
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