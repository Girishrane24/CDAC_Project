import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LabTestList.css";

function LabTestList() {

    const navigate = useNavigate();

    const [labTests, setLabTests] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        loadLabTests();
    }, []);

    const loadLabTests = () => {

        // Replace with Spring Boot API

        const data = [

            {
                labTestId: "LT001",
                appointmentId: "APT101",
                patientId: "PAT101",
                labId: "LAB001",
                testName: "Blood Sugar",
                sampleType: "Blood",
                testDate: "2026-07-22",
                result: "110 mg/dL",
                status: "Completed"
            },

            {
                labTestId: "LT002",
                appointmentId: "APT102",
                patientId: "PAT102",
                labId: "LAB002",
                testName: "Urine Test",
                sampleType: "Urine",
                testDate: "2026-07-23",
                result: "",
                status: "Pending"
            },

            {
                labTestId: "LT003",
                appointmentId: "APT103",
                patientId: "PAT103",
                labId: "LAB001",
                testName: "CBC",
                sampleType: "Blood",
                testDate: "2026-07-24",
                result: "",
                status: "In Progress"
            }

        ];

        setLabTests(data);

    };

    const deleteLabTest = (id) => {

        if (window.confirm("Delete this Lab Test?")) {

            setLabTests(
                labTests.filter(
                    test => test.labTestId !== id
                )
            );

        }

    };

    const filteredTests = labTests.filter(test =>

        test.labTestId.toLowerCase().includes(search.toLowerCase()) ||

        test.patientId.toLowerCase().includes(search.toLowerCase()) ||

        test.testName.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <div className="labtest-container">

            <div className="labtest-header">

                <h2>Lab Test List</h2>

                <button
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

                        <th>Appointment ID</th>

                        <th>Patient ID</th>

                        <th>Lab ID</th>

                        <th>Test Name</th>

                        <th>Sample Type</th>

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

                                    <td colSpan="10">

                                        No Lab Tests Found

                                    </td>

                                </tr>

                            )

                            :

                            filteredTests.map(test => (

                                <tr key={test.labTestId}>

                                    <td>{test.labTestId}</td>

                                    <td>{test.appointmentId}</td>

                                    <td>{test.patientId}</td>

                                    <td>{test.labId}</td>

                                    <td>{test.testName}</td>

                                    <td>{test.sampleType}</td>

                                    <td>{test.testDate}</td>

                                    <td>

                                        {

                                            test.result === ""

                                                ?

                                                "Pending"

                                                :

                                                test.result

                                        }

                                    </td>

                                    <td>

                                        <span
                                            className={`status ${test.status.toLowerCase().replace(" ","-")}`}
                                        >
                                            {test.status}
                                        </span>

                                    </td>

                                    <td>

                                        <button

                                            className="view-btn"

                                            onClick={() =>
                                                navigate(`/laboratory/tests/details/${test.labTestId}`)
                                            }

                                        >

                                            View

                                        </button>

                                        <button

                                            className="edit-btn"

                                            onClick={() =>
                                                navigate(`/laboratory/tests/edit/${test.labTestId}`)
                                            }

                                        >

                                            Edit

                                        </button>

                                        <button

                                            className="delete-btn"

                                            onClick={() =>
                                                deleteLabTest(test.labTestId)
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

export default LabTestList;