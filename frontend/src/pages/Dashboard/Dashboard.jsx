import { useEffect, useState } from "react";
import "./Dashboard.css";

import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import PatientChart from "../../components/dashboard/PatientChart";
import AppointmentTable from "../../components/dashboard/AppointmentTable";
import { api } from "../../services/api";

function Dashboard() {
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getDashboardSummary()
            .then((data) => {
                setSummary(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load dashboard data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading Dashboard...</div>;

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
                <DashboardCard title="Total Patients" value={summary?.totalPatients || 0} />
                <DashboardCard title="Total Doctors" value={summary?.totalDoctors || 0} />
                <DashboardCard title="Total Appointments" value={summary?.totalAppointments || 0} />
                <DashboardCard title="Pending Appointments" value={summary?.pendingAppointments || 0} />
            </div>

            <div className="dashboard-middle">
                <RevenueChart />
                <PatientChart />
            </div>

            <AppointmentTable appointments={summary?.recentAppointments || []} />
        </div>
    );
}

export default Dashboard;