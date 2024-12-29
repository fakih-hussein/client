import React from "react";
import "./Logo.css"
import "./../../ui/styles/base.css"
import logo from "./../../assets/images/logo.png"

const Logo = () => {
    return (
        <div className="flex row font-fam">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <p className="logo-text">Plan Mate AI</p>
        </div>
    )
}

export default Logo;