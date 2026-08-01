import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LabTestDetails.css";
import { Link } from "react-router-dom";
import "./TestReport.css";

import { getLabTestById } from "../../../services/labTestService";

function LabTestDetails() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [labTest, setLabTest] = useState(null);

    useEffect(() => {
        loadLabTest();
    }, []);

    const loadLabTest = async () => {

        try {

            const response = await getLabTestById(id);

            setLabTest(response.data);

        } catch (error) {

            console.error("Error fetching Lab Test:", error);

        }

    };

    if (!labTest) {

        return (
            <div className="labtest-details-container">
                <h3>Loading...</h3>
            </div>
        );

    }

      const handlePrint = () => {
        window.print();
    };

    return (

        <div className="labtest-details-container">

            <div className="details-card">

                <div className="report-header">

                    <h1>CarePoint Hospital System</h1>

                    <h2>Laboratory Test Report</h2>

                </div>

                <div className="details-body">

                    <div className="detail-row">
                        <span>Lab Test ID</span>
                        <p>{labTest.labTestId}</p>
                    </div>

                    {/* <div className="detail-row">
                        <span>Appointment ID</span>
                        <p>{labTest.appointmentId}</p>
                    </div> */}

                    <div className="detail-row">
                        <span>Patient</span>
                        <p>{labTest.patientName}</p>
                    </div>

                    <div className="detail-row">
                        <span>Laboratory</span>
                        <p>{labTest.labName}</p>
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
                        <span>Price</span>
                        <p>₹{labTest.price}</p>
                    </div>

                    <div className="detail-row">
                        <span>Result</span>
                        <p>
                            {labTest.result
                                ? labTest.result
                                : "Result Pending"}
                        </p>
                    </div>

                    <div className="detail-row">
                        <span>Status</span>

                        <p>

                            <span
                                className={`status ${labTest.status
                                    ?.toLowerCase()
                                    .replace(/\s/g, "-")}`}
                            >
                                {labTest.status}
                            </span>

                        </p>

                    </div>

                </div>

                <div className="details-footer">

                    {/* <button
                        className="edit-btn"
                        onClick={() =>
                            navigate(`/laboratory/tests/edit/${labTest.id}`)
                        }
                    >
                        Edit
                    </button> */}

                      <div className="report-footer">

                    <button
                        className="print-btn m-2"
                        onClick={handlePrint}
                    >
                        Print Report
                    </button>
                    <button
                        className="back-btn btn btn-sm m-2"
                        onClick={() =>
                            navigate("/laboratory/tests")
                        }
                    >
                        Back
                    </button>

                </div>


                </div>

            </div>

        </div>

    );

}

export default LabTestDetails;