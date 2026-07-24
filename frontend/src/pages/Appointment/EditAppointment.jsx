import React, { useState } from 'react';
import './EditAppointment.css';

const EditAppointment = ({ appointment, onUpdateSuccess, onCancel }) => {
  const [formData, setFormData] = useState({ ...appointment });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/appointments/${appointment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Appointment updated successfully!');
        onUpdateSuccess();
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div className="appointment-card">
      <h2>Edit Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} onChange={handleChange} required />
        <input name="clientName" value={formData.clientName} onChange={handleChange} required />
        <input name="clientEmail" type="email" value={formData.clientEmail} onChange={handleChange} required />
        <input name="appointmentTime" type="datetime-local" value={formData.appointmentTime} onChange={handleChange} required />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="BOOKED">BOOKED</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
        <textarea name="notes" value={formData.notes || ''} onChange={handleChange} />
        <div className="button-group">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditAppointment;