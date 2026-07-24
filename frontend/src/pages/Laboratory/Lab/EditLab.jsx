import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./EditLab.css";
import LabForm from "../../../components/laboratory/lab/LabForm";

function EditLab() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [lab, setLab] = useState({
        labId: "",
        labName: "",
        location: "",
        phone: ""
    });

    useEffect(() => {
        loadLab();
    }, []);

    const loadLab = () => {

        // Replace with Spring Boot API

        const data = {
            labId: id,
            labName: "Central Pathology Lab",
            location: "First Floor",
            phone: "9876543210"
        };

        setLab(data);
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setLab({
            ...lab,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        // API Call

        console.log("Updated Lab:", lab);

        alert("Laboratory Updated Successfully");

        navigate("/laboratory/labs");

    };

    return (

           <LabForm
      lab={lab}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="Update"
      isEdit={true}
      onCancel={() => navigate("/laboratory/labs")}
    />

    );

}

export default EditLab;