import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function AppointmentStatusChart({ appointments }) {

    const completed = appointments.filter(
        (a) => a.status === "Completed"
    ).length;

    const pending = appointments.filter(
        (a) => a.status === "Pending"
    ).length;

    const cancelled = appointments.filter(
        (a) => a.status === "Cancelled"
    ).length;

    const data = {

        labels: [
            "Completed",
            "Pending",
            "Cancelled",
        ],

        datasets: [
            {
                data: [
                    completed,
                    pending,
                    cancelled,
                ],

                backgroundColor: [
                    "#198754",
                    "#ffc107",
                    "#dc3545",
                ],

                borderWidth: 0,
            },
        ],
    };

    return (

        <div className="chart-card">

            <h3>Appointment Status</h3>
<div style={{ height: "440px" }}>
            <Doughnut
    data={data}
    options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%",
        plugins: {
            legend: {
                position: "top",
            },
        },
    }}
/>
</div>

        </div>

    );
}

export default AppointmentStatusChart;