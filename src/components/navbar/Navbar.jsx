import React from "react";
import "./Navbar.css"
import "./../../ui/styles/base.css"
import Logo from "../Logo/Logo";


import { useDispatch } from "react-redux";
import { showSignIn } from "../../redux/modalSlice";


const NavBar = () => {

    const dispatch = useDispatch();

    const handleSignInClick = () => {
        dispatch(showSignIn());
    }

    return (
        <div className="navbar font-fam flex row space-between">
            <Logo />

            <div className="btn-div flex row center">
                <a href="#visamap">Visa Map</a>
                <a href="#communitytrips">Community Trips</a>
                <button className="login-btn" onClick={handleSignInClick}>Sign In</button>
            </div>
        </div>
    )
}

export default NavBar;
