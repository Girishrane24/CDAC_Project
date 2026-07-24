import "./AppointmentTable.css";

function AppointmentTable() {

    const appointments = [
        {
            patient: "John",
            doctor: "Dr. Smith",
            department: "Cardiology",
            time: "10:00 AM",
            status: "Completed"
        },
        {
            patient: "Emma",
            doctor: "Dr. Brown",
            department: "Neurology",
            time: "11:30 AM",
            status: "Pending"
        },
        {
            patient: "David",
            doctor: "Dr. Wilson",
            department: "Orthopedic",
            time: "1:00 PM",
            status: "Completed"
        },
        {
            patient: "Sophia",
            doctor: "Dr. Thomas",
            department: "Pediatrics",
            time: "3:30 PM",
            status: "Cancelled"
        }
    ];

    return (

        <div className="appointment-table">

            <div className="table-header">
                <h3>Today's Appointments</h3>

                <button>View All</button>
            </div>

            <table>

                <thead>

                    <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        appointments.map((item, index) => (

                            <tr key={index}>

                                <td>{item.patient}</td>

                                <td>{item.doctor}</td>

                                <td>{item.department}</td>

                                <td>{item.time}</td>

                                <td>

                                    <span
                                        className={
                                            item.status === "Completed"
                                                ? "completed"
                                                : item.status === "Pending"
                                                ? "pending"
                                                : "cancelled"
                                        }
                                    >
                                        {item.status}
                                    </span>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default AppointmentTable;