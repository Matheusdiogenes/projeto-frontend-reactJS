import React, { Component } from "react";
// import {useForm} from "react-hook-form"
import navbarUser from "./navbarUser"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function HomeUser() {
    // const {register, handleSubmit} = useForm()

    return (

        <div>
            {navbarUser}
        <div className='link'>
        <Link to="/practice">Praticar</Link>
        </div>
          

        </div>

        
    );

}

