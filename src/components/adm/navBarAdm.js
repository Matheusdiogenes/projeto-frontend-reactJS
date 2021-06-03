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
            <Link className="nav-link" to={"/register-patient"}>Registrar Paciente</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/adm/insert"}>Inserir Exercicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/adm/delete"}>Deletar Exercicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/adm/deleteUser"}>Gerenciar</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



export default navbarAdm;