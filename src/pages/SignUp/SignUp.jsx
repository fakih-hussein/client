import React, { useState } from "react";
import "./SignUp.css"
import logo from "./../../assets/images/logo.png"
import Glogo from "./../../assets/images/google-logo.png"
import "./../../ui/styles/base.css"

import { useDispatch } from "react-redux";
import { showSignIn } from "../../redux/modalSlice";
import axios from "axios";

const SignUp = () => {
    const dispatch = useDispatch();
    const handleSignInClick = () => {
        dispatch(showSignIn());
    }

    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: "",

    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/signup', formData);
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form flex column center">

                <div className="flex column center">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <p className="title bold">Sign Up</p>
                    <p className="subtitle">Signing up with Plan Mate AI is fast and free.</p>
                </div>
                <p className="link">Already have an account? <a onClick={handleSignInClick} className="bold">Sign In</a></p>
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
        </form>
    )
}

export default SignUp