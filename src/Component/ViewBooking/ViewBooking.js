import React from 'react';
import './ViewBooking.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../Navbar.css'; 

function ViewBookings() {
  return (

    <div>
     <header className="header">
      <div className="logo">
        <img src="logo.png" alt="SLTMOBITEL" />
      </div>
      <div className="right-nav">
        <nav className="nav-links">
          <CustomButton to="/manage-seat" className="nav-btn">Manage Seats</CustomButton>
          <CustomButton to="/view-bookings" className="nav-btn">View Bookings</CustomButton>
          <CustomButton to="/reports" className="nav-btn">Reports</CustomButton>
        </nav>
        <div className="user-profile">
          <img src="profile-pic.jpg" alt="User" className="profile-pic" /> 
          <button className="logout-btn">LogOut</button>
        </div>
      </div>
    </header>
    
    <div className="bookings">
      
      <div className="bookings-header">
        <h2>Upcoming Bookings</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Trainee ID"
            className="search-bar"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      
      <section className="upcoming-bookings">
        <table>
          <thead>
            <tr>
              <th>Training ID</th>
              <th>Booking ID</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2320</td>
              <td>S1</td>
              <td>2024/8/31</td>
              <td><button className="cancel-button">Cancel</button></td>
            </tr>
            <tr>
              <td>2325</td>
              <td>S3</td>
              <td>2024/9/4</td>
              <td><button className="cancel-button">Cancel</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      
      <div className="bookings-header">
        <h2>Past Bookings</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Trainee ID"
            className="search-bar"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      
      <section className="past-bookings">
        <table>
          <thead>
            <tr>
              <th>Trainee ID</th>
              <th>Booking ID</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2320</td>
              <td>S1</td>
              <td>2024/8/22</td>
            </tr>
            <tr>
              <td>2320</td>
              <td>S3</td>
              <td>2024/8/4</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    </div>
  );
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

export default ViewBookings;
