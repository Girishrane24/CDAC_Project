import "./EditDoctor.css";
import DoctorForm from "../../components/doctor/DoctorForm";
import { useNavigate } from "react-router-dom";

function EditDoctor() {

    const navigate = useNavigate();

    // Dummy data
    const doctor = {
        name: "Dr. Rajesh Sharma",
        specialization: "Cardiology",
        qualification: "MBBS, MD",
        experience: 10,
        gender: "Male",
        phone: "9876543210",
        email: "rajesh@gmail.com",
        address: "Pune, Maharashtra",
        consultationFee: 800,
        status: "Available",
    };

    const handleUpdate = (updatedDoctor) => {

        console.log(updatedDoctor);

        alert("Doctor Updated Successfully");

        // axios.put(...)

        navigate("/doctor");
    };

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