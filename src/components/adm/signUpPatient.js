import React, { Component } from "react";
import { useForm } from "react-hook-form";    
import navbarAdm from "./navBarAdm"
import api from "../../api"
export default function SignUpPatient() {
    const { register, getValues } = useForm();

    function registerPatient(){
        const name_p = getValues('name_p')
        const username = getValues('username')
        const email = getValues('email')
        const cpf = getValues('cpf')
        const password = getValues('password')
        api.registerPatient(name_p, username, email, cpf, password)
        
    }

    return (
    <div>
        {navbarAdm}
        <form>
            <h3>Sign Up</h3>
            
            <div className="form-group">
                <label>Name</label>
                <input {...register('name_p')} type="text" className="form-control" placeholder="Name" />
            </div>                               

            <div className="form-group">
                <label>Username</label>
                <input {...register('username')} type="text" className="form-control" placeholder="Username" />
            </div>                               

            <div className="form-group">
                <label>Email address</label>
                <input {...register('email')} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>CPF</label>
                <input {...register('cpf')} type="text" className="form-control" placeholder="CPF" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input {...register('password')} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="button" onClick={registerPatient} className="btn btn-primary btn-block">Sign Up</button>            
        </form>
    </div>
    );
    
}