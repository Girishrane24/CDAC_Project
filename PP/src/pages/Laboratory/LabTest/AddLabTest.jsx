import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabTestForm from "../../../components/laboratory/labtest/LabTestForm";
// import "./AddLabTest.css";


function AddLabTest() {

    const navigate = useNavigate();

    const [labTest, setLabTest] = useState({

        labTestId: "",

        appointmentId: "",

        patientId: "",

        labId: "",

        testName: "",

        sampleType: "",

        testDate: "",

        result: "",

        status: "Pending"

    });

    // Dummy Data (Replace with Spring Boot API)

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

        alert("Lab Test Added Successfully");

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
    buttonText="Save"
    onCancel={() => navigate("/laboratory/tests")}
/>


    );

}

export default AddLabTest;