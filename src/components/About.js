import React from 'react';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Icons for social media
import profilePhoto from './pic.jpg'; 
export default function About(props) {
    return (
        <>
            <div className="about-section">
  {/* Left Side: Profile Picture */}
  <div className="about-image">
    <img src={profilePhoto} alt="Ravjot Singh Rayat" />
  </div>

  {/* Right Side: About Me Text */}
  <div className="about-content">
    <h2>About Me</h2>
    <p>
      I am Ravjot Singh Rayat, a passionate Full Stack Developer with a keen interest in building robust and scalable web applications. My expertise spans across both frontend and backend technologies, enabling me to deliver comprehensive solutions that meet user needs.
    </p>

    {/* Skills and Technologies */}
    <div className="skills-container">
      <h3>Skills/Tools</h3>
      <ul className="skills-list">
  <li><span>HTML/CSS </span></li>
  <li><span>JavaScript</span></li>
  <li><span>React.js</span></li>
  <li><span>Bootstrap</span></li>
  <li><span>Java</span></li>
  <br />
  <li><span>Python</span></li>
  <li><span>Spring Boot</span></li>
  <li><span>MySQL</span></li>
  <li><span>Spring MVC</span></li>
  <li><span>Spring Security</span></li> <br />
  <li> <span>Hibernate/JPA</span> </li>
  {/* <li> <span></span> </li> */}
</ul>

    </div>

    {/* Download CV Button */}
    <a href="https://drive.google.com/drive/folders/1lWPGBLdUFJa3fCJRns_j3nmLvYAYHfQN?usp=sharing" target="_blank" rel="noopener noreferrer" className="cv-button">
      Download CV
    </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://drive.google.com/drive/folders/1yNiFo5gFMLUSWWGm85t1BC0FhFcukVK8?usp=drive_link
" target="_blank" rel="noopener noreferrer" className="cv-button2" >View Certificates</a>

  </div>
</div>

        </>
    );
}
