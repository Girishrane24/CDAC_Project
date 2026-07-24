import React, { useState } from 'react';

const DoctorSchedule = ({ doctorId }) => {
  const [schedule, setSchedule] = useState([
    { day: 'Monday', shift: 'Morning (09:00 AM - 01:00 PM)', status: 'Active' },
    { day: 'Wednesday', shift: 'Evening (02:00 PM - 06:00 PM)', status: 'Active' },
    { day: 'Friday', shift: 'Morning (09:00 AM - 01:00 PM)', status: 'On Leave' },
  ]);

  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
      <h3>Work Schedule & Shift Slots</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ background: '#f8f9fa', textAlign: 'left' }}>
            <th style={{ padding: '8px' }}>Day</th>
            <th style={{ padding: '8px' }}>Shift Time</th>
            <th style={{ padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((s, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{s.day}</td>
              <td style={{ padding: '8px' }}>{s.shift}</td>
              <td style={{ padding: '8px' }}>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  backgroundColor: s.status === 'Active' ? '#d4edda' : '#f8d7da',
                  color: s.status === 'Active' ? '#155724' : '#721c24'
                }}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSchedule;