import "./DoctorList.css";
import DoctorTable from "../../components/doctor/DoctorTable";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoctors } from "../../services/doctorService";

function DoctorList() {
 const [doctors, setDoctors] = useState([]);

useEffect(() => {

    loadDoctors();

}, []);

const loadDoctors = async () => {

    try {

        const response = await getDoctors();

        setDoctors(response.data);

    } catch (err) {

        console.log(err);

    }

};

  return (
    <div className="doctor-list-page">

      <div className="doctor-header">

        <div>
          <h2>Doctors</h2>
          <p>Manage hospital doctors</p>
        </div>

 <Link to="/doctors/schedule" className="schedule-doctor-btn">
          Doctor Schedule 
        </Link>
        <Link to="/doctors/add" className="add-doctor-btn">
          + Add Doctor
        </Link>


      </div>

      <DoctorTable doctors={doctors} />

    </div>
  );
}

export default DoctorList;