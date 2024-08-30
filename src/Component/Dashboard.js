import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'; // Import custom CSS for additional styling
import image from '../images/slt-mobitel-logo.png'; // Import the SLT Mobitel logo image

const Dashboard = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <nav className="d-flex flex-column  sidebar">
                <Link to="/" className="navbar-brand mt-3 mb-4">
                    <img src={image} alt="SLT Mobitel Logo" width="150" height="50" />
                </Link>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/manage-seats" className="nav-link active">Manage Seats</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/view-bookings" className="nav-link">View Bookings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reports" className="nav-link">Reports</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                </ul>
                <button className="btn btn-danger mt-auto mb-3">LogOut</button>
            </nav>
            
            {/* Page Content */}
            <div className="content p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
