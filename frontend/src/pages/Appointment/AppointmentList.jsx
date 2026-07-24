import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentList.css';

const AppointmentList = ({ onSelectAppointment, onEditAppointment }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/api/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;
    try {
      await fetch(`http://localhost:8080/api/appointments/${id}`, { method: 'DELETE' });
      fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="list-container">
      <div className="header-bar">
        <h2>All Appointments</h2>
        {/* Redirects to /book route */}
        <button className="book-btn" onClick={() => navigate('/BookAppointment')}>
          + Book Appointment
        </button>
      </div>

      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Client Name</th>
              <th>Email</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((app) => (
                <tr key={app.id}>
                  <td>{app.title}</td>
                  <td>{app.clientName}</td>
                  <td>{app.clientEmail}</td>
                  <td>{new Date(app.appointmentTime).toLocaleString()}</td>
                  <td>
                    <span className={`status-badge status-${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => navigate(`/appointments/${app.id}`)}>View</button>
                      <button onClick={() => navigate(`/edit/${app.id}`)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(app.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-appointments">
                  No appointments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentList;