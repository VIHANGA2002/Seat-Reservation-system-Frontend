import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Booking from '../src/Component/Booking/Booking';
import MyBookings from '../src/Component/MyBookings/MyBooking';


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
