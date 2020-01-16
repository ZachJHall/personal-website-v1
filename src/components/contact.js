import React from 'react'
import '../css/contact.css';
import GitLogo from '../images/iconmonstr-github-1.svg';
import LinkedinLogo from '../images/iconmonstr-linkedin-4.svg';
import EmailLogo from '../images/iconmonstr-email-10.svg';


const Contact = () => {
  return (
    <div class="contact-links">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ZachJHall" id="github-link"><img src={GitLogo} width="64" height="64" alt="Link to Github"/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/zachhall-cs"><img src={LinkedinLogo} width="64" height="64" alt="Link to Linkedin"/></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:zachjohnhall+personalwebsite@gmail.com" id="email-link"><img src={EmailLogo} width="64" height="64" alt="Link to contact email"/></a>
    </div>
  )
}

export default Contact
