import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const navbarAdm = 
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">          
      <Link className="navbar-brand" to={"/"}>Home</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">          
          <li className="nav-item">
            {/* <Link className="nav-link" to={"/register-patient"}>Register Patient</Link> */}
          </li>
        </ul>
      </div>
    </div>
  </nav>



export default navbarAdm;