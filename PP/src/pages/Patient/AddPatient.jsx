import React, { useState } from "react";
import "../../components/patient/PatientForm.css";

function AddPatient() {
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(patient);

    alert("Patient Added Successfully!");
  };

  return (
    <div className="patient-form-page">
      <div className="patient-form-card">

        <h2>Add New Patient</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={patient.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={patient.lastName}
                onChange={handleChange}
                required
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
                <option value="">Select Gender</option>
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
                <option value="">Select Blood Group</option>
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

          <button className="save-btn">
            Save Patient
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddPatient;