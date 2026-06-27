import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Publications.scss';

function Publications() {
  return (
    <div className="publications-container" id="publications">
      <h1>Publications</h1>
      <p className="subtitle">Research papers published in IEEE conferences.</p>
      <div className="publications-grid">
        <div className="publication-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faBookOpen} size="2x" />
          </div>
          <div className="publication-content">
            <h2>AI-Driven Endangered Species Detection and Conservation Using Deep Learning</h2>
            <p className="authors">Nikshitha, V., et al.</p>
            <p className="venue">
              2026 IEEE CIPHER, NIT Jalandhar, Feb 2026
            </p>
            <p className="doi">DOI: 10.1109/CIPHER70417.2026.11523743</p>
            <a 
              href="https://ieeexplore.ieee.org/abstract/document/11523743" 
              target="_blank" 
              rel="noreferrer" 
              className="publication-link"
            >
              View on IEEE Xplore <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
            </a>
          </div>
        </div>

        <div className="publication-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faBookOpen} size="2x" />
          </div>
          <div className="publication-content">
            <h2>Dual-Stage Deep Learning Model for Glaucoma Detection through Optic Disc–Cup Segmentation and CDR Analysis</h2>
            <p className="authors">Nikshitha, V., et al.</p>
            <p className="venue">
              2026 IEEE CIPHER, NIT Jalandhar, Feb 2026
            </p>
            <p className="doi">DOI: 10.1109/CIPHER70417.2026.11523802</p>
            <a 
              href="https://ieeexplore.ieee.org/abstract/document/11523802" 
              target="_blank" 
              rel="noreferrer" 
              className="publication-link"
            >
              View on IEEE Xplore <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
