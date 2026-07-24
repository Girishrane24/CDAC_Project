import React from "react";
import "./MedicalHistory.css";

function MedicalHistory() {

  const history = [
    {
      date: "15-Jan-2026",
      doctor: "Dr. Mehta",
      diagnosis: "Viral Fever",
      treatment: "Paracetamol + Rest",
      status: "Recovered",
    },
    {
      date: "10-Feb-2026",
      doctor: "Dr. Shah",
      diagnosis: "Blood Pressure",
      treatment: "BP Medication",
      status: "Ongoing",
    },
    {
      date: "22-Apr-2026",
      doctor: "Dr. Kulkarni",
      diagnosis: "Diabetes",
      treatment: "Insulin Therapy",
      status: "Under Observation",
    },
  ];

  return (
    <div className="history-page">

      <div className="history-card">

        <h2>Medical History</h2>

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Doctor</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {history.map((item, index) => (

              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.doctor}</td>
                <td>{item.diagnosis}</td>
                <td>{item.treatment}</td>
                <td>{item.status}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default MedicalHistory;