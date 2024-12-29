import React from "react";
import "./SignUp.css"
import logo from "./../../assets/images/logo.png"
import Glogo from "./../../assets/images/google-logo.png"
import "./../../ui/styles/base.css"

const SignUp = () => {
    return (
        <main>
            <div className="form flex column center">

                <div className="flex column center">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <p className="title bold">Sign Up</p>
                    <p className="subtitle">Signing up with Plan Mate AI is fast and free.</p>
                </div>
                <p className="link">Already have an account? <a href="#signup" className="bold">Sign In</a></p>
                <div className="input flex column space-between">
                    <input className="font-fam" type="email" placeholder="Email" />
                    <input className="font-fam" type="password" placeholder="Password" />
                    <input className="font-fam" type="password" placeholder="Confirm Password" />
                    <button className="font-fam" type="submit">Continue</button>
                </div>

                <div className="google-div flex center ">
                    <button className="flex row center"><img src={Glogo} />Sign Up with google</button>
                </div>
            </div>
        </main>
    )
}

export default SignUp