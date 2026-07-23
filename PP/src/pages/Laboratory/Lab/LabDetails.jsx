
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LabDetails.css";

function LabDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [lab, setLab] = useState({});

    useEffect(() => {
        loadLabDetails();
    }, []);

    const loadLabDetails = () => {

        // Replace with Spring Boot API

        const data = {

            labId: id,

            labName: "Central Pathology Lab",

            location: "First Floor",

            phone: "9876543210"

        };

        setLab(data);

    };

    return (

        <div className="lab-details-container">

            <div className="details-card">

                <div className="details-header">

                    <h2>Laboratory Details</h2>

                </div>

                <div className="details-body">

                    <div className="detail-row">

                        <span>Lab ID</span>

                        <p>{lab.labId}</p>

                    </div>

                    <div className="detail-row">

                        <span>Laboratory Name</span>

                        <p>{lab.labName}</p>

                    </div>

                    <div className="detail-row">

                        <span>Location</span>

                        <p>{lab.location}</p>

                    </div>

                    <div className="detail-row">

                        <span>Phone Number</span>

                        <p>{lab.phone}</p>

                    </div>

                </div>

                <div className="details-footer">

                    <button
                        className="edit-btn"
                        onClick={() =>
                            navigate(`/laboratory/labs/edit/${lab.labId}`)
                        }
                    >
                        Edit
                    </button>

                    <button
                        className="back-btn"
                        onClick={() => navigate("/laboratory/labs")}
                    >
                        Back
                    </button>

                </div>

            </div>

        </div>

    );

}

export default LabDetails;