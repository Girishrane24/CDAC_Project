

import React from "react";
import "./PatientDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

function PatientDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const patient = location.state;

  if (!patient) {
    return (
      <div className="patient-details-container">
        <h2>Patient Not Found</h2>
        <button
          className="back-btn"
          onClick={() => navigate("/patients")}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="patient-details-container">

      <div className="patient-details-card">

        <h2>Patient Details</h2>

        <div className="details-grid">

          {/* <div>
            <label>Patient ID</label>
            <p>{patient.id}</p>
          </div> */}

          <div>
            <label>First Name</label>
            <p>{patient.firstName}</p>
          </div>

          <div>
            <label>Last Name</label>
            <p>{patient.lastName}</p>
          </div>

          <div>
            <label>Gender</label>
            <p>{patient.gender}</p>
          </div>

          <div>
            <label>Date of Birth</label>
            <p>{patient.dob}</p>
          </div>

          <div>
            <label>Blood Group</label>
            <p>{patient.bloodGroup}</p>
          </div>

          <div>
            <label>Phone Number</label>
            <p>{patient.phone}</p>
          </div>

          <div>
            <label>Email</label>
            <p>{patient.email}</p>
          </div>

          <div>
            <label>Address</label>
            <p>{patient.address}</p>
          </div>

        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            className="back-btn"
            onClick={() => navigate("/patients")}
          >
            Back
          </button>
        </div>

      </div>

    </div>
  );
}

export default PatientDetails;