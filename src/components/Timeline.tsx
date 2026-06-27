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
            date="Jan 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & CEO</h3>
            <h4 className="vertical-timeline-element-subtitle">Gozy Private Limited</h4>
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
              Technologies Used: Frontend Development (React, React Native, Material-UI), JavaScript, FastAPI, REST APIs, JWT Authentication, PostgreSQL, Git
            </p>
            <p>
              At Gozy, I lead frontend development and product engineering, designing and building responsive web interfaces using React, Material-UI, and mobile applications with React Native. On the backend, I integrated secure REST APIs with JWT-based authentication, implemented dynamic dashboards for monitoring metrics, and built recruitment workflows. Managed startup operations including product strategy, vendor coordination, and client relationship management; led go-to-market positioning and enterprise client acquisition.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2026 - Apr 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">LLM Post-Training Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ethara.ai — Multimodal AI Alignment</h4>
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
              Concepts & Tools: Prompt Engineering, LLM Evaluation, Chain-of-Thought Prompting, ELO Ranking, Data Annotation, Multimodal AI, Quality Assurance
            </p>
            <p>
              Contributed to the post-training and evaluation pipeline of Large Language Models (LLMs), focusing on response quality, reasoning, and multimodal understanding. Annotated and evaluated AI-generated responses across text, image, audio, and video modalities. Conducted prompt engineering experiments using zero-shot, few-shot, and Chain-of-Thought (CoT) prompting to evaluate model behavior under varying constraints. Participated in ELO-based comparative rankings to determine preference alignment. <br/>
              <a href="https://github.com/nikshitha1312/CERTIFICATE/blob/main/Internship%20Completion%20Letter%20-%20Vadthyavath%20Nikshitha.pdf" target="_blank" rel="noreferrer" style={{color: '#5000ca', fontWeight: 'bold', display: 'inline-block', marginTop: '5px'}}>View Certificate</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Hyderabad — Federated Learning for Facial Emotion Recognition</h4>
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
              Technologies Used: Python, PyTorch, FedProto, FERPlus, DeepFace Emotions, Scikit-learn, Matplotlib, Seaborn
            </p>
            <p>
              Worked under the guidance of a research scholar on privacy-preserving facial emotion recognition using Federated Learning. Worked extensively with the FERPlus and DeepFace Emotions datasets, performing cleaning, class balancing, and preprocessing. Implemented the FedProto algorithm by partitioning classes across three distributed clients (non-IID distribution) to share prototype representations instead of raw data. Developed the complete training pipeline using PyTorch (data loaders, CNN training, rounds, and prototype aggregation) and evaluated convergence curves. <br/>
              <a href="https://github.com/nikshitha1312/CERTIFICATE/blob/main/IIT%20HYD%20certificate.pdf" target="_blank" rel="noreferrer" style={{color: '#5000ca', fontWeight: 'bold', display: 'inline-block', marginTop: '5px'}}>View Certificate</a>
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;