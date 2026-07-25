import "./DoctorList.css";
import DoctorTable from "../../components/doctor/DoctorTable";
import { Link } from "react-router-dom";

function DoctorList() {
  const doctors = [
    {
      id: 101,
      name: "Dr. Rajesh Sharma",
      specialization: "Cardiology",
      experience: 10,
      phone: "9876543210",
      email: "rajesh@gmail.com",
      status: "Available",
    },
    {
      id: 102,
      name: "Dr. Priya Patel",
      specialization: "Neurology",
      experience: 8,
      phone: "9876543211",
      email: "priya@gmail.com",
      status: "Unavailable",
    },
    {
      id: 103,
      name: "Dr. Amit Verma",
      specialization: "Orthopedics",
      experience: 12,
      phone: "9876543212",
      email: "amit@gmail.com",
      status: "Available",
    },
    {
      id: 104,
      name: "Dr. Sneha Joshi",
      specialization: "Dermatology",
      experience: 6,
      phone: "9876543213",
      email: "sneha@gmail.com",
      status: "Available",
    },
  ];

  return (
    <div className="doctor-list-page">

      <div className="doctor-header">

        <div>
          <h2>Doctors</h2>
          <p>Manage hospital doctors</p>
        </div>

        <Link to="/doctors/add" className="add-doctor-btn">
          + Add Doctor
        </Link>

      </div>

      <DoctorTable doctors={doctors} />

    </div>
  );
}

export default DoctorList;