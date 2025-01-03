import React from "react";
import "./Home.css";
import drivingImage from '../assets/images/driving-school.jpg';


const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Welcome to Nallu Driving School</h1>
                <p>
                    Learn to drive with confidence. Whether you're a beginner or need to refine your skills, 
                    our courses are designed to help you become a skilled and responsible driver.
                </p>
                <p>
                    Start your journey today and choose from our variety of courses tailored to your needs.
                </p>
                <button className="cta-button">Get Started</button>
            </div>

            <div className="home-image">
                <img 
                    src= {drivingImage}
                    alt="Driving School"
                    className="home-image-bg" 
                />
            </div>
        </div>
    );
};

export default Home;
