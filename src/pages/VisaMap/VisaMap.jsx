import React from "react";
import "./VisaMap.css";
import NavBar from "./../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./../../ui/styles/base.css";

const VisaMap = () => {
    return (
        <main>
            <NavBar />
            <div className="main-container flex column center font-fam">
                <div className="flex column center">
                    <h1>Visa Free Travel</h1>
                    <h3>Click a country on the map to view worldwide VISA requirements</h3>
                </div>

                <input type="text" placeholder="search a country" />
            </div>
            <div className="map">
                
            </div>
            <Footer/>
        </main>
    )
}

export default VisaMap;