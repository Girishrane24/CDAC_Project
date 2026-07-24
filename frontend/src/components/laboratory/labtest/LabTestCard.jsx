import "./LabTestCard.css";

function LabTestCard({ labTest, onView, onEdit, onDelete }) {

    return (

        <div className="labtest-card">

            <div className="labtest-header">

                <h3>{labTest.testName}</h3>

            </div>

            <div className="labtest-body">

                <p>
                    <strong>Lab Test ID :</strong> {labTest.labTestId}
                </p>

                <p>
                    <strong>Patient ID :</strong> {labTest.patientId}
                </p>

                <p>
                    <strong>Appointment ID :</strong> {labTest.appointmentId}
                </p>

                <p>
                    <strong>Laboratory :</strong> {labTest.labId}
                </p>

                <p>
                    <strong>Sample Type :</strong> {labTest.sampleType}
                </p>

                <p>
                    <strong>Test Date :</strong> {labTest.testDate}
                </p>

                <p>
                    <strong>Result :</strong> {labTest.result || "Pending"}
                </p>

                <p>

                    <strong>Status :</strong>

                    <span
                        className={`status ${labTest.status.toLowerCase().replace(" ", "-")}`}
                    >
                        {labTest.status}
                    </span>

                </p>

            </div>

            <div className="labtest-footer">

                <button
                    className="view-btn"
                    onClick={() => onView(labTest.labTestId)}
                >
                    View
                </button>

                <button
                    className="edit-btn"
                    onClick={() => onEdit(labTest.labTestId)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(labTest.labTestId)}
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default LabTestCard;