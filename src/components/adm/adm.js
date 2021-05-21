import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import navbarAdm from "./navBarAdm"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Adm() {

  return (
    <div className="App">
      {navbarAdm}
      <h1>Deletar, Inserir/Deletar Exercicios</h1>

      
    </div>
  );
}

export default Adm;