import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="container" id="education">
      <div className="education-container">
        <h1>Education</h1>
        <p className="subtitle">Academic foundations and milestones.</p>
        <div className="education-grid">
          
          <div className="education-card main-card">
            <div className="card-header">
              <div className="logo-wrapper bg-indigo">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
              </div>
              <div className="header-text">
                <h2>Bachelor of Technology in Information Technology</h2>
                <h3>Indian Institute of Information Technology (IIIT) Sonepat</h3>
                <span className="date-tag">2022 - 2026</span>
              </div>
            </div>
            <div className="card-body">
              <div className="grade-badge">
                <span className="label">CGPA</span>
                <span className="value">8.0 / 10 (80%)</span>
              </div>
              <p className="description font-light text-gray">
                Building a rigorous foundation in Machine Learning, Deep Learning, Computer Vision, Operating Systems, Database Systems, and Natural Language Processing.
              </p>
              
              <div className="achievements-section">
                <h4>Key Highlights & Achievements</h4>
                <div className="achievements-list">
                  <div className="achievement-item">
                    <FontAwesomeIcon icon={faCode} className="icon-purple" />
                    <div>
                      <h5>Competitive Programming</h5>
                      <p>Solved 500+ algorithmic problems across Codeforces, LeetCode, CodeChef, and GeeksforGeeks. Consistent ranking in top 5% of global competitors.</p>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <FontAwesomeIcon icon={faUsers} className="icon-purple" />
                    <div>
                      <h5>Leadership & E-Cell IIIT Sonepat</h5>
                      <p>Served as Social Media Lead. Managed 5+ developers, orchestrated targeted campaigns boosting event attendance by 30% and club engagement by 20%.</p>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <FontAwesomeIcon icon={faAward} className="icon-purple" />
                    <div>
                      <h5>Smart India Hackathon & EBSB</h5>
                      <p>Developed solutions for real-time processing challenges under SIH. Participated in inter-state cultural exchange program representing diversity awareness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-grid">
            <div className="education-card">
              <div className="card-header">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="header-text font-small">
                  <h2>Senior Secondary (Class XII)</h2>
                  <h3>Sri Chaitanya College, Telangana</h3>
                  <span className="date-tag">2020 - 2022</span>
                </div>
              </div>
              <div className="card-body">
                <div className="grade-badge">
                  <span className="label">Score</span>
                  <span className="value">84.6%</span>
                </div>
                <p className="description font-light text-gray">
                  Specialized in Mathematics, Physics, and Chemistry (MPC) stream under the Telangana State Board of Intermediate Education.
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="header-text font-small">
                  <h2>Matriculation (Class X)</h2>
                  <h3>Sri Aurobindo High School, Telangana</h3>
                  <span className="date-tag">2019 - 2020</span>
                </div>
              </div>
              <div className="card-body">
                <div className="grade-badge">
                  <span className="label">Grade</span>
                  <span className="value">10.0 GPA (100%)</span>
                </div>
                <p className="description font-light text-gray">
                  Completed secondary education under the Telangana State Board of Secondary Education, achieving a perfect GPA.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
