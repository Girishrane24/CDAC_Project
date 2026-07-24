import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctorService } from '../../services/doctorService';

const AddDoctor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    qualification: '',
    contactNumber: '',
    email: '',
    availableDays: 'Monday - Friday',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await doctorService.create(formData);
      alert('Doctor registered successfully!');
      navigate('/doctors'); // Redirect back to doctor list
    } catch (error) {
      console.error('Error saving doctor profile:', error);
      alert('Failed to register doctor. Check backend connection on port 8082.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', padding: '25px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '20px' }}>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Doctor Name *</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Sarah Jenkins"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Specialization *</label>
            <input
              type="text"
              name="specialization"
              placeholder="e.g. Cardiology, Pediatrics"
              value={formData.specialization}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Qualification</label>
            <input
              type="text"
              name="qualification"
              placeholder="e.g. MBBS, MD"
              value={formData.qualification}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Contact Number *</label>
          <input
            type="text"
            name="contactNumber"
            placeholder="e.g. +1 555 123 4567"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. doctor@hospital.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Available Days / Schedule</label>
          <input
            type="text"
            name="availableDays"
            placeholder="e.g. Mon, Wed, Fri (9 AM - 5 PM)"
            value={formData.availableDays}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button 
            type="button" 
            onClick={() => navigate('/doctors')} 
            style={{ padding: '10px 20px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', background: '#fff' }}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Save Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: '600' };
const inputStyle = { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' };

export default AddDoctor;