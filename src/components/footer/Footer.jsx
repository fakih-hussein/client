import React from "react";
import "./Footer.css"
import "./../../ui/styles/base.css"
import Logo from "../Logo/Logo";
const Footer = () => {
    return (
        <div className="footer flex row space-between top">
            <div className="left-footer flex column ">
                <div className="flex column">
                    <Logo />
                    <p className="footer-text">Turn your next trip into
                        a hassle-free experience with PlanMate  AI.</p>
                </div>
                <p> &#169;Plan Mate AI. All rights reserved</p>
            </div>
            <div className="right-footer flex row center top">
                <div className="title flex column center">
                    <p className="bold">Legal</p>
                    <a href="#">Terms and condition</a>
                </div>
                <div className="title flex column center">
                    <p className="bold">Support</p>
                    <a href="#">Contact Us</a>
                </div>
                <div className="title flex column center">
                    <p className="bold">Itineraries</p>
                    <a href="#">Community Trips</a>
                    <a href="#">Visa Map</a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
