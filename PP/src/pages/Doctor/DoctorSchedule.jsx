import "./DoctorSchedule.css";

function DoctorSchedule() {

    const doctor = {
        id: 101,
        name: "Dr. Rajesh Sharma",
        specialization: "Cardiology",
        room: "Room 204"
    };

    const schedule = [
        {
            day: "Monday",
            morning: "09:00 AM - 01:00 PM",
            evening: "05:00 PM - 08:00 PM",
            status: "Available"
        },
        {
            day: "Tuesday",
            morning: "09:00 AM - 01:00 PM",
            evening: "05:00 PM - 08:00 PM",
            status: "Available"
        },
        {
            day: "Wednesday",
            morning: "-",
            evening: "-",
            status: "Leave"
        },
        {
            day: "Thursday",
            morning: "09:00 AM - 01:00 PM",
            evening: "05:00 PM - 08:00 PM",
            status: "Available"
        },
        {
            day: "Friday",
            morning: "09:00 AM - 01:00 PM",
            evening: "05:00 PM - 08:00 PM",
            status: "Available"
        },
        {
            day: "Saturday",
            morning: "10:00 AM - 01:00 PM",
            evening: "-",
            status: "Half Day"
        },
        {
            day: "Sunday",
            morning: "-",
            evening: "-",
            status: "Holiday"
        }
    ];

    return (
        <div className="doctor-schedule-page">

            <div className="schedule-header">

                <h2>Doctor Schedule</h2>

                <p>Weekly OPD Schedule</p>

            </div>

            <div className="doctor-summary">

                <div>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialization}</p>
                </div>

                <div>
                    <strong>Doctor ID</strong>
                    <p>{doctor.id}</p>
                </div>

                <div>
                    <strong>Consultation Room</strong>
                    <p>{doctor.room}</p>
                </div>

            </div>

            <div className="schedule-table-container">

                <table className="schedule-table">

                    <thead>

                        <tr>
                            <th>Day</th>
                            <th>Morning Shift</th>
                            <th>Evening Shift</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {schedule.map((item, index) => (

                            <tr key={index}>

                                <td>{item.day}</td>

                                <td>{item.morning}</td>

                                <td>{item.evening}</td>

                                <td>

                                    <span
                                        className={
                                            item.status === "Available"
                                                ? "status available"
                                                : item.status === "Half Day"
                                                ? "status halfday"
                                                : "status leave"
                                        }
                                    >
                                        {item.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default DoctorSchedule;