import React from "react";
 import "./PatientTable.css";
//import "../../styles/buttons.css";
import { useNavigate } from "react-router-dom";

function PatientTable() {
  const navigate = useNavigate();

  const patients = [
    {
      id: 1,
      name: "Rahul Sharma",
      age: 28,
      gender: "Male",
      phone: "9876543210",
      blood: "A+",
    },
    {
      id: 2,
      name: "Priya Patel",
      age: 35,
      gender: "Female",
      phone: "9123456789",
      blood: "O+",
    },
    {
      id: 3,
      name: "Amit Verma",
      age: 42,
      gender: "Male",
      phone: "9988776655",
      blood: "B+",
    },
  ];

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
  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>ID</th>

          <th>Name</th>

          <th>Age</th>

          <th>Gender</th>

          <th>Phone</th>

          <th>Blood Group</th>

          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>

            <td>{patient.name}</td>

            <td>{patient.age}</td>

            <td>{patient.gender}</td>

            <td>{patient.phone}</td>

            <td>{patient.blood}</td>

            <td>
              <button
                className="view-btn"
                onClick={() => handleView(patient.id)}
              >
                View
              </button>

              <button
                className="edit-btn"
                onClick={() => handleEdit(patient.id)}
              >
                Edit
              </button>

              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PatientTable;
