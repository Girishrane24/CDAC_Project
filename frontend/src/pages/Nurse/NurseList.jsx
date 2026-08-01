import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import NurseCard from "../../components/nurse/NurseCard";
import NurseTable from "../../components/nurse/NurseTable";

import { getAllNurses } from "../../services/nurseService";

import "./NurseList.css";

function NurseList() {
const [nurses, setNurses] = useState([]);
  const [view, setView] = useState("table");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNurses();
  }, []);

  const fetchNurses = async () => {
    try {
      const data = await getAllNurses();

      console.log("Nurses API Response:", data);

      setNurses(data);
    } catch (error) {
      console.error("Error Fetching Nurses:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading Nurses...</h3>;
  }

  return (
    <div className="nurse-container">
      <div className="nurse-header">
        <h2> Nurse Management</h2>

        <div className="header-buttons">
          <NavLink to="/nurses/add">
            <button className="add-nurse-btn">+ Add Nurse</button>
          </NavLink>

          {/* <NavLink to="/nurses/assign">
            <button className="assign-nurse-btn">Assign Nurse</button>
          </NavLink> */}
        </div>
      </div>

      {/* View Buttons */}

      <div className="view-buttons">
        <button
          className={view === "table" ? "active" : ""}
          onClick={() => setView("table")}
        >
           Table View
        </button>

        <button
          className={view === "card" ? "active" : ""}
          onClick={() => setView("card")}
        >
           Card View
        </button>
      </div>

      {view === "table" ? (
        <NurseTable nurses={nurses} />
      ) : (
        <div className="nurse-card-container">
          {nurses.map((nurse) => (
            <NurseCard key={nurse.nurseId} nurse={nurse} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NurseList;
