import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LabTestList.css";

import { getLabTests, deleteLabTest } from "../../../services/labTestService";

function LabTestList() {
  const navigate = useNavigate();

  const [labTests, setLabTests] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadLabTests();
  }, []);

  const loadLabTests = async () => {
    try {
      const response = await getLabTests();

      setLabTests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this Lab Test?")) return;

    try {
      await deleteLabTest(id);

      loadLabTests();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTests = labTests.filter((test) => {
    const keyword = search.toLowerCase();

    return (
      (test.labTestId || "").toLowerCase().includes(keyword) ||
      (test.patientId || "").toLowerCase().includes(keyword) ||
      (test.testName || "").toLowerCase().includes(keyword) ||
      (test.status || "").toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="labtest-container">
      <div className="labtest-header">
        <h2>Lab Test List</h2>

        <button
          className="add-btn"
          onClick={() => navigate("/laboratory/tests/add")}
        >
          + Add Lab Test
        </button>
      </div>

      <div className="search-box">
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
            <th>Patient</th>
            <th>Laboratory</th>
            <th>Test Name</th>
            <th>Sample Type</th>
            <th>Test Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Result</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredTests.length === 0 ? (
            <tr>
              <td colSpan="10">No Lab Tests Found</td>
            </tr>
          ) : (
            filteredTests.map((test) => (
              <tr key={test.id}>
                <td>{test.labTestId}</td>

                <td>{test.patientName}</td>

                <td>{test.labName}</td>

                <td>{test.testName}</td>

                <td>{test.sampleType}</td>

                <td>{test.testDate}</td>

                <td>₹{test.price}</td>

                <td>
                  <span
                    className={`status ${test.status.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {test.status}
                  </span>
                </td>

                <td>{test.result || "Pending"}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/laboratory/tests/details/${test.id}`)
                    }
                  >
                    View
                  </button>

                   <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/laboratory/tests/edit/${test.id}`)
                    }
                  >
                    Edit
                  </button> 

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(test.id)}
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

export default LabTestList;
