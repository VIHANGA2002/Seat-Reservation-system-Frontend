import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from '../images/SLTlogo.png';
import image2 from '../images/mobile.png';
import image1 from '../images/line.png';

function Home() {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <img src={logoImage} alt="SLTMobitel Logo" className="logo" />
                <Link to="/Signup" className="btn">Signup</Link>
                <Link to="/login" className="login-button">Login</Link>
            </header>
            <div className="landing-content">
                <div className="content-text">
                    <h1>Your Gateway to Easy and Quick Seat Booking!</h1>
                    <p>Book Your Seat with Ease!</p>
                    <button className="contactus-button">Contact Us</button>
                </div>
                <div className="content-images">
                    <img src={image2} alt="Person using a mobile phone" className="image2" />
                    <img src={image1} alt="Person using a mobile phone" className="image2" />
                </div>
            </div>
        </div>
    );
}

export default Home;
