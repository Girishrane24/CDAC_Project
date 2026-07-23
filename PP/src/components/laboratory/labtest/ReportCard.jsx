import "./ReportCard.css";

function ReportCard({ report, onView, onPrint }) {

    return (

        <div className="report-card">

            <div className="report-card-header">

                <h3>{report.testName}</h3>

                <span
                    className={`status ${report.status.toLowerCase().replace(" ", "-")}`}
                >
                    {report.status}
                </span>

            </div>

            <div className="report-card-body">

                <p>
                    <strong>Report ID:</strong> {report.labTestId}
                </p>

                <p>
                    <strong>Patient:</strong> {report.patientName}
                </p>

                <p>
                    <strong>Patient ID:</strong> {report.patientId}
                </p>

                <p>
                    <strong>Appointment:</strong> {report.appointmentId}
                </p>

                <p>
                    <strong>Doctor:</strong> {report.doctorName}
                </p>

                <p>
                    <strong>Laboratory:</strong> {report.laboratory}
                </p>

                <p>
                    <strong>Sample:</strong> {report.sampleType}
                </p>

                <p>
                    <strong>Test Date:</strong> {report.testDate}
                </p>

                <p>
                    <strong>Result:</strong>
                    <span className="result">
                        {report.result || "Pending"}
                    </span>
                </p>

            </div>

            <div className="report-card-footer">

                <button
                    className="view-btn"
                    onClick={() => onView(report.labTestId)}
                >
                    View
                </button>

                <button
                    className="print-btn"
                    onClick={() => onPrint(report.labTestId)}
                >
                    Print
                </button>

            </div>

        </div>

    );

}

export default ReportCard;