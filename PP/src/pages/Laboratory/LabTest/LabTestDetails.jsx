import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LabTestDetails.css";

function LabTestDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [labTest, setLabTest] = useState({});

    useEffect(() => {
        loadLabTest();
    }, []);

    const loadLabTest = () => {

        // Replace with Spring Boot API

        const data = {

            labTestId: id,

            appointmentId: "APT101",

            patientId: "PAT101",

            labId: "LAB001",

            testName: "Blood Sugar",

            sampleType: "Blood",

            testDate: "2026-07-22",

            result: "110 mg/dL",

            status: "Completed"

        };

        setLabTest(data);

    };

    return (

        <div className="labtest-details-container">

            <div className="details-card">

                <div className="details-header">

                    <h2>Lab Test Details</h2>

                </div>

                <div className="details-body">

                    <div className="detail-row">

                        <span>Lab Test ID</span>

                        <p>{labTest.labTestId}</p>

                    </div>

                    <div className="detail-row">

                        <span>Appointment ID</span>

                        <p>{labTest.appointmentId}</p>

                    </div>

                    <div className="detail-row">

                        <span>Patient ID</span>

                        <p>{labTest.patientId}</p>

                    </div>

                    <div className="detail-row">

                        <span>Laboratory ID</span>

                        <p>{labTest.labId}</p>

                    </div>

                    <div className="detail-row">

                        <span>Test Name</span>

                        <p>{labTest.testName}</p>

                    </div>

                    <div className="detail-row">

                        <span>Sample Type</span>

                        <p>{labTest.sampleType}</p>

                    </div>

                    <div className="detail-row">

                        <span>Test Date</span>

                        <p>{labTest.testDate}</p>

                    </div>

                    <div className="detail-row">

                        <span>Result</span>

                        <p>{labTest.result}</p>

                    </div>

                    <div className="detail-row">

                        <span>Status</span>

                        <p>

                            <span
                                className={`status ${labTest.status?.toLowerCase().replace(" ", "-")}`}
                            >
                                {labTest.status}
                            </span>

                        </p>

                    </div>

                </div>

                <div className="details-footer">

                    <button
                        className="edit-btn"
                        onClick={() =>
                            navigate(`/laboratory/tests/edit/${labTest.labTestId}`)
                        }
                    >
                        Edit
                    </button>

                    <button
                        className="back-btn"
                        onClick={() =>
                            navigate("/laboratory/tests")
                        }
                    >
                        Back
                    </button>

                </div>

            </div>

        </div>

    );

}

export default LabTestDetails;