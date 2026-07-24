import React from "react";
import PatientTable from "../../components/patient/PatientTable";
import "./Patient.css";

function PatientList() {
  return (
    <div className="patient-page">

      <div className="page-header">
        <h2>Patient Management</h2>

        <button className="add-btn">
          + Add Patient
        </button>
      </div>

      <PatientTable />

    </div>
  );
}

export default PatientList;