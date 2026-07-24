import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctorService } from '../../services/doctorService';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await doctorService.getById(id);
        setDoctor(response.data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [id]);

  if (loading) return <div>Loading profile...</div>;
  if (!doctor) return <div>Doctor not found.</div>;

  return (
    <div style={{ padding: '25px', maxWidth: '800px', margin: '0 auto', background: '#fff', borderRadius: '8px' }}>
      <button onClick={() => navigate('/doctors')} style={{ marginBottom: '15px', padding: '6px 12px' }}>
        ← Back to Directory
      </button>

      <h2>Dr. {doctor.name}</h2>
      <p style={{ color: '#007bff', fontWeight: 'bold' }}>{doctor.specialization}</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
        <div><strong>Qualification:</strong> {doctor.qualification || 'N/A'}</div>
        <div><strong>Contact:</strong> {doctor.contactNumber}</div>
        <div><strong>Email:</strong> {doctor.email || 'N/A'}</div>
        <div><strong>Available Days:</strong> {doctor.availableDays || 'Mon - Fri'}</div>
      </div>
    </div>
  );
};

export default DoctorDetails;