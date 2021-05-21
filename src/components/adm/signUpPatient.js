import React, { Component } from "react";
import { useForm } from "react-hook-form";    
import navbarAdm from "./navBarAdm"
export default function SignUpDoctor() {
    const { register, getValues } = useForm();

    function registerPatient(){
        console.log('registerr');
    }

    return (
    <div>
        {navbarAdm}
        <form>
            <h3>Sign Up</h3>
            
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" />
            </div>                               

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
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
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="button" onClick={registerPatient()} className="btn btn-primary btn-block">Sign Up</button>            
        </form>
    </div>
    );
    
}