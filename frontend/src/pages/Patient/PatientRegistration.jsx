import React, { useState } from "react";
import "./PatientRegistration.css";
import Footer from "../../components/layout/Footer";

function PatientRegistration() {
  // 1. State management to track form field inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    contactNumber: "",
    gender: "Male",
    dob: "",
    bloodGroup: "A+"
  });

  // Loading and feedback states for better UI experience
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // 2. Dynamic change handler for inputs and selects
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Form submit handler connecting to PatientController
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      // API call matching your Spring Boot backend @RequestMapping("/register")
      const response = await fetch("http://localhost:8082/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const savedPatient = await response.json();
        console.log("Saved Patient Data:", savedPatient);
        setStatusMessage({ type: "success", text: "Patient registered successfully!" });
        
        // Reset form after successful registration
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          contactNumber: "",
          gender: "Male",
          dob: "",
          bloodGroup: "A+"
        });
      } else {
        setStatusMessage({ type: "error", text: "Failed to register patient. Server error." });
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatusMessage({ 
        type: "error", 
        text: "Cannot connect to server. Check if Spring Boot backend is running on port 8082." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      {/* Top Header */}
      <div className="top-header">
        <h1>Patient Registration Form</h1>
      </div>

      <div className="overlay">
        <div className="registration-card">
          <h2>PATIENT DETAILS</h2>

          {/* Feedback Banner */}
          {statusMessage && (
            <div className={`status-banner ${statusMessage.type}`}>
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* First Name */}
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="form-group">
                <label>Residential Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email address :</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <small>We'll never share your email with anyone else.</small>
              </div>

              {/* Contact */}
              <div className="form-group">
                <label>Enter Contact No:</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="bottom-row">
              <div className="gender">
                <label>Select Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="age">
                <label>DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="blood">
                <label>Select BloodGroup</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="A+">A+</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                </select>
              </div>
            </div>

            <div className="submit-btn">
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PatientRegistration;