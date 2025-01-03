import React from "react";
import "./SignIn.css"
import logo from "./../../assets/images/logo.png"
import Glogo from "./../../assets/images/google-logo.png"
import "./../../ui/styles/base.css"
import SignUp from "../SignUp/SignUp";

import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../redux/modalSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);

    const handleSignUpClick = () => {
        dispatch(openModal());
    }

    const handleCloseModal = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
            dispatch(closeModal());
        }
    }
    return (

        <div className="form flex column center">

            <div className="flex column center">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <p className="title bold">Sign In</p>
                <p className="subtitle">Sign in to save your trip plans and access them on any device.</p>
            </div>
            <p className="link">New to Plan Mate AI? <a href="#signup" className="bold" onClick={handleSignUpClick}>Sign Up</a></p>
            <div className="input flex column space-between">
                <input className="font-fam" type="email" placeholder="Email" />
                <input className="font-fam" type="password" placeholder="Password" />
                <button className="font-fam" type="submit">Continue</button>
            </div>

            <div className="google-div flex center ">
                <button className="flex row center"><img src={Glogo} />Continue with google</button>
            </div>
            {isModalOpen && (
                <div className="modal-overlaye" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <SignUp />
                    </div>
                </div>
            )}
        </div>


    )
}

export default SignIn