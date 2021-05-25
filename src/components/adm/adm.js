import React, {Component}from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import navbarAdm from "./navBarAdm"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import api from "../../api"

class Adm extends Component{
  state = {
      data: []
  }

  async componentDidMount(){
      const response = await api.showPatient()      
      this.setState( {data: response.patient} )
  }

  

  render() {
    const { data } = this.state    
    const user = data.map( user => {
      return <p><strong>Nome:</strong> {user['name_p']} <strong>Usuário:</strong> {user['username']}</p>
    })

    return(
      <div className="App">
        {navbarAdm}
        <h3>Pacientes</h3>
        { user.length > 0 ? user : <p>Não há Pacientes Registrados</p> }    

      </div>

    ) 
  };
}

export default Adm;