import React from "react";
import "./Navbar.css"
import "./../../ui/styles/base.css"
import Logo from "../Logo/Logo";
import SignIn from "./../../pages/SignIn/SignIn";
import SignUp from "./../../pages/SignUp/SignUp";


import { useDispatch, useSelector} from "react-redux";
import { showSignIn, closeForm } from "../../redux/modalSlice";


const NavBar = () => {

    const dispatch = useDispatch();
    const formType = useSelector((state) => {
        console.log(state);
        return state.modal.formType;
    })

    const handleCloseForm = () => {
        dispatch(closeForm());
    }

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
            {formType && (
                <div className="modal flex center">
                    <div className="overlay" onClick={handleCloseForm}></div>
                        {formType==="SignIn" && <SignIn/>}
                        {formType==="SignUp" && <SignUp/>}
                    </div>

            )}
        </div>
    )
}

export default NavBar;
