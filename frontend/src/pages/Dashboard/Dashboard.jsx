import "./Dashboard.css";

import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import PatientChart from "../../components/dashboard/PatientChart";
import AppointmentTable from "../../components/dashboard/AppointmentTable";

function Dashboard() {
    return (
        <div className="dashboard">

            <div className="dashboard-header">

                <div className="dashboard-title">
                    <h1>Dashboard</h1>
                    <p>Welcome back, Admin 👋</p>
                </div>

                <button className="add-btn">
                    + Add Appointment
                </button>

            </div>

            <div className="dashboard-cards">
                {/* DashboardCard components */}
            </div>

            <div className="dashboard-middle">
                <RevenueChart />
                <PatientChart />
            </div>

            <AppointmentTable />

        </div>
    );
}

export default Dashboard;