import { useState } from "react";
import "./BedTable.css";

function BedTable({
  beds = [],
  onEdit,
  onDelete,
  onChangeStatus,
}) {
  const [search, setSearch] = useState("");

  const filteredBeds = beds.filter((bed) => {
    return (
      bed.bedNumber.toLowerCase().includes(search.toLowerCase()) ||
      bed.roomNumber.toLowerCase().includes(search.toLowerCase()) ||
      bed.status.toLowerCase().includes(search.toLowerCase()) ||
      bed.bedType.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bed-table-container">

      <div className="bed-table-header">

        <h2>Bed List</h2>

        <input
          type="text"
          placeholder="Search Bed..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="bed-table">

        <thead>

          <tr>

            <th>Bed No</th>
            <th>Room</th>
            <th>Floor</th>
            <th>Bed Type</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredBeds.length === 0 ? (

            <tr>
              <td colSpan="7" className="no-data">
                No Beds Available
              </td>
            </tr>

          ) : (

            filteredBeds.map((bed) => (

              <tr key={bed.id}>

                <td>{bed.bedNumber}</td>

                <td>{bed.roomNumber}</td>

                <td>{bed.floor}</td>

                <td>{bed.bedType}</td>

                <td>
                  {bed.patientName || "Not Assigned"}
                </td>

                <td>

                  <span
                    className={`status ${bed.status.toLowerCase()}`}
                  >
                    {bed.status}
                  </span>

                </td>

                <td>

                  <button
                    className="status-btn"
                    onClick={() =>
                      onChangeStatus &&
                      onChangeStatus(bed.id)
                    }
                  >
                    Status
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      onEdit &&
                      onEdit(bed.id)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete &&
                      onDelete(bed.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default BedTable;