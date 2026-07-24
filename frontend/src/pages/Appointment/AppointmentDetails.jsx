import { Link, useParams } from "react-router-dom";
import "./AppointmentDetails.css";

function AppointmentDetails() {

    const { id } = useParams();

    // Dummy Data (Replace with API later)

    const appointment = {
        appointmentId: id || "APT001",
        patientName: "Rahul Sharma",
        patientId: "PAT101",
        age: 35,
        gender: "Male",

        doctorName: "Dr. Amit Patel",
        department: "Cardiology",

        appointmentDate: "25-Jul-2026",
        appointmentTime: "10:00 AM",

        reason: "Regular Heart Checkup",

        status: "Confirmed",

        phone: "9876543210",
        email: "rahul@gmail.com"
    };

    return (

        <div className="appointment-details">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>Appointment Details</h3>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6">

                            <h5 className="section-title">
                                Patient Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>Patient ID</th>
                                        <td>{appointment.patientId}</td>
                                    </tr>

                                    <tr>
                                        <th>Name</th>
                                        <td>{appointment.patientName}</td>
                                    </tr>

                                    <tr>
                                        <th>Age</th>
                                        <td>{appointment.age}</td>
                                    </tr>

                                    <tr>
                                        <th>Gender</th>
                                        <td>{appointment.gender}</td>
                                    </tr>

                                    <tr>
                                        <th>Phone</th>
                                        <td>{appointment.phone}</td>
                                    </tr>

                                    <tr>
                                        <th>Email</th>
                                        <td>{appointment.email}</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="col-md-6">

                            <h5 className="section-title">
                                Appointment Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>Appointment ID</th>
                                        <td>{appointment.appointmentId}</td>
                                    </tr>

                                    <tr>
                                        <th>Doctor</th>
                                        <td>{appointment.doctorName}</td>
                                    </tr>

                                    <tr>
                                        <th>Department</th>
                                        <td>{appointment.department}</td>
                                    </tr>

                                    <tr>
                                        <th>Date</th>
                                        <td>{appointment.appointmentDate}</td>
                                    </tr>

                                    <tr>
                                        <th>Time</th>
                                        <td>{appointment.appointmentTime}</td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>

                                        <td>

                                            <span className="badge bg-success">

                                                {appointment.status}

                                            </span>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div className="mt-4">

                        <h5 className="section-title">
                            Reason For Visit
                        </h5>

                        <div className="reason-box">

                            {appointment.reason}

                        </div>

                    </div>

                    <div className="text-end mt-4">

                        <Link
                            to={`/appointments/edit/${appointment.appointmentId}`}
                            className="btn btn-warning me-2"
                        >
                            Edit
                        </Link>

                        <Link
                            to="/appointments"
                            className="btn btn-secondary"
                        >
                            Back
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AppointmentDetails;