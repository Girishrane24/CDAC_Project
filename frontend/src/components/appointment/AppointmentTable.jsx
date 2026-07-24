import { Link } from "react-router-dom";
import "./AppointmentTable.css";

function AppointmentTable({ appointments }) {

    const getStatusColor = (status) => {

        switch (status) {

            case "Confirmed":
                return "success";

            case "Pending":
                return "warning";

            case "Completed":
                return "primary";

            case "Cancelled":
                return "danger";

            default:
                return "secondary";
        }
    };

    return (

        <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

                <thead className="table-primary">

                    <tr>

                        <th>Appointment ID</th>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {appointments.length === 0 ? (

                        <tr>

                            <td colSpan="8" className="text-center">

                                No Appointments Found

                            </td>

                        </tr>

                    ) : (

                        appointments.map((appointment) => (

                            <tr key={appointment.id}>

                                <td>{appointment.id}</td>

                                <td>{appointment.patient}</td>

                                <td>{appointment.doctor}</td>

                                <td>{appointment.department}</td>

                                <td>{appointment.date}</td>

                                <td>{appointment.time}</td>

                                <td>

                                    <span
                                        className={`badge bg-${getStatusColor(
                                            appointment.status
                                        )}`}
                                    >
                                        {appointment.status}
                                    </span>

                                </td>

                                <td>

                                    <Link
                                        to={`/appointments/details/${appointment.id}`}
                                        className="btn btn-info btn-sm me-2"
                                    >
                                        View
                                    </Link>

                                    <Link
                                        to={`/appointments/edit/${appointment.id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );
}

export default AppointmentTable;