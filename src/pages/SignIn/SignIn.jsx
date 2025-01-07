import React,  {useState, useEffect}from "react";
import "./SignIn.css"
import logo from "./../../assets/images/logo.png"
import Glogo from "./../../assets/images/google-logo.png"
import "./../../ui/styles/base.css"
import SignUp from "../SignUp/SignUp";

import { useDispatch } from "react-redux";
import { showSignUp } from "../../redux/modalSlice";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch();
    const handleSignUpClick = () => {
        dispatch(showSignUp());
    }

    const [errors, setErrors] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const navigate=useNavigate();
 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', formData);
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                
            } else {
                setErrors(response.data.message);
                console.log(response.data.message);
            }
        } catch (error) {
            setErrors(error.response.data.message);
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        // console.log(formData);
    }, [formData]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form flex column center font-fam">

                <div className="flex column center">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <p className="title bold">Sign In</p>
                    <p className="subtitle">Sign in to save your trip plans and access them on any device.</p>
                </div>
                <p className="link">New to Plan Mate AI? <a className="bold" onClick={handleSignUpClick}>Sign Up</a></p>
                <div className="input flex column space-between">
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                    <button type="submit">Continue</button>
                </div>

                <div className="google-div flex center ">
                    <button className="flex row center"><img src={Glogo} />Continue with google</button>
                </div>

            </div>
        </form>


    )
}

export default SignIn