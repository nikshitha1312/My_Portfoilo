import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/nikshitha1312" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/v-nikshitha-860655258/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:nikshitha1312@gmail.com"><EmailIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/nikshitha1312" target="_blank" rel="noreferrer">Nikshitha Vadthyavath</a> with 💜</p>
    </footer>
  );
}

export default Footer;