import React from 'react'
// import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

export default function Navbar(props){

    return(

      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand mx-3" to="#">{props.title}</Link>

    {/* Offcanvas for smaller screens */}
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Offcanvas content */}
    <div className="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{props.title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"
        data-bs-dismiss="offcanvas">
          <li className="nav-item mx-3">
            <Link className="nav-link active" to="/" ><button type="button" className="btn btn-outline-secondary">Home</button></Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/About" ><button type="button" className="btn btn-outline-secondary">About</button></Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Skills"><button type="button" className="btn btn-outline-secondary">Skills</button></Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Education"><button type="button" className="btn btn-outline-secondary">Education</button></Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Gallery"><button type="button" className="btn btn-outline-secondary">Gallery</button></Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Contact"><button type="button" className="btn btn-outline-secondary">Contact</button></Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Normal navbar for larger screens */}
    <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item mx-3">
          <Link className="nav-link active" to="/"><button type="button" className="btn btn-outline-secondary">Home</button></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/About"><button type="button" className="btn btn-outline-secondary">About</button></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/Skills"><button type="button" className="btn btn-outline-secondary">Skills</button></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/Education"><button type="button" className="btn btn-outline-secondary">Education</button></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/Gallery"><button type="button" className="btn btn-outline-secondary">Gallery</button></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/Contact"><button type="button" className="btn btn-outline-secondary">Contact</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
 
    )
}