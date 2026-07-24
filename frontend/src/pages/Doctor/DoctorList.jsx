import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctorService } from '../../services/doctorService';
import './DoctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await doctorService.getAll();
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to remove this doctor?')) {
      try {
        await doctorService.delete(id);
        setDoctors(doctors.filter((doc) => doc.id !== id));
      } catch (error) {
        console.error('Error deleting doctor:', error);
      }
    }
  };

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Loading doctor profiles...</div>;

  return (
    <div className="doctor-container" style={{ padding: '20px' }}>
      {/* Header section with Title, Search, and Add Doctor Button */}
      <div 
        className="header-actions" 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}
      >
        <h2>Doctor Directory</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search by name or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '250px'
            }}
          />
          {/* Add Doctor Button -> Redirects to /doctors/add */}
          <button 
            className="btn-add" 
            onClick={() => navigate('/doctors/add')}
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
            + Add Doctor
          </button>
        </div>
      </div>

      {/* Doctor Table */}
      <table className="doctor-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Specialization</th>
            <th style={thStyle}>Qualification</th>
            <th style={thStyle}>Contact</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Available Days</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <tr key={doc.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tdStyle}><strong>Dr. {doc.name}</strong></td>
                <td style={tdStyle}>
                  <span style={specBadgeStyle}>{doc.specialization}</span>
                </td>
                <td style={tdStyle}>{doc.qualification || 'N/A'}</td>
                <td style={tdStyle}>{doc.contactNumber}</td>
                <td style={tdStyle}>{doc.email || 'N/A'}</td>
                <td style={tdStyle}>{doc.availableDays || 'Mon - Fri'}</td>
                <td style={tdStyle}>
                  <button 
                    onClick={() => handleDelete(doc.id)} 
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                No doctor records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Inline Helper Styles
const thStyle = { padding: '12px', borderBottom: '2px solid #ccc' };
const tdStyle = { padding: '12px' };
const specBadgeStyle = {
  backgroundColor: '#e3f2fd',
  color: '#0d47a1',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '13px',
  fontWeight: '500'
};

export default DoctorList;