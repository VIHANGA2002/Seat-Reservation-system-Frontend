

import React from 'react';
import './Signup.css';
import image from '../images/image.png' 
import image2 from '../images/SLTlogo.png' 

function Signup() {
    return (
        <div className="signup-container">
            <div className="form-left">
                <img src={image2} alt="SLTMobitel" className="logo" />
                <h2>Create Account</h2>
                <form>
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="text" placeholder="Trainee ID" className="form-input" />
                    <input type="email" placeholder="Email" className="form-input" />
                    <input type="password" placeholder="Password" className="form-input" />
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p className="login-text">Already have an account? <a href="/Login">Login</a></p>
            </div>
            <div className="form-right">
                <img src={image} alt="Office Environment" className="background-image" />
                {/* <a href="#contact" className="contact-link">Contact Us</a> */}
            </div>
        </div>
    );
}

export default Signup;

