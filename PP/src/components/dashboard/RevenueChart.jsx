import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Line } from "react-chartjs-2";
import "./RevenueChart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

function RevenueChart() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

        datasets: [
            {
                label: "Revenue ($)",
                data: [12000, 18000, 15000, 25000, 22000, 29000, 35000],
                borderColor: "#0d6efd",
                backgroundColor: "rgba(13,110,253,0.15)",
                fill: true,
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,

        plugins: {
            legend: {
                display: true
            }
        }
    };

    return (
        <div className="chart-card">
            <h3>Revenue Overview</h3>

            <Line
                data={data}
                options={options}
            />
        </div>
    );
}

export default RevenueChart;