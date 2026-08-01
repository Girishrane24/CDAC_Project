import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNurseById, updateNurse } from "../../services/nurseService";
import "./EditNurse.css";

function EditNurse() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nurse, setNurse] = useState({
        nurseId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        qualification: "",
        experience: "",
        department: "",
        shift: "",
        joiningDate: "",
        availabilityStatus: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNurse();
    }, [id]);

    const loadNurse = async () => {
        try {
            const res = await getNurseById(id);

            // If your service returns axios response
            const data = res.data ? res.data : res;

            setNurse({
                nurseId: data.nurseId || "",
                name: data.name || "",
                email: data.email || "",
                phone: data.phone || "",
                gender: data.gender || "",
                qualification: data.qualification || "",
                experience: data.experience || "",
                department: data.department || "",
                shift: data.shift || "",
                joiningDate: data.joiningDate
                    ? data.joiningDate.substring(0, 10)
                    : "",
                availabilityStatus: data.availabilityStatus || "",
            });
        } catch (error) {
            console.error("Error fetching nurse:", error);
            alert("Failed to load nurse details.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNurse((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateNurse(id, nurse);

            alert("Nurse Updated Successfully");

            navigate("/nurses");
        } catch (error) {
            console.error(error);
            alert("Failed to update nurse.");
        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h4>Loading Nurse Details...</h4>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">

                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">
                        Edit Nurse
                    </h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            {/* Nurse ID */}

                            {/* <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Nurse ID
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={nurse.nurseId}
                                    disabled
                                />
                            </div> */}

                            {/* Name */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={nurse.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={nurse.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Phone */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={nurse.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Gender */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Gender
                                </label>

                                <select
                                    className="form-select"
                                    name="gender"
                                    value={nurse.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* Qualification */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Qualification
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="qualification"
                                    value={nurse.qualification}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Experience */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Experience
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="experience"
                                    value={nurse.experience}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Department */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Department
                                </label>

                                <select
                                    className="form-select"
                                    name="department"
                                    value={nurse.department}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select Department
                                    </option>

                                    <option value="ICU">
                                        ICU
                                    </option>

                                    <option value="Emergency">
                                        Emergency
                                    </option>

                                    <option value="General Ward">
                                        General Ward
                                    </option>

                                    <option value="Operation Theatre">
                                        Operation Theatre
                                    </option>
                                </select>
                            </div>

                            {/* Shift */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Shift
                                </label>

                                <select
                                    className="form-select"
                                    name="shift"
                                    value={nurse.shift}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select Shift
                                    </option>

                                    <option value="Morning">
                                        Morning
                                    </option>

                                    <option value="Evening">
                                        Evening
                                    </option>

                                    <option value="Night">
                                        Night
                                    </option>
                                </select>
                            </div>

                            {/* Joining Date */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Joining Date
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                    name="joiningDate"
                                    value={nurse.joiningDate}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Status */}

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Availability Status
                                </label>

                                <select
                                    className="form-select"
                                    name="availabilityStatus"
                                    value={nurse.availabilityStatus}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select Status
                                    </option>

                                    <option value="Available">
                                        Available
                                    </option>

                                    <option value="Assigned">
                                        Assigned
                                    </option>

                                    <option value="Leave">
                                        Leave
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div className="text-end mt-4">

                            <button
                                type="button"
                                className="btn btn-secondary me-2"
                                onClick={() => navigate("/nurses")}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Update Nurse
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}

export default EditNurse;