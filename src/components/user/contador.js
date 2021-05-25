import React, { Component } from "react";
import navbarUser from "./navbarUser"
import api from "../../api"


class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTime: 0,
      btnPlayPause: "Play",
      exercise: []
    };

    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.verExercicios = this.verExercicios.bind(this);
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Play" });
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 0.1 });
      }, 100);
      this.setState({ btnPlayPause: "Pause" });
    }
  }

  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }

  clearTimer() {
    this.setState({ actualTime: 0 });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Play" });
  }

  async verExercicios(){
    const username = document.querySelector("#exercise-input")
    console.log(username.value);
    const exercises  = await api.showExercise(username.value)
    this.setState({exercise: exercises.result.exercise})    

  }

  render() {
    const { exercise } = this.state   
    console.log(exercise);

    const exercises = exercise.map( e => {
      return  <li class="list-group-item"> {e}</li>
            
    })    
    return (
      <div>
        {navbarUser}
          <div className="user-input">              
              <input id="exercise-input" type="text" className="form-control" placeholder="Ex: Helio365" />                             
              <button type="button" onClick={this.verExercicios} className="btn btn-primary btn-block">Pesquisar</button>
          </div>   

          <div className="panel">
            <div className="exercises">
            <ul class="list-group list-group-flush">
              {exercises}               
            </ul>
            </div>
            <div className="contador">
              <div>          
                <h2>{this.state.actualTime.toFixed(2)}</h2>
              </div>
              
              <div>
                <input
                  type="button"
                  value={this.state.btnPlayPause}
                  onClick={this.initTimer}
                />
                <input type="button" value="Clean" onClick={this.clearTimer} />
              </div>

            </div>

          </div>
        <div>     
               
        </div>
      </div>
    );
  }
}

export default Contador;
