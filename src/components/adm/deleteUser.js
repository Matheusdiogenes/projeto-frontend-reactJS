import React, {Component}from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import navbarAdm from "./navBarAdm"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import api from "../../api"
class DeleteUser extends Component{
  constructor(props) {
    super(props);   
    this.state = {       
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
    const userDelete = empty.map( e => {
      return e.value
    })
    if(userDelete.length > 0){      
      await api.deleteUser(userDelete[0])      
      window.location.reload();
    }
  }

  render() {    
    const { data } = this.state   
    const user = data.map( user => {
      return  <div id="user">
                <input type="checkbox" id={user.username} name={user.username} value={user.username}/>
                <label for={user.username}>{user.username}</label>
            </div> 
    })    

    return(
      <div >
        {navbarAdm}
        
        <form>
          <div className="form-group">
              <label>Selecione o Paciente: </label>
              { user.length > 0? user : <p>Não há Pacientes Registrados</p> }                  
          </div>                                                        
          
          {/* <button type="button" onClick={this.mostrarExercicio} className="btn btn-primary btn-block">Atualizar Exercicios</button>                        */}
          <button type="button" onClick={this.delete} className="btn btn-primary btn-block">Deletar Usuário</button>                       
          
        </form>

      </div>

    ) 
  };
}

export default DeleteUser;