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

function RoomStatusChart({ rooms }) {

    const available = rooms.filter(
        (r) => r.status === "Available"
    ).length;

    const occupied = rooms.filter(
        (r) => r.status === "Occupied"
    ).length;

    const maintenance = rooms.filter(
        (r) => r.status === "Maintenance"
    ).length;

    const data = {

        labels: [
            "Available",
            "Occupied",
            "Maintenance",
        ],

        datasets: [
            {
                data: [
                    available,
                    occupied,
                    maintenance,
                ],

                backgroundColor: [
                    "#20c997",
                    "#0d6efd",
                    "#dc3545",
                ],

                borderWidth: 0,
            },
        ],
    };

    return (

        <div className="chart-card">

            <h3>Room Status</h3>

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

export default RoomStatusChart;