import React, { Component } from "react";
// import {useForm} from "react-hook-form"
import navbarUser from "./navbarUser"

export default function HomeUser() {    
        // const {register, handleSubmit} = useForm()
        
        return (
            <div>                   
                {navbarUser}
                <h1>Link que leva o usuario a URL /practice</h1>                
                
            </div>
        );
    
}