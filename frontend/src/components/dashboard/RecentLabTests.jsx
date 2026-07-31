import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLabTests } from "../../services/labTestService";
import "./RecentLabTests.css";

function RecentLabTests() {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    loadLabTests();
  }, []);

  const loadLabTests = async () => {
    try {
      const response = await getLabTests();

      // Show latest 5 records
      const latestTests = response.data.slice(-5).reverse();

      setLabTests(latestTests);
    } catch (error) {
      console.error("Error loading lab tests:", error);
    }
  };

  const getStatusClass = (status = "") => {
    switch (status.toLowerCase()) {
      case "completed":
        return "completed";

      case "pending":
        return "pending";

      case "cancelled":
        return "cancelled";

      case "in progress":
        return "inprogress";

      case "processing":
        return "processing";

      default:
        return "pending";
    }
  };
  return (
    <div className="recent-lab-tests">
      <div className="recent-header">
        <h3>Recent Lab Tests</h3>

        <Link to="/laboratory/tests" className="view-all">
          View All
        </Link>
      </div>

      <table className="recent-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Test</th>
            <th>Lab</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {labTests.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">
                No Lab Tests Available
              </td>
            </tr>
          ) : (
            labTests.map((test) => (
              <tr key={test.id}>
                <td>{test.patientName}</td>

                <td>{test.doctorName}</td>

                <td>{test.testName}</td>

                <td>{test.labName}</td>

                <td>{test.testDate}</td>

                {/* <td>
                                    <span
                                        className={`status-badge ${test.status.toLowerCase()}`}
                                    >
                                        {test.status}
                                    </span> 
                           
                                </td> */}
                <td>
                  <span
                    className={`status-badge ${getStatusClass(test.status)}`}
                  >
                    {test.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentLabTests;
