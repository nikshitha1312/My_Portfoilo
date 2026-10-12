import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <p className="subtitle">My professional journey and the impact I'm creating.</p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">A3CEND / Ascend Business Solutions Pvt. Ltd.</h4>
            <p className="timeline-tech">
              Technologies Used: React, TypeScript, Node.js, Express.js, PostgreSQL, Drizzle ORM, REST APIs, AI Workflows
            </p>
            <ul className="timeline-bullets">
              <li>Develop and enhance production-facing full-stack learning and capability-building platforms using React, TypeScript, Node.js, Express.js, PostgreSQL, Drizzle ORM, and REST APIs.</li>
              <li>Build and maintain learner and company-admin workflows covering courses, journeys, simulations, AI coaching, knowledge bases, analytics, and AI-powered learning experiences.</li>
              <li>Implemented and improved company-admin analytics and AI usage tracking, including workflow-level usage capture, AI request tracing, feature-level analytics, and token/credit usage visibility.</li>
              <li>Developed improvements to course and journey generation workflows to reduce unnecessary AI usage, support incremental generation, and improve reliability of AI-generated learning content.</li>
              <li>Implemented and debugged course magic-link access flows, enabling learners to access complete course journeys including learning, practice, knowledge checks, and coaching steps with URL and refresh-state persistence.</li>
              <li>Worked across frontend, backend, database, and API layers to debug production issues, integrate features, optimize workflows, and maintain code through Git/GitHub-based development.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & CEO</h3>
            <h4 className="vertical-timeline-element-subtitle">Gozy Private Limited</h4>
            <p className="timeline-tech">
              Technologies Used: React, React Native, Material-UI, JavaScript, REST APIs, JWT Authentication, Candidate Filtering
            </p>
            <ul className="timeline-bullets">
              <li>Built responsive web applications using React and Material-UI, including interactive dashboards for monitoring content pipeline metrics and user engagement.</li>
              <li>Developed a dynamic careers platform with job listings, backend API integration, candidate filtering, and application management using JWT authentication.</li>
              <li>Developed a cross-platform mobile application using React Native, integrating backend APIs and coordinating frontend-backend data flow for seamless user experiences.</li>
              <li>Managed startup operations including product strategy, vendor coordination, client relationship management, go-to-market positioning, and enterprise client acquisition.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2026 - Apr 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">LLM Post-Training Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ethara.ai — Multimodal AI Alignment</h4>
            <p className="timeline-tech">
              Concepts & Tools: Prompt Engineering, LLM Evaluation, Multimodal AI, ELO Benchmarking, Dataset Alignment
            </p>
            <ul className="timeline-bullets">
              <li>Annotated and evaluated LLM responses across text, image, audio, and video modalities; designed evaluation rubrics ensuring consistency across 1,000+ samples.</li>
              <li>Conducted prompt engineering experiments testing 50+ variations across zero-shot, few-shot, reasoning, and tool-oriented workflows; analyzed LLM output patterns using structured evaluation frameworks.</li>
              <li>Performed ELO-based comparative benchmarking to evaluate model outputs, documented performance deltas, and identified systematic failure modes.</li>
              <li>Contributed to a multimodal alignment dataset combining text and visual reasoning tasks and maintained data validation pipelines for quality assurance.</li>
            </ul>
            <a 
              href="https://github.com/nikshitha1312/CERTIFICATE/blob/main/Internship%20Completion%20Letter%20-%20Vadthyavath%20Nikshitha.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="timeline-cert-link"
            >
              View Certificate
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Hyderabad — Federated Learning for Facial Emotion Recognition</h4>
            <p className="timeline-tech">
              Technologies Used: Python, PyTorch, FedProto, FERPlus, DeepFace Emotions, CNN, Scikit-Learn, Differential Privacy
            </p>
            <ul className="timeline-bullets">
              <li>Implemented FedProto-based federated learning for facial emotion recognition across 3 distributed clients, enabling collaborative model training without centralizing client data.</li>
              <li>Curated and annotated 5,000+ facial emotion samples from the DeepFace Emotions dataset; implemented stratified sampling and PyTorch data loaders for balanced yet non-IID client distributions.</li>
              <li>Developed and trained a CNN-based emotion recognition model using PyTorch over 225 communication rounds, incorporating differential privacy constraints.</li>
              <li>Evaluated model performance using Scikit-Learn metrics and analyzed federated convergence, class-wise performance, and the impact of data heterogeneity.</li>
            </ul>
            <a 
              href="https://github.com/nikshitha1312/CERTIFICATE/blob/main/IIT%20HYD%20certificate.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="timeline-cert-link"
            >
              View Certificate
            </a>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;