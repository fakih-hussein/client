import React, { useState, useEffect } from "react";
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
    const [credentialError, setCredentialError] = useState("");
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
        setError({
            ...credentialError,
            [e.target.name]:""
        })
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    }

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email is not valid.';
        } 

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; 
        }
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
            setCredentialError(error.response.data.message);
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        // console.log(formData);
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="form flex column center font-fam">

                <div className="flex column center">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <p className="title bold">Sign In</p>
                    <p className="subtitle">Sign in to save your trip plans and access them on any device.</p>
                </div>
                <p className="link">New to Plan Mate AI? <a className="bold" onClick={handleSignUpClick}>Sign Up</a></p>
                <div className="input flex column space-between">

                    <input name="email" type="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                    {errors.email && <small>{errors.email}</small>}

                    <input name="password" type="password" value={formData.password} placeholder="Password" onChange={handleChange} />
                    {errors.password && <small>{errors.password}</small>}
                    

                    <button type="submit">Continue</button>
                    {error && <small>{error}</small> }
                </div>

                <div className="google-div flex center ">
                    <button className="flex row center"><img src={Glogo} />Continue with google</button>
                </div>

            </div>
        </form>


    )
}

export default SignIn