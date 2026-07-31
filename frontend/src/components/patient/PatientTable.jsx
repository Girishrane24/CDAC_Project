import React, { useEffect, useState } from "react";
import "./PatientTable.css";
import { useNavigate } from "react-router-dom";
import {
  getPatients,
  deletePatient,
} from "../../services/patientServices";

function PatientTable() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const response = await getPatients();
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handleView = (patient) => {
    navigate("/patients/details", {
      state: patient,
    });
  };

  const handleEdit = (patient) => {
    navigate("/patients/edit", {
      state: patient,
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      try {
        await deletePatient(id);
        loadPatients();
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
    <table className="patient-table">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Blood Group</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {patients.length > 0 ? (
          patients.map((patient) => (
            <tr key={patient.id}>
              {/* <td>{patient.id}</td> */}

              <td>{patient.firstName}</td>

              <td>{patient.lastName}</td>

              <td>{patient.gender}</td>

              <td>{patient.phone}</td>

              <td>{patient.bloodGroup}</td>

              <td>
                <button
                  className="view-btn"
                  onClick={() => handleView(patient)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(patient)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(patient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              No Patients Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PatientTable;