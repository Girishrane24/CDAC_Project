import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LabForm from "../../../components/laboratory/lab/LabForm";
import {
    getLabById,
    updateLab
} from "../../../services/labService";

function EditLab() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [lab, setLab] = useState({
        labId: "",
        labName: "",
        location: "",
        phone: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadLab();
    }, [id]);

    const loadLab = async () => {

        try {

            const res = await getLabById(id);

            setLab(res.data);

        } catch (error) {

            console.error("Error loading laboratory:", error);

            alert("Failed to load laboratory details.");

        } finally {

            setLoading(false);

        }

    };

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

            await updateLab(id, lab);

            alert("Laboratory Updated Successfully");

            navigate("/laboratory/labs");

        } catch (error) {

            console.error("Error updating laboratory:", error);

            alert("Failed to update laboratory.");

        }

    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Loading Laboratory...</h4>
            </div>
        );
    }

    return (

        <LabForm
            lab={lab}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText="Update Laboratory"
            isEdit={true}
            onCancel={() => navigate("/laboratory/labs")}
        />

    );
}

export default EditLab;