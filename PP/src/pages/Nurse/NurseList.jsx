import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import NurseCard from "../../components/nurse/NurseCard";
import NurseTable from "../../components/nurse/NurseTable";

import "./NurseList.css";

function NurseList() {
  const [nurses, setNurses] = useState([]);

  const [view, setView] = useState("table");

  useEffect(() => {
    // Temporary data (replace with API call)

    const nurseData = [
      {
        id: 1,
        name: "Priya Sharma",
        email: "priya@gmail.com",
        phone: "9876543210",
        department: "ICU",
        shift: "Morning",
        availabilityStatus: "Available",
      },

      {
        id: 2,
        name: "Sneha Patil",
        email: "sneha@gmail.com",
        phone: "9123456789",
        department: "Emergency",
        shift: "Night",
        availabilityStatus: "Assigned",
      },

      {
        id: 3,
        name: "Anjali Deshmukh",
        email: "anjali@gmail.com",
        phone: "9988776655",
        department: "General",
        shift: "Evening",
        availabilityStatus: "Available",
      },
    ];

    setNurses(nurseData);
  }, []);

  return (
    <div className="nurse-container">
      <div className="nurse-header">
        <h2>👩‍⚕️ Nurse Management</h2>

        <div className="header-buttons">
          <NavLink to="/nurses/add">
            <button className="add-nurse-btn">+ Add Nurse</button>
          </NavLink>

          <NavLink to="/nurses/assign">
            <button className="assign-nurse-btn">Assign Nurse</button>
          </NavLink>
        </div>
      </div>

      {/* View Buttons */}

      <div className="view-buttons">
        <button
          className={view === "table" ? "active" : ""}
          onClick={() => setView("table")}
        >
          📋 Table View
        </button>

        <button
          className={view === "card" ? "active" : ""}
          onClick={() => setView("card")}
        >
          🗂 Card View
        </button>
      </div>

      {view === "table" ? (
        <NurseTable nurses={nurses} />
      ) : (
        <div className="nurse-card-container">
          {nurses.map((nurse) => (
            <NurseCard key={nurse.id} nurse={nurse} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NurseList;
