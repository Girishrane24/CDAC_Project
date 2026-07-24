import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = ({ onAppointmentCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    clientName: '',
    clientEmail: '',
    appointmentTime: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({ title: '', clientName: '', clientEmail: '', appointmentTime: '', notes: '' });
        if (onAppointmentCreated) onAppointmentCreated();
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="appointment-card">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="clientName" placeholder="Your Name" value={formData.clientName} onChange={handleChange} required />
        <input name="clientEmail" type="email" placeholder="Your Email" value={formData.clientEmail} onChange={handleChange} required />
        <input name="appointmentTime" type="datetime-local" value={formData.appointmentTime} onChange={handleChange} required />
        <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookAppointment;