import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LabTestForm from "../../../components/laboratory/labtest/LabTestForm";

import { getAppointments } from "../../../services/appointmentService";
import { getPatients } from "../../../services/patientServices";
import { getLabs } from "../../../services/labService";
import { addLabTest } from "../../../services/labTestService";

import labTests from "../../../data/labTests";

function AddLabTest() {

    const navigate = useNavigate();

   const [labTest, setLabTest] = useState({

    labTestId: "",

    appointmentId: "",

    patientId: "",
    patientName: "",

    labId: "",
    labName: "",
      doctorName: "", 

    testName: "",

    sampleType: "",

    testDate: "",

    result: "",

    status: "Pending",

    price: "",

});

    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [labs, setLabs] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const [
                appointmentRes,
                patientRes,
                labRes,
            ] = await Promise.all([
                getAppointments(),
                getPatients(),
                getLabs(),
            ]);

            setAppointments(appointmentRes.data);
            setPatients(patientRes.data);
            setLabs(labRes.data);

        } catch (error) {
            console.error("Error loading data:", error);
        }

    };

const handleChange = (e) => {

    const { name, value } = e.target;

    // if (name === "patientId") {

    //     const patient = patients.find(p => p.id === value);

    //     setLabTest(prev => ({
    //         ...prev,
    //         patientId: value,
    //         patientName: patient
    //             ? `${patient.firstName} ${patient.lastName}`
    //             : ""
    //     }));

    // }

    if (name === "appointmentId") {

    const appointment = appointments.find(
        a => a.id === value
    );

    setLabTest(prev => ({
        ...prev,
        appointmentId: value,

        doctorName: appointment?.doctorName || "",

        patientId: appointment?.patientId || "",
        patientName: appointment?.patientName || ""
    }));

}
else if (name === "patientId") {

    const patient = patients.find(
        p => p.id === value
    );

    setLabTest(prev => ({
        ...prev,
        patientId: value,
        patientName: patient
            ? `${patient.firstName} ${patient.lastName}`
            : ""
    }));

}

    else if (name === "labId") {

        const lab = labs.find(l => l.labId === value);

        setLabTest(prev => ({
            ...prev,
            labId: value,
            labName: lab ? lab.labName : ""
        }));

    }

    else if (name === "testName") {

        const selected = labTests.find(
            t => t.testName === value
        );

        setLabTest(prev => ({
            ...prev,
            testName: value,
            sampleType: selected.sampleType,
            price: selected.price
        }));

    }

    else {

        setLabTest(prev => ({
            ...prev,
            [name]: value
        }));

    }

};

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addLabTest(labTest);

            alert("Lab Test Added Successfully");

            navigate("/laboratory/tests");

        } catch (error) {

            console.error(error);

            alert("Failed to add Lab Test");

        }

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
            isEdit={false}
            onCancel={() => navigate("/laboratory/tests")}
        />
    );
}

export default AddLabTest;