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
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    }

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: "",

    })
    const [errors, setErrors] = useState({});

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

        if (formData.password_confirmation !== formData.password) {
            newErrors.password_confirmation = 'Passwords do not match.';
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
            const response = await axios.post('http://localhost:8000/api/register', formData);
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                setErrors(error.response.data.errors || {});
            } else {
                alert('Registration failed. Please try again.');
            }
        }
        

    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="form flex column center font-fam">

                <div className="flex column center">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <p className="title bold">Sign Up</p>
                    <p className="subtitle">Signing up with Plan Mate AI is fast and free.</p>
                </div>
                <p className="link">Already have an account? <a onClick={handleSignInClick} className="bold">Sign In</a></p>
                <div className="input flex column space-between">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                    <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Confirm Password" />
                    {errors.password_confirmation && (<small style={{ color: 'red' }}>{errors.password_confirmation}</small>)}
                    <button type="submit">Continue</button>
                </div>

                <div className="google-div flex center ">
                    <button className="flex row center"><img src={Glogo} />Sign Up with google</button>
                </div>
            </div>
        </form>
    )
}

export default SignUp