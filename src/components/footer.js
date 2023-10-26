import React from 'react';
import linkedinLogo from '../images/linkedin.png';
import githubIcon from '../images/github.png';

function Footer() {
  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <div className='footer'>

      {/* Email */}
      <a href="mailto:brousy2222@gmail.com">Contact Me</a>
      <br></br> 

      {/* GitHub */}
      <a href="https://github.com/brousy">
        <img src={githubIcon} alt="GitHub" style={iconStyle} />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/brou-quinn-370622212/">
        <img src={linkedinLogo} alt="LinkedIn" style={iconStyle} />
      </a>
    </div>
  );
}

export default Footer;
