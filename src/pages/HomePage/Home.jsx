import react from "react";
import "./Home.css";
import "./../../ui/styles/base.css"
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import loc from "./../../assets/images/loc-white.png"
import map from "./../../assets/images/map.webp"
import story from "./../../assets/images/story.webp"
import food from "./../../assets/images/food.webp"
import destinations from "./../../assets/images/destinations.webp"

const Home = () => {
    return (
        <div>

            <NavBar />

            <div className="flex column center">
                <div className="home flex column">
                    <div className="landing flex column center font-fam">
                        <h1 className="bold">Your next journey optimized</h1>
                        <h3>Build, personalize, and optimize your itineraries
                            with our free AI trip planner. Designed for vacations,
                            workations, and everyday adventures.</h3>
                        <button className="new-trip-btn flex row center">
                            <img src={loc} alt="loc"></img>
                            Create New Trip
                        </button>
                    </div>
                </div>

                <div className="second flex column center full-width">
                    <h1 className="bold">Your AI-Powered trip</h1>
                    <div className="cards flex row space-between ">
                        <div className="card flex column ">
                            <div className="text flex column">
                                <h2 className="bold">The most optimal</h2>
                                <p>Craft your perfect itinerary with  Plan Mate AI.
                                     Our advanced algorithms take into account your
                                      selected explore-sights, dining, and lodging
                                       preferences to create the optimal travel plan
                                        tailored just for you.</p>
                            </div>
                            <div className="flex center"><img src={map} alt="map"></img></div>
                        </div>
                        <div className="card flex column ">
                            <div className="flex center"><img src={destinations} alt="dest"></img></div>
                            <div className="text flex column">
                                <h2 className="bold">Get Inspired</h2>
                                <p>Extract valuable travel insights from
                                     Instagram reels and TikToks, explore
                                      the mentioned explore-sights, and
                                       effortlessly include them in your 
                                       own adventure with Plan Mate AI.</p>
                            </div>
                            
                        </div>

                    </div>

                </div>

                <div className="third flex column center full-width">
                    <div className="flex column center">
                        <h1 className="bold">The only tool you’ll ever need!</h1>
                        <p>Say goodbye to the stress of planning
                            and hello to personalized recommendations,
                            efficient itineraries, and seamless
                            dining experiences.</p>
                    </div>

                    <div className="containers flex row space-between">
                        <div className="container flex column">
                            <div className="flex row">
                                <img src={map} alt="map"></img>
                                <h2 className="bold">Optimal Route Planning</h2>
                            </div>
                            <p>Our AI algorithms analyze your
                                preferences to craft the most
                                efficient route, saving you time
                                and effort.</p>
                        </div>
                        <div className="container flex column">
                            <div className="flex row">
                                <img src={story} alt="story"></img>
                                <h2 className="bold">Personalize Your Adventure</h2>
                            </div>
                            <p>Shape your journey by freely adding,
                                editing, or deleting activities from
                                your itinerary.</p>
                        </div>
                        <div className="container flex column">
                            <div className="flex row">
                                <img src={food} alt="food"></img>
                                <h2 className="bold">Local Cuisine Recommendations</h2>
                            </div>
                            <p>Discover local cuisines and hidden
                                gems recommended by our AI, tailored
                                to your taste buds.</p>
                        </div>

                    </div>
                </div>

                <div className="fifth flex column center full-width">
                    <div className="flex column center">
                        <h1 className="bold">Customized Itineraries for Every Travel Dream</h1>
                        <p>Plan Mate AI is your ultimate companion for any travel scenario.
                             Whether it's a solo adventure, a family vacation, or a group 
                             expedition, our app tailors every aspect of your journey.
                              Experience the convenience of:</p>
                    </div>
                    <div className="flex row">
                        <div className="flex column center">
                            <h3 className="bold">AI-Powered Route Optimization</h3>
                            <p>Utilize AI for optimal travel routes. Our app ensures
                                 a seamless journey, calculating the best paths, travel
                                  times, and distances for city tours or cross-country 
                                  road trips.</p>
                        </div>
                        <div className="flex column center">
                            <h3 className="bold">All-in-One Travel Organizer</h3>
                            <p>Simplify travel planning with our all-in-one platform.
                                 Plan Mate AI consolidates hotel and flight details
                                  and imports tips and guides. Organize all trip
                                   details in one place. </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;