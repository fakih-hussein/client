import react from "react";
import "./Home.css";
import "./../../ui/styles/base.css"
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SignIn from "../SignIn/SignIn";
import loc from "./../../assets/images/loc-white.png"

const Home = () =>{
    return(
        <div>
            <NavBar/>
            <div className="home flex column">
                <div className="landing flex column center font-fam">
                    <h1 className="bold">Your next journey optimized</h1>
                    <h3>Build, personalize, and optimize your itineraries
                         with our free AI trip planner. Designed for vacations,
                          workations, and everyday adventures.</h3>
                    <button className="new-trip flex row center">
                        <img src={loc} alt="loc"></img>
                        <span>Create New Trip</span>
                    </button>
                </div>

            </div>

            <div className="second flex column center font-fam">
                <h2>Your AI-Powered trip</h2>
                <div className="flex row">
                    <div className="flex column">

                    </div>
                    <div className="flex column">

                    </div>

                </div>

            </div>
            <Footer/>

        </div>
    )
}

export default Home;