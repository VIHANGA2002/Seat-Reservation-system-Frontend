import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import ManageSeats from './Component/ManageSeats';
import Booking from '../src/Component/Booking/Booking';
import MyBookings from '../src/Component/MyBookings/MyBooking';
import ViewBooking from '../src/Component/ViewBooking/ViewBooking';
import Reports from '../src/Component/Reports/Reports';


function App() {
  return (
    <Router>
      <div>
      
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/book-seat" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/ManageSeats" element={<ManageSeats />} />

        <Route path="/manage-seat" element={<ManageSeats />} />
        <Route path="/view-bookings" element={<ViewBooking />} />
        <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
