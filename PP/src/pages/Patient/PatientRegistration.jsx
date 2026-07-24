import React from "react";
import "./PatientRegistration.css";
import Footer from "../../components/layout/Footer";

function PatientRegistration() {
  return (
    <div className="registration-page">
      {/* Top Header */}
      <div className="top-header">
        <h1>Patient Registration Form</h1>
      </div>

      <div className="overlay">
        <div className="registration-card">
          <h2>PATIENT DETAILS</h2>

          <form>
            <div className="form-grid">
              {/* First Name */}
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
 
           

              {/* Address */}
              <div className="form-group">
                <label>Residential Address</label>
                <input type="text" />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email address :</label>
                <input type="email" />
                <small>We'll never share your email with anyone else.</small>
              </div>

              {/* Contact */}
              <div className="form-group">
                <label>Enter Contact No:</label>
                <input type="text" />
              </div>
            </div>

            {/* Bottom Row */}

            <div className="bottom-row">
              <div className="gender">
                <label>Select Gender</label>

                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="age">
                <label>DOB</label>

                <input type="date" placeholder="Enter DOB"   />
              </div>

              <div className="blood">
                <label>Select BloodGroup</label>

                <select>
                  <option>A+</option>
                  <option>B-</option>
                  <option>AB-</option>
                  <option>O-</option>
                  <option>O+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>AB+</option>
                </select>
              </div>
            </div>

            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

        <Footer/>

    </div>
  );
}

export default PatientRegistration;
