import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabForm from "../../../components/laboratory/lab/LabForm";
// import "./AddLab.css";


function AddLab() {

    const navigate = useNavigate();

    const [lab, setLab] = useState({

        labId: "",

        labName: "",

        location: "",

        phone: ""

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setLab({

            ...lab,

            [name]: value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(lab);

        // Spring Boot API Call

        alert("Laboratory Added Successfully");

        navigate("/laboratory/labs");

    };

    return (

       <LabForm
      lab={lab}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="Save"
      onCancel={() => navigate("/laboratory/labs")}
    />

    );

}

export default AddLab;