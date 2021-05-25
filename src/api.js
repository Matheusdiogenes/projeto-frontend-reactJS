import axios from 'axios'

const api = {
  registerPatient: async (name_p, username, email, cpf, password) => {
    try {
      await axios.post('http://localhost:3000/patient/register', {
        name_p,
        username,
        email,
        cpf,
        password
      })
    } catch (error) {
      console.log(error);
    }
  },

  showPatient: async () => {
    try {
      const patient = await axios.get(`http://localhost:3000/patient/show`)
      return patient.data
    } catch (error) {
      console.log(error);
    }
  },


  showExercise: async (username) => {
    try {
      const exercise = await axios.get(`http://localhost:3000/patient/show/exercise/${username}`)
      return exercise.data

    } catch (error) {
      console.log(error);
    }
  },

  insertExercise: async (username, arrExercise) => {
    try {
      await axios.put(`http://localhost:3000/patient/insert/exercise/${username}`, {
        exercise: arrExercise
      })
    } catch (error) {
      console.log(error);
    }
  },

  deleteExercise: async (username, arrExercise) => {
    try {
      await axios.put(`http://localhost:3000/patient/update/exercise/${username}`, {
        exercise: arrExercise
      })
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (username) => {
    try {
      await axios.delete(`http://localhost:3000/patient/delete/${username}`)
    } catch (error) {
      console.log(error);
    }
  },


  registerDoctor: async (name_d, email, username, cpf, specialty, password) => {
    try {
      await axios.post('http://localhost:3000/doctor/register', {
        name_d,        
        email,
        username,
        cpf,
        specialty,
        password
      })
    } catch (error) {
      console.log(error);
    }
  },

}

export default api 

// export default class Login extends Component {
//   state = {
//       resp: []
//   }

//   async componentDidMount(){
//       const response = await api.get('')        
//       this.setState({resp: response.data})
//   }

//   render() {
//       const { resp } = this.state
//       console.log(resp.response);
//       const h1 = <h1>{resp.response}</h1>
//       return (
//           <div>                   
//               <form>

//                   <h3>Sign In</h3>

//                   <div className="form-group">
//                       <label>Email address</label>
//                       <input type="email" className="form-control" placeholder="Enter email" />
//                   </div>

//                   <div className="form-group">
//                       <label>Password</label>
//                       <input type="password" className="form-control" placeholder="Enter password" />
//                   </div>

//                   <div className="form-group">
//                       <div className="custom-control custom-checkbox">
//                           <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                           <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                       </div>
//                   </div>

//                   <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                   <p className="forgot-password text-right">
//                       Forgot <a href="#">password?</a>
//                   </p>
//               </form>
//           </div>
//       );
//   }
// }