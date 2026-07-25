import "./AddDoctor.css";
import DoctorForm from "../../components/doctor/DoctorForm";
import { useNavigate } from "react-router-dom";

function AddDoctor() {

  const navigate = useNavigate();

  const handleSubmit = (doctorData) => {

    console.log(doctorData);

    alert("Doctor Added Successfully");

    // Later
    // axios.post("http://localhost:8080/api/doctors",doctorData)

    navigate("/doctor");
  };

  return (
    <div className="add-doctor-page">

      <div className="page-title">

        <h2>Add New Doctor</h2>

        <p>Fill all required doctor information.</p>

      </div>

      <DoctorForm
        onSubmit={handleSubmit}
        buttonText="Add Doctor"
      />

    </div>
  );
}

export default AddDoctor;