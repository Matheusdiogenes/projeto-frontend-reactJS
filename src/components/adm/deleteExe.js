import React, {Component}from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import navbarAdm from "./navBarAdm"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import api from "../../api"
class DeleteExercise extends Component{
  constructor(props) {
    super(props);   
    this.state = { 
      counter: 0,
      data: [],
      exercise: []

    };
    this.mostrarExercicio = this.mostrarExercicio.bind(this);
  }

  async componentDidMount(){
      const patients = await api.showPatient()                        
      this.setState( {data: patients.patient } )
  }

  
  async mostrarExercicio(){    
    const username = document.querySelector("#user")    
    const exercises  = await api.showExercise(username.value)
    this.setState({exercise: exercises.result.exercise})    
  }

  async delete(){
    const textinputs = document.querySelectorAll('input[type=checkbox]');     
    const empty = [].filter.call( textinputs, function( el ) {
       return el.checked
    });
    const exerciseDelete = empty.map( e => {
      return e.value
    })
    if(exerciseDelete.length > 0){
      const username = document.querySelector("#user")
      await api.deleteExercise(username.value, exerciseDelete)      
      window.location.reload();
    }
  }

  render() {    
    const { data, exercise } = this.state   
    const user = data.map( user => {
      return  <select id="user">
                <option value={user.username}>{user['name_p']}</option>
              </select>
    })
    const exercises = exercise.map( e => {
      return <div>
                <input type="checkbox" id={e} name={e} value={e}/>
                <label for={e}>{e}</label>
            </div>      
    })    

    return(
      <div >
        {navbarAdm}
        
        <form>
          <div className="form-group">
              <label>Selecione o Paciente: </label>
              { user.length > 0? user : <p>Não há pacientes registrados</p> }                  
          </div>                       
          <div className="form-group">
              <label>Marque os exercicios a ser deletados : </label>
              {exercises.length > 0 ? exercises : <p>Não há exercicios</p>}
              
          </div>                                 
          
          <button type="button" onClick={this.mostrarExercicio} className="btn btn-primary btn-block">Atualizar Exercicios</button>                       
          <button type="button" onClick={this.delete} className="btn btn-primary btn-block">Deletar Exercicios</button>                       
          
        </form>

      </div>

    ) 
  };
}

export default DeleteExercise;