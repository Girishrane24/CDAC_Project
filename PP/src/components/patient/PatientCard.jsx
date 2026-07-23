import React from "react";
import "./PatientCard.css";

function PatientCard({ patient }) {
  return (
    <div className="patient-card">

      <div className="patient-card-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Patient"
          className="patient-avatar"
        />

        <div>
          <h3>
            {patient.firstName} {patient.lastName}
          </h3>

          <p>ID : {patient.id}</p>
        </div>
      </div>

      <div className="patient-card-body">

        <div className="info">
          <span>Age</span>
          <strong>{patient.age}</strong>
        </div>

        <div className="info">
          <span>Gender</span>
          <strong>{patient.gender}</strong>
        </div>

        <div className="info">
          <span>Blood Group</span>
          <strong>{patient.bloodGroup}</strong>
        </div>

        <div className="info">
          <span>Phone</span>
          <strong>{patient.phone}</strong>
        </div>

        <div className="info">
          <span>Email</span>
          <strong>{patient.email}</strong>
        </div>

      </div>

      <div className="patient-card-footer">

        <button className="details-btn">
          View Details
        </button>

        <button className="edit-btn">
          Edit
        </button>

      </div>

    </div>
  );
}

export default PatientCard;