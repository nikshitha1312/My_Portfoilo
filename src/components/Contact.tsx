import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          <div className="contact-info-table">
            <div className="contact-info-item">
              <EmailIcon />
              <a href="mailto:nikshitha1312@gmail.com">nikshitha1312@gmail.com</a>
            </div>
            <div className="contact-info-item">
              <PhoneIcon />
              <a href="tel:+919347556415">+91 9347556415</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;