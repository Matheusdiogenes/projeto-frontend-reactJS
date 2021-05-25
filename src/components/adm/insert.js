import React, {Component}from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import navbarAdm from "./navBarAdm"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import api from "../../api"
class Insert extends Component{
  state = {
      data: [] 
  }

  async componentDidMount(){
      const response = await api.showPatient()      
      this.setState( {data: response.patient} )
  }

  async insert(){
    const exercises = document.querySelector("#exercise-input")
    const username = document.querySelector("#exercise")
    const arrExercise = exercises.value.replace(" ", "").split(',')      
    await api.insertExercise(username.value, arrExercise)
    window.location.reload();
  }
  

  render() {
    const { data } = this.state   
    const user = data.map( user => {
      return  <select id="exercise">
                <option value={user.username}>{user['name_p']}</option>
              </select>
    })

    const inserir = <div>
          <div className="form-group">
              <label>Insira os Exercicios</label>
              <input id="exercise-input" type="text" className="form-control" placeholder="exercicio 1, exercicio 2..." />               
          </div>   
          <button type="button" onClick={this.insert} className="btn btn-primary btn-block">Inserir Exercicios</button>         

    </div>

    return(
      <div >
        {navbarAdm}
        
        <form>
          <div className="form-group">
              <label>Selecione o Paciente: </label>
              { user.length > 0? user : <p>Não há Pacientes Registrados</p> }                  
          </div>                       
          

          {
            user.length > 0? inserir : <p>É preciso Pacientes Registrados para inserir Exercicios</p>                   
          }
          {/* <button type="button" onClick={this.insert} className="btn btn-primary btn-block">Inserir Exercicios</button> */}
          
        </form>

      </div>

    ) 
  };
}

export default Insert;