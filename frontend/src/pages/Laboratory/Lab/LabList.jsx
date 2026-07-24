import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LabList.css";

function LabList() {

    const navigate = useNavigate();

    const [labs, setLabs] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        loadLabs();
    }, []);

    const loadLabs = () => {

        // Replace with Spring Boot API

        const data = [

            {
                labId: "LAB001",
                labName: "Central Pathology Lab",
                location: "First Floor",
                phone: "9876543210"
            },

            {
                labId: "LAB002",
                labName: "Radiology Lab",
                location: "Ground Floor",
                phone: "9988776655"
            },

            {
                labId: "LAB003",
                labName: "Blood Bank Lab",
                location: "Second Floor",
                phone: "9123456789"
            }

        ];

        setLabs(data);

    };

    const deleteLab = (id) => {

        if (window.confirm("Delete this Laboratory?")) {

            setLabs(
                labs.filter(
                    lab => lab.labId !== id
                )
            );

            alert("Laboratory Deleted Successfully");

        }

    };

    const filteredLabs = labs.filter(lab =>

        lab.labId.toLowerCase().includes(search.toLowerCase()) ||

        lab.labName.toLowerCase().includes(search.toLowerCase()) ||

        lab.location.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <div className="lab-container">

            <div className="lab-header">

                <h2>Laboratory List</h2>

                <button
                    onClick={() => navigate("/laboratory/labs/add")}
                >
                    + Add Laboratory
                </button>

            </div>

            <div className="search-box">

                <input

                    type="text"

                    placeholder="Search Laboratory..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Lab ID</th>

                        <th>Laboratory Name</th>

                        <th>Location</th>

                        <th>Phone</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        filteredLabs.length === 0 ?

                            (

                                <tr>

                                    <td colSpan="5">

                                        No Laboratories Found

                                    </td>

                                </tr>

                            )

                            :

                            filteredLabs.map(lab => (

                                <tr key={lab.labId}>

                                    <td>{lab.labId}</td>

                                    <td>{lab.labName}</td>

                                    <td>{lab.location}</td>

                                    <td>{lab.phone}</td>

                                    <td>

                                        <button

                                            className="view-btn"

                                            onClick={() => navigate(`/laboratory/labs/details/${lab.labId}`)}

                                        >

                                            View

                                        </button>

                                        <button

                                            className="edit-btn"

                                            onClick={() => navigate(`/laboratory/labs/edit/${lab.labId}`)}

                                        >

                                            Edit

                                        </button>

                                        <button

                                            className="delete-btn"

                                            onClick={() => deleteLab(lab.labId)}

                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default LabList;