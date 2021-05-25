import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const navbarAdm = 
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">          
      <Link className="navbar-brand" to={"/adm"}>Admin</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">          
          <li className="nav-item">
            <Link className="nav-link" to={"/register-patient"}>Register Patient</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/adm/insert"}>Insert Exercise</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/adm/delete"}>Delete Exercise</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/adm/deleteUser"}>Deletar Usuário</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



export default navbarAdm;