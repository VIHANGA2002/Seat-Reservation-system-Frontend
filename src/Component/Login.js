

import React from 'react';
import './Login.css';
import image from '../images/image.png'; 
import image2 from '../images/SLTlogo.png'; 

function Login() {
    return (
        <div className="signup-container">
            <div className="form-left">
                <img src={image2} alt="SLTMobitel" className="logo" />
                <h2>Login</h2>
                <form>
                    <select className="form-input">
                        <option>Login As</option>
                        <option>Trainee</option>
                        <option>Admin</option>
                    </select>
                    <input type="text" placeholder="Trainee/Admin ID" className="form-input" />
                    <input type="password" placeholder="Password" className="form-input" />
                    <button type="submit" className="signup-button">Login</button>
                </form>
                <p className="login-text">Don't have an Account? <a href="/Signup">SignUp</a></p>
            </div>
            <div className="form-right">
                <img src={image} alt="Office Environment" className="background-image" />
                <a href="/" className="home-link">Home</a>
            </div>
        </div>
    );
}

export default Login;
