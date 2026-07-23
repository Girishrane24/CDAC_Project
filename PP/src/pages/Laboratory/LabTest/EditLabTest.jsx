import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./EditLabTest.css";
import LabTestForm from "../../../components/laboratory/labtest/LabTestForm";

function EditLabTest() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [labTest, setLabTest] = useState({
        labTestId: "",
        appointmentId: "",
        patientId: "",
        labId: "",
        testName: "",
        sampleType: "",
        testDate: "",
        result: "",
        status: ""
    });

    // Replace with Spring Boot APIs

    const appointments = [
        { id: "APT101" },
        { id: "APT102" },
        { id: "APT103" }
    ];

    const patients = [
        { id: "PAT101", name: "Rahul Sharma" },
        { id: "PAT102", name: "Priya Patel" },
        { id: "PAT103", name: "Amit Verma" }
    ];

    const labs = [
        { id: "LAB001", name: "Central Pathology Lab" },
        { id: "LAB002", name: "Radiology Lab" },
        { id: "LAB003", name: "Blood Bank Lab" }
    ];

    useEffect(() => {
        loadLabTest();
    }, []);

    const loadLabTest = () => {

        // Dummy Data
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

    const handleChange = (e) => {

        const { name, value } = e.target;

        setLabTest({
            ...labTest,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(labTest);

        alert("Lab Test Updated Successfully");

        navigate("/laboratory/tests");

    };

    return (

        <LabTestForm
    labTest={labTest}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    appointments={appointments}
    patients={patients}
    labs={labs}
    buttonText="Update"
    isEdit={true}
    onCancel={() => navigate("/laboratory/tests")}
/>

    );

}

export default EditLabTest;