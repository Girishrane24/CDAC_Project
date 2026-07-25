

import React, { useState } from "react";
import "../../components/patient/PatientForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePatient } from "../../services/patientServices";



function EditPatient() {
const location = useLocation();
const navigate = useNavigate();

const [patient, setPatient] = useState(location.state);
  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        await updatePatient(patient.id, patient);

        alert("Patient Updated Successfully!");

        navigate("/patients");

    } catch (error) {

        console.error(error);

        alert("Update Failed");

    }
};

  return (
    <div className="patient-form-page">

      <div className="patient-form-card">

        <h2>Edit Patient</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>First Name</label>

              <input
                type="text"
                name="firstName"
                value={patient.firstName}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Last Name</label>

              <input
                type="text"
                name="lastName"
                value={patient.lastName}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Address</label>

              <input
                type="text"
                name="address"
                value={patient.address}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={patient.email}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Contact Number</label>

              <input
                type="text"
                name="phone"
                value={patient.phone}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={patient.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={patient.dob}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Blood Group</label>

              <select
                name="bloodGroup"
                value={patient.bloodGroup}
                onChange={handleChange}
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

            </div>

          </div>

          <button className="update-btn"   onClick={() => navigate("/patients")}>
            Update Patient
          </button>

 <div style={{ marginTop: "20px" }}>
          <button
            className="back-btn"
            onClick={() => navigate("/patients")}
          >
            Back
          </button>
        </div>

        </form>

      </div>

    </div>
  );
}

export default EditPatient;