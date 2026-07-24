import { useState } from "react";
import "./ReportTable.css";

function ReportTable({
  reports = [],
  onView,
  onPrint,
}) {

  const [search, setSearch] = useState("");

  const filteredReports = reports.filter((report) =>

    report.labTestId.toLowerCase().includes(search.toLowerCase()) ||

    report.patientName.toLowerCase().includes(search.toLowerCase()) ||

    report.patientId.toLowerCase().includes(search.toLowerCase()) ||

    report.testName.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div className="report-table-container">

      <div className="report-table-header">

        <h2>Laboratory Reports</h2>

        <input
          type="text"
          placeholder="Search Report..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="report-table">

        <thead>

          <tr>

            <th>Report ID</th>

            <th>Patient</th>

            <th>Patient ID</th>

            <th>Appointment ID</th>

            <th>Doctor</th>

            <th>Test Name</th>

            <th>Sample Type</th>

            <th>Test Date</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {

            filteredReports.length === 0 ?

            (

              <tr>

                <td
                  colSpan="10"
                  className="no-data"
                >
                  No Reports Found
                </td>

              </tr>

            )

            :

            filteredReports.map((report) => (

              <tr key={report.labTestId}>

                <td>{report.labTestId}</td>

                <td>{report.patientName}</td>

                <td>{report.patientId}</td>

                <td>{report.appointmentId}</td>

                <td>{report.doctorName}</td>

                <td>{report.testName}</td>

                <td>{report.sampleType}</td>

                <td>{report.testDate}</td>

                <td>

                  <span
                    className={`status ${report.status.toLowerCase().replace(" ","-")}`}
                  >
                    {report.status}
                  </span>

                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() =>
                      onView && onView(report.labTestId)
                    }
                  >
                    View
                  </button>

                  <button
                    className="print-btn"
                    onClick={() =>
                      onPrint && onPrint(report.labTestId)
                    }
                  >
                    Print
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

export default ReportTable;