import react from "react";
import "./Home.css";
import "./../../ui/styles/base.css"
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SignIn from "../SignIn/SignIn";
import loc from "./../../assets/images/loc-white.png"
import map from "./../../assets/images/map.webp"
import food from "./../../assets/images/food.webp"

const Home = () => {
    return (
        <div>
            <NavBar />
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
                        <div className="flex column">
                            <h3 className="bold">The most optimal</h3>
                            <span className="text">
                                Craft your perfect itinerary with
                                Plan Mate AI. Our advanced algorithms take into
                                account your selected explore-sights, dining, and
                                lodging preferences to create the optimal travel plan
                                tailored just for you.
                            </span>
                        </div>
                        <div className="img-second">
                            <img src={map} alt="map"></img>
                        </div>
                    </div>
                    <div className="flex column">
                        <div className="flex column">
                            <div className="img-second">
                                <img src={food} alt="map"></img>
                            </div>
                            <h3 className="bold">Get Inspired</h3>
                            <span className="text">
                                Extract valuable travel insights from Instagram
                                reels and TikToks, explore the mentioned
                                explore-sights, and effortlessly include them in
                                your own adventure with Plan Mate AI.
                            </span>
                        </div>

                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Home;