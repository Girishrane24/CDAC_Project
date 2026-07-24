import React, { useEffect, useState } from 'react';
import './AppointmentDetails.css';

const AppointmentDetails = ({ appointmentId, onClose }) => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    if (appointmentId) {
      fetch(`http://localhost:8080/api/appointments/${appointmentId}`)
        .then((res) => res.json())
        .then((data) => setAppointment(data))
        .catch((err) => console.error(err));
    }
  }, [appointmentId]);

  if (!appointment) return <div>Loading details...</div>;

  return (
    <div className="details-card">
      <h2>Appointment Details</h2>
      <p><strong>Title:</strong> {appointment.title}</p>
      <p><strong>Client:</strong> {appointment.clientName} ({appointment.clientEmail})</p>
      <p><strong>Date & Time:</strong> {new Date(appointment.appointmentTime).toLocaleString()}</p>
      <p><strong>Status:</strong> {appointment.status}</p>
      <p><strong>Notes:</strong> {appointment.notes || 'None'}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AppointmentDetails;