import "./AddDoctor.css";
import DoctorForm from "../../components/doctor/DoctorForm";
import { useNavigate } from "react-router-dom";
import { addDoctor } from "../../services/doctorService";

function AddDoctor() {

  const navigate = useNavigate();

const handleSubmit = async (doctorData) => {

    try {

        await addDoctor(doctorData);

         console.log(doctorData);
        alert("Doctor Added Successfully");


        navigate("/doctors");

    } catch (error) {

        console.error(error);

        alert("Unable to Add Doctor");
    }
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