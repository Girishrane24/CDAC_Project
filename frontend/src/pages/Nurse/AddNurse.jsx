import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNurse } from "../../services/nurseService";
import "./AddNurse.css";

function AddNurse() {

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
    availabilityStatus: "Available"

  });


  const handleChange = (e) => {

    setNurse({

      ...nurse,

      [e.target.name]: e.target.value

    });

  };


 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    console.log("Nurse Data :", nurse);

    const response = await addNurse(nurse);

    console.log("Nurse Added:", response);

    alert("Nurse Added Successfully");

    navigate("/nurses");

  } catch (error) {

    console.error(
      "Error Adding Nurse:",
      error.response?.data || error.message
    );

    alert("Failed to add nurse");

  }

};


  return (

    <div className="add-nurse-container">


      <div className="form-card">


        <h2>👩‍⚕️ Add New Nurse</h2>


        <form onSubmit={handleSubmit}>


          <div className="form-row">


            <div className="form-group">

              <label>Name</label>

              <input

                type="text"

                name="name"

                value={nurse.name}

                onChange={handleChange}

                placeholder="Enter nurse name"

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

                placeholder="Enter email"

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

                placeholder="Enter phone number"

                required

              />

            </div>



            <div className="form-group">

              <label>Gender</label>


              <select

                name="gender"

                value={nurse.gender}

                onChange={handleChange}

                required

              >

                <option value="">
                  Select Gender
                </option>

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

                placeholder="B.Sc Nursing / GNM"

                required

              />


            </div>




            <div className="form-group">


              <label>
                Experience (Years)
              </label>


              <input

                type="number"

                name="experience"

                value={nurse.experience}

                onChange={handleChange}

                placeholder="Experience"

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

                required

              >

                <option value="">
                  Select Department
                </option>


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


                <option>
                  Pediatric
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

                required

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
              className="save-btn"
            >

              Save Nurse

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


export default AddNurse;