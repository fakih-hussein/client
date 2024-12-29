import React from "react";
import logo from "./../../assets/images/logo.png"
import "./../../ui/styles/base.css"

const SignIn=()=>{
    return(
        <div className="main-div flex column center">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <p className="bold">Sign In</p>
            <p>Sign in to save your trip plans and access them on any device.</p>
            <p>New to Plan Mate AI? <a href="#signup" className="bold">Sign Up</a></p>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Continue</button>
        </div>
    )   
}

export default SignIn