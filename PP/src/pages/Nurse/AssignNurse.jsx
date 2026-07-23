import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AssignNurse.css";

function AssignNurse() {

    const navigate = useNavigate();


    const [assignment, setAssignment] = useState({

        nurseId: "",
        patientId: "",
        roomNumber: "",
        shift: ""

    });


    const [nurses, setNurses] = useState([]);

    const [patients, setPatients] = useState([]);



    useEffect(() => {


        // Replace with API calls

        // axios.get("http://localhost:8080/api/nurses")
        // axios.get("http://localhost:8080/api/patients")


        setNurses([

            {
                id: 1,
                name: "Priya Sharma",
                department: "ICU"
            },

            {
                id: 2,
                name: "Sneha Patil",
                department: "Emergency"
            },

            {
                id: 3,
                name: "Anjali Deshmukh",
                department: "General Ward"
            }

        ]);



        setPatients([

            {
                id: 101,
                name: "Rahul Patil"
            },


            {
                id: 102,
                name: "Amit Sharma"
            },


            {
                id: 103,
                name: "Neha Kulkarni"
            }

        ]);


    }, []);





    const handleChange = (e) => {


        setAssignment({

            ...assignment,

            [e.target.name]: e.target.value

        });


    };






    const handleSubmit = (e) => {


        e.preventDefault();



        console.log("Nurse Assignment : ", assignment);



        // API call

        // axios.post(
        // "http://localhost:8080/api/nurses/assign",
        // assignment
        // )


        alert("Nurse Assigned Successfully");


        navigate("/nurses");


    };






    return (


        <div className="assign-container">


            <div className="assign-card">


                <h2>
                    👩‍⚕️ Assign Nurse To Patient
                </h2>




                <form onSubmit={handleSubmit}>



                    <div className="form-group">


                        <label>
                            Select Nurse
                        </label>



                        <select

                            name="nurseId"

                            value={assignment.nurseId}

                            onChange={handleChange}

                            required

                        >


                            <option value="">
                                Select Nurse
                            </option>



                            {
                                nurses.map((nurse)=>(

                                    <option

                                        key={nurse.id}

                                        value={nurse.id}

                                    >

                                        {nurse.name} 
                                        {" - "}
                                        {nurse.department}

                                    </option>

                                ))
                            }


                        </select>


                    </div>







                    <div className="form-group">


                        <label>
                            Select Patient
                        </label>



                        <select

                            name="patientId"

                            value={assignment.patientId}

                            onChange={handleChange}

                            required

                        >


                            <option value="">
                                Select Patient
                            </option>



                            {
                                patients.map((patient)=>(

                                    <option

                                        key={patient.id}

                                        value={patient.id}

                                    >

                                        {patient.name}

                                    </option>

                                ))

                            }


                        </select>



                    </div>







                    <div className="form-group">


                        <label>
                            Room Number
                        </label>


                        <input

                            type="text"

                            name="roomNumber"

                            value={assignment.roomNumber}

                            onChange={handleChange}

                            placeholder="Example ICU-05"

                            required

                        />


                    </div>








                    <div className="form-group">


                        <label>
                            Shift
                        </label>



                        <select

                            name="shift"

                            value={assignment.shift}

                            onChange={handleChange}

                            required

                        >

                            <option value="">
                                Select Shift
                            </option>


                            <option>
                                Morning
                            </option>


                            <option>
                                Evening
                            </option>


                            <option>
                                Night
                            </option>


                        </select>



                    </div>







                    <div className="button-section">


                        <button

                            type="submit"

                            className="assign-btn"

                        >

                            Assign Nurse

                        </button>




                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={() => navigate("/nurses")}

                        >

                            Cancel

                        </button>



                    </div>



                </form>



            </div>



        </div>


    );

}


export default AssignNurse;