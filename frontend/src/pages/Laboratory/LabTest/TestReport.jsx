import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TestReport.css";

function TestReport() {

    const { id } = useParams();

    const [report, setReport] = useState({});

    useEffect(() => {
        loadReport();
    }, []);

    const loadReport = () => {

        // Replace with Spring Boot API

        const data = {

            labTestId: id,

            patientName: "Rahul Sharma",

            patientId: "PAT101",

            appointmentId: "APT101",

            doctorName: "Dr. Amit Joshi",

            laboratory: "Central Pathology Lab",

            testName: "Blood Sugar",

            sampleType: "Blood",

            testDate: "2026-07-22",

            result: "110 mg/dL",

            status: "Completed"

        };

        setReport(data);

    };

    const handlePrint = () => {

        window.print();

    };

    return (

        <div className="report-container">

            <div className="report-card">

                <div className="report-header">

                    <h1>CarePoint Hospital System</h1>

                    <h2>Laboratory Test Report</h2>

                </div>

                <div className="report-section">

                    <div className="row">

                        <span>Report ID</span>

                        <p>{report.labTestId}</p>

                    </div>

                    <div className="row">

                        <span>Patient Name</span>

                        <p>{report.patientName}</p>

                    </div>

                    <div className="row">

                        <span>Patient ID</span>

                        <p>{report.patientId}</p>

                    </div>

                    <div className="row">

                        <span>Appointment ID</span>

                        <p>{report.appointmentId}</p>

                    </div>

                    <div className="row">

                        <span>Doctor</span>

                        <p>{report.doctorName}</p>

                    </div>

                    <div className="row">

                        <span>Laboratory</span>

                        <p>{report.laboratory}</p>

                    </div>

                    <div className="row">

                        <span>Test Name</span>

                        <p>{report.testName}</p>

                    </div>

                    <div className="row">

                        <span>Sample Type</span>

                        <p>{report.sampleType}</p>

                    </div>

                    <div className="row">

                        <span>Test Date</span>

                        <p>{report.testDate}</p>

                    </div>

                    <div className="row">

                        <span>Result</span>

                        <p className="result">{report.result}</p>

                    </div>

                    <div className="row">

                        <span>Status</span>

                        <p>

                            <span className="status">

                                {report.status}

                            </span>

                        </p>

                    </div>

                </div>

                <div className="signature-section">

                    <div>

                        ______________________

                        <br />

                        <strong>Lab Technician</strong>

                    </div>

                    <div>

                        ______________________

                        <br />

                        <strong>Doctor</strong>

                    </div>

                </div>

                <div className="report-footer">

                    <button
                        className="print-btn"
                        onClick={handlePrint}
                    >
                        Print Report
                    </button>

                </div>

            </div>

        </div>

    );

}

export default TestReport;