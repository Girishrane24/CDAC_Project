import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import LabTestForm from "../../../components/laboratory/labtest/LabTestForm";

import {
    getLabTestById,
    updateLabTest,
} from "../../../services/labTestService";

import { getAppointments } from "../../../services/appointmentService";
import { getPatients } from "../../../services/patientServices";
import { getLabs } from "../../../services/labService";

import labTests from "../../../data/labTests";

function EditLabTest() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [labTest, setLabTest] = useState({

        labTestId: "",

        appointmentId: "",

        patientId: "",
        patientName: "",

        labId: "",
        labName: "",

        testName: "",

        sampleType: "",

        testDate: "",

        result: "",

        status: "",

        price: ""

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

                labTestRes,
                appointmentRes,
                patientRes,
                labRes

            ] = await Promise.all([

                getLabTestById(id),

                getAppointments(),

                getPatients(),

                getLabs()

            ]);

            setLabTest(labTestRes.data);

            setAppointments(appointmentRes.data);

            setPatients(patientRes.data);

            setLabs(labRes.data);

        }

        catch (error) {

            console.error(error);

        }

    };

const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "patientId") {

        const patient = patients.find(
            (p) => p.id === value
        );

        setLabTest((prev) => ({
            ...prev,
            patientId: value,
            patientName: patient
                ? `${patient.firstName} ${patient.lastName}`
                : ""
        }));

    }

    else if (name === "labId") {

        const lab = labs.find(
            (l) => l.labId === value
        );

        setLabTest((prev) => ({
            ...prev,
            labId: value,
            labName: lab ? lab.labName : ""
        }));

    }

    else if (name === "testName") {

        const selected = labTests.find(
            (test) => test.testName === value
        );

        setLabTest((prev) => ({
            ...prev,
            testName: value,
            sampleType: selected?.sampleType || "",
            price: selected?.price || ""
        }));

    }

    else {

        setLabTest((prev) => ({
            ...prev,
            [name]: value
        }));

    }
};


const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        console.log("Updating:", labTest);

        await updateLabTest(id, labTest);

        alert("Lab Test Updated Successfully");

        navigate("/laboratory/tests");

    } catch (error) {

        console.error(error);

        alert("Failed to Update Lab Test");

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

            buttonText="Update"

            isEdit={true}

            onCancel={() =>
                navigate("/laboratory/tests")
            }

        />

    );

}

export default EditLabTest;