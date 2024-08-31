import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import '../NavBar/NavBar.css'; 

const seats = Array.from({ length: 20 }, (_, i) => i + 1);

const Booking = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
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
    <div className="booking-container">
      <div className="seat-selection-container">
        <h1>Welcome John!</h1>
        <div className="date-selection">
          Select the date: <br></br>
          <DatePicker 
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMM d, yyyy"
          />
        </div>
        <div className="seats-grid">
          {seats.map((seat) => (
            <div
              key={seat}
              className={`seat : 'available' ? 'selected' : ''}`}
              
            >
              {seat}
            </div>
          ))}
        </div>
        <div className="seat-legend">
          <span className="legend-item available"> </span> Available
          <span className="legend-item not-available"></span> Not Available
        </div>
        <button className="confirm-btn">Confirm Booking</button>
      </div>

      <div className="special-request-container">
        <h2>Make a Special Request</h2>
        <h5>If you have any special requests or requirements for your seating 
        arrangement, please specify them in the box below:</h5>
        <textarea placeholder="Enter your request here"></textarea>
        <input type="email" placeholder="Enter Your Email Here" /> <br></br>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
    </div>

  );
};

function CustomButton({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <button className={`nav-btn ${isActive ? "active" : ""}`} {...props}>
      <Link to={to}>{children}</Link>
    </button>
  );
}

export default Booking;
