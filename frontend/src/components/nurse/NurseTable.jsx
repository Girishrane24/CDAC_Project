import React from "react";
import { NavLink } from "react-router-dom";
import "./NurseTable.css";

function NurseTable({ nurses }) {
  return (
    <div className="nurse-table-wrapper">
      <table className="nurse-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Shift</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {nurses && nurses.length > 0 ? (
            nurses.map((nurse) => (
              <tr key={nurse.id}>
                <td>{nurse.id}</td>

                <td>{nurse.name}</td>

                <td>{nurse.email}</td>

                <td>{nurse.phone}</td>

                <td>{nurse.department}</td>

                <td>{nurse.shift}</td>

                <td>
                  <span
                    className={
                      nurse.availabilityStatus === "Available"
                        ? "status-available"
                        : "status-assigned"
                    }
                  >
                    {nurse.availabilityStatus}
                  </span>
                </td>

                <td>
                  <NavLink to={`/nurses/${nurse.id}`}>
                    <button className="view-btn">View</button>
                  </NavLink>

                  <NavLink to={`/nurses/edit/${nurse.id}`}>
                    <button className="edit-btn">Edit</button>
                  </NavLink>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">
                No Nurses Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NurseTable;
