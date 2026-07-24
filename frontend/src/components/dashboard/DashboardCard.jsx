// import "./Dashboard.css";

// function Dashboard() {
//     return (
//         <div className="dashboard">

//             {/* Page Heading */}
//             <div className="dashboard-header">
//                 <div>
//                     <h2>Dashboard</h2>
//                     <p>Welcome back, Admin 👋</p>
//                 </div>

//                 <button className="add-btn">
//                     + Add Appointment
//                 </button>
//             </div>

//             {/* Cards */}
//             <div className="dashboard-cards">

//                 <div className="card patients">
//                     <div className="icon">👨‍⚕️</div>
//                     <h3>Total Patients</h3>
//                     <h1>1,248</h1>
//                     <p>+12% this month</p>
//                 </div>

//                 <div className="card doctors">
//                     <div className="icon">🩺</div>
//                     <h3>Total Doctors</h3>
//                     <h1>56</h1>
//                     <p>5 New Joined</p>
//                 </div>

//                 <div className="card appointments">
//                     <div className="icon">📅</div>
//                     <h3>Appointments</h3>
//                     <h1>325</h1>
//                     <p>Today</p>
//                 </div>

//                 <div className="card revenue">
//                     <div className="icon">💰</div>
//                     <h3>Revenue</h3>
//                     <h1>$25,480</h1>
//                     <p>+8.4%</p>
//                 </div>

//             </div>

//             {/* Charts Section */}

//             <div className="dashboard-middle">

//                 <div className="chart-box">
//                     <h3>Patient Statistics</h3>

//                     <div className="fake-chart">
//                         <div style={{ height: "60%" }}></div>
//                         <div style={{ height: "90%" }}></div>
//                         <div style={{ height: "45%" }}></div>
//                         <div style={{ height: "70%" }}></div>
//                         <div style={{ height: "95%" }}></div>
//                         <div style={{ height: "55%" }}></div>
//                         <div style={{ height: "80%" }}></div>
//                     </div>

//                 </div>

//                 <div className="activity-box">

//                     <h3>Recent Activities</h3>

//                     <ul>
//                         <li>✔ Patient John admitted.</li>
//                         <li>✔ Dr. Smith joined today.</li>
//                         <li>✔ Appointment booked.</li>
//                         <li>✔ Lab report uploaded.</li>
//                         <li>✔ Payment received.</li>
//                     </ul>

//                 </div>

//             </div>

//             {/* Appointment Table */}

//             <div className="table-box">

//                 <h3>Today's Appointments</h3>

//                 <table>

//                     <thead>
//                         <tr>
//                             <th>Patient</th>
//                             <th>Doctor</th>
//                             <th>Department</th>
//                             <th>Time</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>

//                     <tbody>

//                         <tr>
//                             <td>John</td>
//                             <td>Dr. Smith</td>
//                             <td>Cardiology</td>
//                             <td>10:00 AM</td>
//                             <td><span className="completed">Completed</span></td>
//                         </tr>

//                         <tr>
//                             <td>Emma</td>
//                             <td>Dr. Brown</td>
//                             <td>Neurology</td>
//                             <td>11:30 AM</td>
//                             <td><span className="pending">Pending</span></td>
//                         </tr>

//                         <tr>
//                             <td>David</td>
//                             <td>Dr. Wilson</td>
//                             <td>Orthopedic</td>
//                             <td>1:00 PM</td>
//                             <td><span className="completed">Completed</span></td>
//                         </tr>

//                         <tr>
//                             <td>Sophia</td>
//                             <td>Dr. Thomas</td>
//                             <td>Pediatric</td>
//                             <td>3:30 PM</td>
//                             <td><span className="cancelled">Cancelled</span></td>
//                         </tr>

//                     </tbody>

//                 </table>

//             </div>

//         </div>
//     );
// }

// export default Dashboard;

import "./DashboardCard.css";

function DashboardCard({
    title,
    value,
    subtitle,
    icon,
    color
}) {
    return (
        <div
            className="dashboard-card"
            style={{ borderLeft: `5px solid ${color}` }}
        >
            <div className="dashboard-icon">
                {icon}
            </div>

            <h4>{title}</h4>

            <h2>{value}</h2>

            <p>{subtitle}</p>
        </div>
    );
}

export default DashboardCard;