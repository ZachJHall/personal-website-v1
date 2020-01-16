import React from 'react';
import '../css/header.css';
import Pdf from './ZachHall_Resume_For_Website.pdf'

const Header = () => {
  return (
    <div class="header-links">
    <a target="_blank" rel="noopener noreferrer" href= {Pdf} id="resume-link">Resume</a>
    </div>
  )
}

export default Header
