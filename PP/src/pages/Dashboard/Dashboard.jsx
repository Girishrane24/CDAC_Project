import { useEffect, useState } from "react";
import "./Dashboard.css";

import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import PatientChart from "../../components/dashboard/PatientChart";
import AppointmentTable from "../../components/dashboard/AppointmentTable";

function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/dashboard")
            .then((res) => res.json())
            .then((data) => {
                setDashboardData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching dashboard data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading dashboard...</div>;
    if (!dashboardData) return <div>Failed to load data.</div>;

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>Dashboard</h1>
                    <p>Welcome back, Admin 👋</p>
                </div>

                <button className="add-btn">+ Add Appointment</button>
            </div>

            <div className="dashboard-cards">
                <DashboardCard title="Total Patients" value={dashboardData.metrics.totalPatients} />
                <DashboardCard title="Total Appointments" value={dashboardData.metrics.totalAppointments} />
                <DashboardCard title="Total Revenue" value={`$${dashboardData.metrics.totalRevenue}`} />
                <DashboardCard title="Pending Appointments" value={dashboardData.metrics.pendingAppointments} />
            </div>

            <div className="dashboard-middle">
                <RevenueChart data={dashboardData.revenueData} />
                <PatientChart data={dashboardData.patientData} />
            </div>

            <AppointmentTable appointments={dashboardData.recentAppointments} />
        </div>
    );
}

export default Dashboard;