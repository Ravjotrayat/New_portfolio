import React from 'react'
// import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

export default function Navbar(props){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <Link className="navbar-brand mx-3" to="#">{props.title}</Link>
          {/* Navbar */}
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">

               <li className="nav-item mx-3">
                <Link className="nav-link active" to="/"><button type="button" class="btn btn-outline-secondary" >Home</button></Link>
              </li>
               <li className="nav-item mx-3">
                <Link className="nav-link" to="/About"><button type="button" className="btn btn-outline-secondary" >About</button></Link>
              </li>
              {/* <li className="nav-item mx-3">
                <Link className="nav-link"  to="/What_i_do"><button type="button" class="btn btn-outline-secondary" >What I Do</button></Link>
              </li> */}
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/Skills"><button type="button" class="btn btn-outline-secondary" >Skills</button></Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link"  to="/Education"><button type="button" class="btn btn-outline-secondary" >Education</button></Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link"  to="/Gallery"><button type="button" class="btn btn-outline-secondary" >Gallery</button></Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link"  to="/Contact"><button type="button" class="btn btn-outline-secondary" >Contact</button></Link>
              </li> 
            </ul>
            </div>
          
        </div>
      </nav>
 
    )
}