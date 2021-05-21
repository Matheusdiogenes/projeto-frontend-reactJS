import React, { Component } from "react";
// import {useForm} from "react-hook-form"
import navbarUser from "./navbarUser"

export default function HomeUser() {    
        // const {register, handleSubmit} = useForm()
        
        return (
            <div>                   
                {navbarUser}
                <h1>Tela do usuario</h1>                
                
            </div>
        );
    
}