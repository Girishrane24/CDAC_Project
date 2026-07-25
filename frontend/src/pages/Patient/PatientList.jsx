

import React, { useEffect, useState } from "react";
import PatientTable from "../../components/patient/PatientTable";
import "./Patient.css";
import { NavLink } from "react-router-dom";
import { getPatients } from "../../services/patientServices";



function PatientList() {

  const [patients, setPatients] = useState([]);

useEffect(() => {
    loadPatients();
}, []);

const loadPatients = async () => {
    try {
        const res = await getPatients();
        setPatients(res.data);
    } catch (err) {
        console.log(err);
    }
};

  return (
    <div className="patient-page">
      <div className="page-header">
        <h2>Patient Management</h2>

        <NavLink to="/patients/add">
          <button className="add-btn">+ Add Patient</button>
        </NavLink>
      </div>

      <PatientTable />
    </div>
  );
}

export default PatientList;
