import React from "react";
import { NavLink } from "react-router-dom";
import "./NurseTable.css";
import { deleteNurse } from "../../services/nurseService";

function NurseTable({ nurses }) {

const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this nurse?"
    );

    if (!confirmDelete) return;

    try {

        await deleteNurse(id);

        alert("Nurse deleted successfully.");

        // Reload the list
        window.location.reload();

    } catch (error) {

        console.error(error);

        alert("Failed to delete nurse.");

    }

};

  return (
    <div className="nurse-table-wrapper">
      <table className="nurse-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
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
              <tr key={nurse.nurseId}>
                {/* <td>{nurse.nurseId}</td> */}

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
                  <NavLink to={`/nurses/${nurse.nurseId}`}>
                    <button className="view-btn">View</button>
                  </NavLink>

                  <NavLink to={`/nurses/edit/${nurse.nurseId}`}>
                    <button className="edit-btn">Edit</button>
                  </NavLink>

   <button
    className="btn btn-danger btn-sm"
    onClick={() => handleDelete(nurse.nurseId)}
>
    Delete
</button>

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
