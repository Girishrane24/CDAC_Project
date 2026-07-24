import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import "./PatientChart.css";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function PatientChart() {

    const data = {

        labels: [
            "In Patients",
            "Out Patients",
            "Emergency"
        ],

        datasets: [
            {
                data: [420, 680, 130],

                backgroundColor: [
                    "#0d6efd",
                    "#20c997",
                    "#ffc107"
                ],

                borderWidth: 0
            }
        ]

    };

    const options = {

        responsive: true,

        plugins: {

            legend: {
                position: "bottom"
            }

        }

    };

    return (

        <div className="patient-chart">

            <h3>Patients Distribution</h3>

            <Doughnut
                data={data}
                options={options}
            />

        </div>

    );
}

export default PatientChart;