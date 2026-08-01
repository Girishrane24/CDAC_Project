import React from "react";
import { NavLink } from "react-router-dom";
import "./NurseCard.css";

function NurseCard({ nurse }) {
  return (
    <div className="nurse-card">
      <div className="nurse-card-header">
        <div className="nurse-avatar">👩‍⚕️</div>

        <div className="nurse-info">
          <h3>{nurse.name}</h3>
          {/* <p>
                        ID : {nurse.nurseId}
                    </p> */}
        </div>
      </div>

      <div className="nurse-card-body">
        <div className="info-row">
          <span>📧 Email</span>

          <strong>{nurse.email}</strong>
        </div>

        <div className="info-row">
          <span>📞 Phone</span>

          <strong>{nurse.phone}</strong>
        </div>

        <div className="info-row">
          <span>🏥 Department</span>

          <strong>{nurse.department}</strong>
        </div>

        <div className="info-row">
          <span>⏰ Shift</span>

          <strong>{nurse.shift}</strong>
        </div>

        <div className="info-row">
          <span>Status</span>

          <strong
            className={
              nurse.availabilityStatus === "Available"
                ? "available-status"
                : "assigned-status"
            }
          >
            {nurse.availabilityStatus}
          </strong>
        </div>
      </div>

      <div className="nurse-card-actions">
        <NavLink to={`/nurses/${nurse.nurseId}`}>
          <button className="view-card-btn">View</button>
        </NavLink>

        <NavLink to={`/nurses/edit/${nurse.nurseId}`}>
          <button className="edit-card-btn">Edit</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NurseCard;
