import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appointmentService } from '../../services/appointmentService';
import './AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await appointmentService.getAll();
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await appointmentService.delete(id);
        setAppointments(appointments.filter((app) => app.id !== id));
      } catch (error) {
        console.error('Error cancelling appointment:', error);
      }
    }
  };

  if (loading) return <div className="loading">Loading appointments...</div>;

  return (
    <div className="appointment-container" style={{ padding: '20px' }}>
      {/* Header section with Action Button */}
      <div 
        className="header-actions" 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}
      >
        <h2>Appointment Schedule</h2>
        <button 
          className="btn-add" 
          onClick={() => navigate('/appointments/book')}
          style={{ 
            padding: '10px 18px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontWeight: 'bold' 
          }}
        >
          + Book Appointment
        </button>
      </div>

      {/* Appointment Table */}
      <table className="appointment-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            <th style={thStyle}>Patient ID</th>
            <th style={thStyle}>Doctor ID</th>
            <th style={thStyle}>Date & Time</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Notes</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((app) => (
              <tr key={app.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tdStyle}>{app.patientId}</td>
                <td style={tdStyle}>{app.doctorId}</td>
                <td style={tdStyle}>
                  {app.appointmentDate ? new Date(app.appointmentDate).toLocaleString() : 'N/A'}
                </td>
                <td style={tdStyle}>
                  <span style={getStatusBadgeStyle(app.status)}>
                    {app.status || 'BOOKED'}
                  </span>
                </td>
                <td style={tdStyle}>{app.notes || '—'}</td>
                <td style={tdStyle}>
                  <button 
                    onClick={() => handleDelete(app.id)} 
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                No appointments booked yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Style Helpers
const thStyle = { padding: '12px', borderBottom: '2px solid #ccc' };
const tdStyle = { padding: '12px' };

const getStatusBadgeStyle = (status) => {
  const base = {
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  switch (status?.toUpperCase()) {
    case 'COMPLETED':
      return { ...base, backgroundColor: '#d4edda', color: '#155724' };
    case 'CANCELLED':
      return { ...base, backgroundColor: '#f8d7da', color: '#721c24' };
    default: // BOOKED / PENDING
      return { ...base, backgroundColor: '#cce5ff', color: '#004085' };
  }
};

export default AppointmentList;