import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabForm from "../../../components/laboratory/lab/LabForm";
import { addLab } from "../../../services/labService";

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

        setLab((prev) => ({

            ...prev,

            [name]: value

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addLab(lab);

            alert("Laboratory Added Successfully");

            navigate("/laboratory/labs");

        } catch (error) {

            console.error("Error adding laboratory:", error);

            alert("Failed to add laboratory.");

        }

    };

    return (

        <LabForm
            lab={lab}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText="Save Laboratory"
            isEdit={false}
            onCancel={() => navigate("/laboratory/labs")}
        />

    );

}

export default AddLab;