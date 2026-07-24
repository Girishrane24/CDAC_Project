import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NurseDetails.css";

function NurseDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [nurse, setNurse] = useState(null);


    useEffect(() => {


        // Replace with API call
        // axios.get(`http://localhost:8080/api/nurses/${id}`)


        const nurseData = {

            id: id,
            name: "Priya Sharma",
            email: "priya@gmail.com",
            phone: "9876543210",
            gender: "Female",
            qualification: "B.Sc Nursing",
            experience: "3 Years",
            department: "ICU",
            shift: "Morning",
            joiningDate: "20-07-2026",
            availabilityStatus: "Available",
            assignedPatient: "Rahul Patil",
            roomNumber: "ICU-05"

        };


        setNurse(nurseData);


    }, [id]);




    if(!nurse){

        return (

            <div className="loading">

                Loading Nurse Details...

            </div>

        );

    }




    return (

        <div className="nurse-details-container">


            <div className="details-card">
 

                <div className="details-header">


                    <div className="profile-icon">

                        👩‍⚕️

                    </div>


                    <div>

                        <h2>
                            {nurse.name}
                        </h2>

                        <p>
                            Nurse ID : {nurse.id}
                        </p>

                    </div>


                </div>





                <div className="details-body">


                    <div className="detail-item">

                        <label>Email</label>

                        <span>
                            {nurse.email}
                        </span>

                    </div>



                    <div className="detail-item">

                        <label>Phone</label>

                        <span>
                            {nurse.phone}
                        </span>

                    </div>



                    <div className="detail-item">

                        <label>Gender</label>

                        <span>
                            {nurse.gender}
                        </span>

                    </div>




                    <div className="detail-item">

                        <label>Qualification</label>

                        <span>
                            {nurse.qualification}
                        </span>

                    </div>




                    <div className="detail-item">

                        <label>Experience</label>

                        <span>
                            {nurse.experience}
                        </span>

                    </div>





                    <div className="detail-item">

                        <label>Department</label>

                        <span>
                            {nurse.department}
                        </span>

                    </div>





                    <div className="detail-item">

                        <label>Shift</label>

                        <span>
                            {nurse.shift}
                        </span>

                    </div>



                    <div className="detail-item">

                        <label>Status</label>


                        <span 
                          className={
                            nurse.availabilityStatus === "Available"
                            ? "status-available"
                            : "status-assigned"
                          }
                        >

                            {nurse.availabilityStatus}

                        </span>


                    </div>



                </div>





                <div className="assignment-section">


                    <h3>
                        Patient Assignment
                    </h3>


                    <div className="assignment-card">


                        <p>
                            <strong>Patient Name:</strong> 
                            {" "}
                            {nurse.assignedPatient}
                        </p>


                        <p>
                            <strong>Room Number:</strong>
                            {" "}
                            {nurse.roomNumber}
                        </p>


                    </div>


                </div>






                <div className="action-buttons">


                    <button

                        className="edit-btn"

                        onClick={() => navigate(`/nurses/edit/${id}`)}

                    >

                        ✏️ Edit

                    </button>




                    <button

                        className="back-btn"

                        onClick={() => navigate("/nurses")}

                    >

                        ← Back

                    </button>


                </div>



            </div>



        </div>

    );

}


export default NurseDetails;