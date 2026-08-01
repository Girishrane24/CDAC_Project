import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardCard from "../../components/dashboard/DashboardCard";
import AppointmentTable from "../../components/dashboard/AppointmentTable";

import { getPatients } from "../../services/patientServices";
import { getDoctors } from "../../services/doctorService";
import { getAppointments } from "../../services/appointmentService";
import { getLabs } from "../../services/labService";
import { getAllNurses } from "../../services/nurseService";
import { getLabTests } from "../../services/labTestService";
import billingService from "../../services/billingService";

import roomService from "../../services/roomService";
import bedService from "../../services/bedService";

import {
  FaUserPlus,
  FaCalendarPlus,
  FaUserMd,
  FaFlask,
  FaUserInjured,
  FaCalendarCheck,
  FaVial,
  FaUserNurse,
  FaHospital,
  FaRupeeSign,
  FaBed,
} from "react-icons/fa";

import "./Dashboard.css";
import RoomStatusChart from "../../components/dashboard/RoomStatusChart";
import AppointmentStatusChart from "../../components/dashboard/AppointmentStatusChart";
import RecentLabTests from "../../components/dashboard/RecentLabTests";
import BedSummary from "../../components/dashboard/BedSummary";
import RoomSummary from "../../components/dashboard/RoomSummary";
import RecentActivity from "../../components/dashboard/RecentActivity";

function Dashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  const [rooms, setRooms] = useState([]);
  const [beds, setBeds] = useState([]);
  const [labTests, setLabTests] = useState([]);

  const [dashboardData, setDashboardData] = useState({
    patients: 0,
    doctors: 0,
    appointments: 0,
    labs: 0,
    labTests: 0,
    nurses: 0,
    rooms: 0,
    beds: 0,
      revenue: 0
  });

  useEffect(() => {
    loadDashboard();
  }, []);

 
  const loadDashboard = async () => {
    try {
      const [
        patientRes,
        doctorRes,
        appointmentRes,
        labRes,
        nurseRes,
        roomRes,
        bedRes,
        labTestRes,
          billRes,
      ] = await Promise.all([
        getPatients(),
        getDoctors(),
        getAppointments(),
        getLabs(),
        getAllNurses(),
        roomService.getAllRooms(),
        bedService.getAllBeds(),
        getLabTests(),
         billingService.getAllBills(),
      ]);

const revenue = billRes.data
  .filter((bill) => bill.status === "Paid")
  .reduce(
    (sum, bill) => sum + Number(bill.totalAmount || 0),
    0
  );

      setAppointments(appointmentRes.data);
      setRooms(roomRes.data);
      setBeds(bedRes.data);
      setLabTests(labTestRes.data);

      setDashboardData({
        patients: patientRes.data.length,
        doctors: doctorRes.data.length,
        appointments: appointmentRes.data.length,
        labs: labRes.data.length,
        labTests: labTestRes.data.length,
        nurses: nurseRes.length,
        rooms: roomRes.data.length,
        beds: bedRes.data.length,
        revenue,
      });
    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  };

 

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Welcome back, Admin 👋</p>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/appointments/book")}
        >
          <FaCalendarPlus /> Add Appointment
        </button>
      </div>

      <div className="dashboard-cards">
        <DashboardCard
          title="Patients"
          value={dashboardData.patients}
          subtitle="Registered Patients"
          icon={<FaUserInjured />}
          color="#0d6efd"
        />

        <DashboardCard
          title="Doctors"
          value={dashboardData.doctors}
          subtitle="Available Doctors"
          icon={<FaUserMd />}
          color="#198754"
        />

        <DashboardCard
          title="Appointments"
          value={dashboardData.appointments}
          subtitle="Total Appointments"
          icon={<FaCalendarCheck />}
          color="#ffc107"
        />

        <DashboardCard
          title="Laboratories"
          value={dashboardData.labs}
          subtitle="Hospital Labs"
          icon={<FaFlask />}
          color="#20c997"
        />

        <DashboardCard
          title="Lab Tests"
          value={dashboardData.labTests}
          subtitle="Tests Conducted"
          icon={<FaVial />}
          color="#6610f2"
        />

        <DashboardCard
          title="Nurses"
          value={dashboardData.nurses}
          subtitle="Hospital Staff"
          icon={<FaUserNurse />}
          color="#fd7e14"
        />

        <DashboardCard
          title="Rooms"
          value={dashboardData.rooms}
          subtitle="Hospital Rooms"
          icon={<FaHospital />}
          color="#dc3545"
        />

        <DashboardCard
          title="Beds"
          value={dashboardData.beds}
          subtitle="Available Beds"
          icon={<FaBed />}
          color="#6f42c1"
        />

<DashboardCard
  title="Revenue"
  value={`₹${dashboardData.revenue.toLocaleString("en-IN")}`}
  subtitle="Total Revenue"
  icon={<FaRupeeSign />}
  color="#28a745"
/>


      </div>
      <div className="dashboard-actions-section">
        <h3 className="dashboard-section-title">Quick Actions</h3>

        <div className="dashboard-actions">
          <button
            className="action-btn"
            onClick={() => navigate("/patients/add")}
          >
            <FaUserPlus className="action-icon" />
            <span>Add Patient</span>
          </button>

          <button
            className="action-btn"
            onClick={() => navigate("/appointments/book")}
          >
            <FaCalendarPlus className="action-icon" />
            <span>Book Appointment</span>
          </button>

          <button
            className="action-btn"
            onClick={() => navigate("/doctors/add")}
          >
            <FaUserMd className="action-icon" />
            <span>Add Doctor</span>
          </button>

          <button
            className="action-btn"
            onClick={() => navigate("/laboratory/tests/add")}
          >
            <FaFlask className="action-icon" />
            <span>Add Lab Test</span>
          </button>
        </div>
      </div>
      <div className="dashboard-charts">
        <AppointmentStatusChart appointments={appointments} />
        <RoomStatusChart rooms={rooms} />
      </div>

      <div className="dashboard-bottom">
        <AppointmentTable />
      </div>

      <div className="dashboard-bottom">
        <RecentLabTests />
      </div>

      <div className="summary-container">
        <RoomSummary rooms={rooms} />
        <BedSummary beds={beds} />
      </div>

      <RecentActivity appointments={appointments} labTests={labTests} />
    </div>
  );
}

export default Dashboard;
