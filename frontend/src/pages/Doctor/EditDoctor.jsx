import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoctorForm from "../../components/doctor/DoctorForm";
import {
    getDoctorById,
    updateDoctor
} from "../../services/doctorService";
import "./EditDoctor.css";

function EditDoctor() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [doctor, setDoctor] = useState(null);

    useEffect(() => {

        loadDoctor();

    }, []);

    const loadDoctor = async () => {

        try {

            const response = await getDoctorById(id);

            setDoctor(response.data);


        } catch (error) {

            console.error(error);

            alert("Unable to load doctor.");

        }

    };

    const handleUpdate = async (updatedDoctor) => {

        try {

            await updateDoctor(id, updatedDoctor);

            alert("Doctor Updated Successfully");

            navigate("/doctors");

        } catch (error) {

            console.error(error);

            alert("Unable to update doctor.");

        }

    };

    if (!doctor) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="edit-doctor-page">

            <div className="edit-header">

                <h2>Edit Doctor</h2>

                <p>Update doctor information.</p>

            </div>

            <DoctorForm
                initialData={doctor}
                onSubmit={handleUpdate}
                buttonText="Update Doctor"
            />

        </div>

    );

}

export default EditDoctor;