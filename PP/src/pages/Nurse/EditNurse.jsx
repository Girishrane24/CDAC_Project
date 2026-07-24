import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditNurse.css";

function EditNurse() {

  const { id } = useParams();
  const navigate = useNavigate();


  const [nurse, setNurse] = useState({

    name: "",
    email: "",
    phone: "",
    gender: "",
    qualification: "",
    experience: "",
    department: "",
    shift: "",
    joiningDate: "",
    availabilityStatus: ""

  });



  useEffect(() => {


    // Replace with API call
    // axios.get(`http://localhost:8080/api/nurses/${id}`)


    const nurseData = {

      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876543210",
      gender: "Female",
      qualification: "B.Sc Nursing",
      experience: 3,
      department: "ICU",
      shift: "Morning",
      joiningDate: "2026-07-20",
      availabilityStatus: "Available"

    };


    setNurse(nurseData);


  }, [id]);




  const handleChange = (e) => {


    setNurse({

      ...nurse,

      [e.target.name]: e.target.value

    });


  };





  const handleSubmit = (e) => {


    e.preventDefault();


    console.log("Updated Nurse :", nurse);


    // API PUT call
    // axios.put(`http://localhost:8080/api/nurses/${id}`, nurse)


    alert("Nurse Updated Successfully");


    navigate("/nurses");


  };





  return (

    <div className="edit-nurse-container">


      <div className="edit-form-card">


        <h2>
          ✏️ Edit Nurse
        </h2>



        <form onSubmit={handleSubmit}>


          <div className="form-row">


            <div className="form-group">

              <label>Name</label>

              <input

                type="text"

                name="name"

                value={nurse.name}

                onChange={handleChange}

                required

              />

            </div>




            <div className="form-group">

              <label>Email</label>

              <input

                type="email"

                name="email"

                value={nurse.email}

                onChange={handleChange}

                required

              />

            </div>


          </div>





          <div className="form-row">


            <div className="form-group">

              <label>Phone</label>


              <input

                type="text"

                name="phone"

                value={nurse.phone}

                onChange={handleChange}

                required

              />


            </div>



            <div className="form-group">


              <label>Gender</label>


              <select

                name="gender"

                value={nurse.gender}

                onChange={handleChange}

              >

                <option>
                  Male
                </option>

                <option>
                  Female
                </option>

                <option>
                  Other
                </option>


              </select>


            </div>


          </div>





          <div className="form-row">


            <div className="form-group">


              <label>
                Qualification
              </label>


              <input

                type="text"

                name="qualification"

                value={nurse.qualification}

                onChange={handleChange}

                required

              />


            </div>





            <div className="form-group">


              <label>
                Experience
              </label>


              <input

                type="number"

                name="experience"

                value={nurse.experience}

                onChange={handleChange}

                required

              />


            </div>


          </div>







          <div className="form-row">


            <div className="form-group">


              <label>
                Department
              </label>


              <select

                name="department"

                value={nurse.department}

                onChange={handleChange}

              >


                <option>
                  ICU
                </option>


                <option>
                  Emergency
                </option>


                <option>
                  General Ward
                </option>


                <option>
                  Operation Theatre
                </option>


              </select>


            </div>





            <div className="form-group">


              <label>
                Shift
              </label>


              <select

                name="shift"

                value={nurse.shift}

                onChange={handleChange}

              >


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


          </div>







          <div className="form-row">


            <div className="form-group">


              <label>
                Joining Date
              </label>


              <input

                type="date"

                name="joiningDate"

                value={nurse.joiningDate}

                onChange={handleChange}

              />


            </div>





            <div className="form-group">


              <label>
                Status
              </label>


              <select

                name="availabilityStatus"

                value={nurse.availabilityStatus}

                onChange={handleChange}

              >


                <option>
                  Available
                </option>


                <option>
                  Assigned
                </option>


                <option>
                  Leave
                </option>


              </select>


            </div>


          </div>







          <div className="button-section">


            <button 
              type="submit"
              className="update-btn"
            >

              Update Nurse

            </button>




            <button

              type="button"

              className="back-btn"

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


export default EditNurse;