import React, { Component } from "react";

export default class SignUpDoctor extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>                               

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>CPF</label>
                    <input type="text" className="form-control" placeholder="CPF" />
                </div>

                <div className="form-group">
                    <label>Specialty</label>
                    <input type="text" className="form-control" placeholder="Specialty" />
                </div>                

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}