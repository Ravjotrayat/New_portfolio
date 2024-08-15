
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import profilePhoto from './Raman_pic.jpg'; 
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Education from './components/Education'
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter,FaPhone,FaEnvelope } from 'react-icons/fa'; // Icons for social media
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import  useEffect  from 'react';


function App() {
  return (
    
      <Router>
      <Navbar title="Ravjot Singh" />

      <Routes>
        {/* Default Route to display About component */}
        <Route path="/" element={
          <>
            <div className="about-container">
      <div className="about-left">
        <div className="intro-text"><p>Hello, I am</p></div>
        <h1 className="name">Ravjot Singh Rayat</h1>
        <p className="underline">Developer</p>
        <p className="email"><FaEnvelope size={20} style={{ marginRight: '10px' }} />
        rayat.ravjotsingh@gmail.com</p>
        <p className="phone">
          <FaPhone size={20} style={{ marginRight: '10px' }} />
          +91-80024 98030
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ravjot-singh-rayat-7b282a224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Ravjotrayat" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://x.com/rayat_ravjot" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    {/* </div> */}


              
              {/* Right Side: Photograph */}
              <div className="about-right">
                <img src={profilePhoto} alt="Ravjot Singh Rayat" className="profile-photo" />
              </div>
            </div>
          </>
        }/>
        </Routes>




       <Routes>
          <Route path="/About" element={<About/>}/>
        </Routes>

        <Routes>
        <Route path ="/Contact" element={<Contact/>}/>
        </Routes>

        <Routes>
        <Route path ="/Education" element={<Education/>}/>
        </Routes>
        
        <Routes>
        <Route path ="/Gallery" element={<Gallery/>}/>
        </Routes>

        <Routes>
        <Route path ="/Skills" element={<Skills/>}/>
        </Routes>
      </Router>
  );
}
export default App;
