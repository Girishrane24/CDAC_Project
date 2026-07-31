import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNurseById } from "../../services/nurseService";
import "./NurseDetails.css";

function NurseDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nurse, setNurse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNurse();
    }, [id]);

    const loadNurse = async () => {
        try {
            const res = await getNurseById(id);

            // Works whether your service returns axios response or data directly
            const data = res.data ? res.data : res;

            setNurse(data);
        } catch (error) {
            console.error("Error Fetching Nurse:", error);
            alert("Failed to load nurse details");
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Available":
                return "bg-success";
            case "Assigned":
                return "bg-warning text-dark";
            case "Leave":
                return "bg-danger";
            default:
                return "bg-secondary";
        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h4>Loading Nurse Details...</h4>
            </div>
        );
    }

    if (!nurse) {
        return (
            <div className="container mt-5 text-center">
                <h4>Nurse Not Found</h4>
            </div>
        );
    }

    return (
        <div className="container mt-4">

            <div className="card shadow-lg border-0">

                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">
                        Nurse Details
                    </h3>
                </div>

                <div className="card-body">

                    <div className="row">

                        {/* Left Side */}

                        <div className="col-md-6">

                            <h5 className="text-primary mb-3">
                                Personal Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th width="40%">Nurse ID</th>
                                        <td>{nurse.nurseId}</td>
                                    </tr>

                                    <tr>
                                        <th>Name</th>
                                        <td>{nurse.name}</td>
                                    </tr>

                                    <tr>
                                        <th>Email</th>
                                        <td>{nurse.email}</td>
                                    </tr>

                                    <tr>
                                        <th>Phone</th>
                                        <td>{nurse.phone}</td>
                                    </tr>

                                    <tr>
                                        <th>Gender</th>
                                        <td>{nurse.gender}</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        {/* Right Side */}

                        <div className="col-md-6">

                            <h5 className="text-primary mb-3">
                                Professional Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th width="40%">Qualification</th>
                                        <td>{nurse.qualification}</td>
                                    </tr>

                                    <tr>
                                        <th>Experience</th>
                                        <td>{nurse.experience}</td>
                                    </tr>

                                    <tr>
                                        <th>Department</th>
                                        <td>{nurse.department}</td>
                                    </tr>

                                    <tr>
                                        <th>Shift</th>
                                        <td>{nurse.shift}</td>
                                    </tr>

                                    <tr>
                                        <th>Joining Date</th>
                                        <td>
                                            {formatDate(nurse.joiningDate)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>

                                        <td>

                                            <span
                                                className={`badge ${getStatusClass(
                                                    nurse.availabilityStatus
                                                )}`}
                                            >
                                                {nurse.availabilityStatus}
                                            </span>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div className="text-end mt-4">

                        <button
                            className="btn btn-warning me-2"
                            onClick={() =>
                                navigate(`/nurses/edit/${nurse.nurseId}`)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/nurses")}
                        >
                            Back
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default NurseDetails;