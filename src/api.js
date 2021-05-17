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

  showExercise: async (username) => {
    try {
      await axios.get(`http://localhost:3000/patient/show/exercise/${username}`)
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