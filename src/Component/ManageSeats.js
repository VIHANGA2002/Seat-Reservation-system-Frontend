import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ManageSeats.css'; // Import custom CSS for additional styling

const ManageSeats = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSeat, setSelectedSeat] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSeatClick = (seatNumber) => {
        setSelectedSeat(seatNumber);
    };

    const handleConfirmBooking = () => {
        if (selectedSeat) {
            alert(`Seat ${selectedSeat} booked successfully!`);
        } else {
            alert('Please select a seat to reserve.');
        }
    };

    const seats = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="manage-seats">
            <div className="d-flex justify-content-center align-items-center">
                <h2 className="mb-8">Select the date</h2>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="form-control"
                />
            </div>
            <h3 className="mb-4">Select a Seat to Reserve</h3>
            <div className="seat-selection">
                {seats.map((seat) => (
                    <div
                        key={seat}
                        className={`seat ${selectedSeat === seat ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(seat)}
                    >
                        {seat}
                    </div>
                ))}
            </div>
            <div className="seat-legend mt-4">
                <div className="d-flex align-items-center">
                    <div className="seat available"></div> <span>Available</span>
                </div>
                <br/>
                <div className="d-flex align-items-center">
                    <div className="seat unavailable"></div> <span>Not Available</span>
                </div>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleConfirmBooking}>
                Confirm Reserve
            </button>
        </div>
    );
};

export default ManageSeats;
