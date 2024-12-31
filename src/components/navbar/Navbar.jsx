import React from "react";
import "./Navbar.css"
import "./../../ui/styles/base.css"
import Logo from "../Logo/Logo";
import SignIn from "../../pages/SignIn/SignIn";


import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../redux/modalSlice";


const NavBar = () => {

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);

    const handleSignInClick = () => {
        dispatch(openModal());
    }

    const handleCloseModal = (event) => {
        if (event.target.classList.contains("modal-overlay")){
            dispatch(closeModal());
        }
    }

    return (
        <div className={`navbar font-fam flex row space-between ${isModalOpen ? "dimmed" : ""}`}>
            <Logo />

            <div className="btn-div flex row center">
                <a href="#visamap">Visa Map</a>
                <a href="#communitytrips">Community Trips</a>
                <button className="login-btn" onClick={handleSignInClick}>Sign In</button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <SignIn/>
                    </div>
                </div>
            )}


        </div>
    )
}

export default NavBar;
