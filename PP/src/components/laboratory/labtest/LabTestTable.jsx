import { useState } from "react";
import "./LabTestTable.css";

function LabTestTable({
  labTests = [],
  onView,
  onEdit,
  onDelete,
}) {

  const [search, setSearch] = useState("");

  const filteredTests = labTests.filter((test) =>

    test.labTestId.toLowerCase().includes(search.toLowerCase()) ||

    test.patientId.toLowerCase().includes(search.toLowerCase()) ||

    test.appointmentId.toLowerCase().includes(search.toLowerCase()) ||

    test.testName.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div className="labtest-table-container">

      <div className="table-header">

        <h2>Lab Test List</h2>

        <input
          type="text"
          placeholder="Search Lab Test..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="labtest-table">

        <thead>

          <tr>

            <th>Lab Test ID</th>

            <th>Appointment ID</th>

            <th>Patient ID</th>

            <th>Lab ID</th>

            <th>Test Name</th>

            <th>Sample</th>

            <th>Test Date</th>

            <th>Result</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {

            filteredTests.length === 0 ?

              (

                <tr>

                  <td
                    colSpan="10"
                    className="no-data"
                  >
                    No Lab Tests Found
                  </td>

                </tr>

              )

              :

              filteredTests.map((test) => (

                <tr key={test.labTestId}>

                  <td>{test.labTestId}</td>

                  <td>{test.appointmentId}</td>

                  <td>{test.patientId}</td>

                  <td>{test.labId}</td>

                  <td>{test.testName}</td>

                  <td>{test.sampleType}</td>

                  <td>{test.testDate}</td>

                  <td>{test.result || "Pending"}</td>

                  <td>

                    <span
                      className={`status ${test.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {test.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() =>
                        onView && onView(test.labTestId)
                      }
                    >
                      View
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        onEdit && onEdit(test.labTestId)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        onDelete && onDelete(test.labTestId)
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

export default LabTestTable;