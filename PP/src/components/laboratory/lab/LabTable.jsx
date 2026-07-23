import { useState } from "react";
import "./LabTable.css";

function LabTable({
  labs = [],
  onView,
  onEdit,
  onDelete,
}) {

  const [search, setSearch] = useState("");

  const filteredLabs = labs.filter((lab) =>

    lab.labId.toLowerCase().includes(search.toLowerCase()) ||

    lab.labName.toLowerCase().includes(search.toLowerCase()) ||

    lab.location.toLowerCase().includes(search.toLowerCase()) ||

    lab.phone.includes(search)

  );

  return (

    <div className="lab-table-container">

      <div className="lab-table-header">

        <h2>Laboratory List</h2>

        <input
          type="text"
          placeholder="Search Laboratory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="lab-table">

        <thead>

          <tr>

            <th>Lab ID</th>

            <th>Laboratory Name</th>

            <th>Location</th>

            <th>Phone</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {

            filteredLabs.length === 0 ?

              (

                <tr>

                  <td
                    colSpan="5"
                    className="no-data"
                  >

                    No Laboratories Found

                  </td>

                </tr>

              )

              :

              filteredLabs.map((lab) => (

                <tr key={lab.labId}>

                  <td>{lab.labId}</td>

                  <td>{lab.labName}</td>

                  <td>{lab.location}</td>

                  <td>{lab.phone}</td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() =>
                        onView && onView(lab.labId)
                      }
                    >
                      View
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        onEdit && onEdit(lab.labId)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        onDelete && onDelete(lab.labId)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default LabTable;