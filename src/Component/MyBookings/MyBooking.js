import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './MyBooking.css';
import '../Navbar.css'; 

function MyBooking() {
  return (
    
    <div>
      <header className="header">
      <div className="logo">
        <img src="logo.png" alt="SLTMOBITEL" />
      </div>
      <div className="right-nav">
        <nav className="nav-links">
          <CustomButton to="/book-seat" className="nav-btn">Book a Seat</CustomButton>
          <CustomButton to="/my-bookings" className="nav-btn">My Bookings</CustomButton>
        </nav>
        <div className="user-profile">
          <img src="profile-pic.jpg" alt="User" className="profile-pic" /> 
          <button className="logout-btn">LogOut</button>
        </div>
      </div>
    </header>
    <div className="bookings">
      <h2>Upcoming Bookings</h2>
    <section className="upcoming-bookings">
      
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S1</td>
            <td>2024/8/31</td>
            <td><button className="cancel-button">Cancel</button></td>
          </tr>
          <tr>
            <td>S3</td>
            <td>2024/9/4</td>
            <td><button className="cancel-button">Cancel</button></td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2>Past Bookings</h2>
    <section className="past-bookings">
      
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S1</td>
            <td>2024/8/22</td>
          </tr>
          <tr>
            <td>S3</td>
            <td>2024/8/4</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  </div>
  )
}

function CustomButton({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <button className={`nav-btn ${isActive ? "active" : ""}`} {...props}>
      <Link to={to}>{children}</Link>
    </button>
  );
}

export default MyBooking