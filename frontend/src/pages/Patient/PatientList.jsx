import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { patientService } from '../../services/patientServices';
import './Patient.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await patientService.getAll();
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        await patientService.delete(id);
        setPatients(patients.filter((p) => p.id !== id));
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    }
  };

  if (loading) return <div className="loading">Loading patients...</div>;

  return (
    <div className="patient-container">
      {/* Header section with Title & Navigation Button */}
      <div className="header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Patient Directory</h2>
        <button 
          className="btn-add" 
          onClick={() => navigate('/patients/add')}
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
          + Add Patient
        </button>
      </div>

      {/* Patient Table */}
      <table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.email || 'N/A'}</td>
                <td>
                  <button onClick={() => handleDelete(patient.id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No patients found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;