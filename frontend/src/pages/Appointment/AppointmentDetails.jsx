
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AppointmentDetails.css";
import { getAppointmentById } from "../../services/appointmentService";

function AppointmentDetails() {
    const { id } = useParams();

    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        loadAppointment();
    }, []);

    const loadAppointment = async () => {
        try {
            const res = await getAppointmentById(id);
            setAppointment(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const formatTime = (time) => {
        if (!time) return "-";

        const [hours, minutes] = time.split(":");

        const d = new Date();
        d.setHours(hours);
        d.setMinutes(minutes);

        return d.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    const getBadge = (status) => {
        switch (status?.toLowerCase()) {
            case "confirmed":
                return "success";
            case "pending":
                return "warning";
            case "completed":
                return "primary";
            case "cancelled":
                return "danger";
            default:
                return "secondary";
        }
    };

    return (
        <div className="appointment-details container-fluid">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">Appointment Details</h3>
                </div>

                <div className="card-body">

                    <div className="row">

                        {/* Patient Details */}

                        <div className="col-lg-6 mb-4">

                            <h5 className="section-title mb-3">
                                 Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th width="40%">Patient Name</th>
                                        <td>{appointment.patientName}</td>
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
                                        <th>Status</th>

                                        <td>
                                            <span
                                                className={`badge bg-${getBadge(
                                                    appointment.status
                                                )}`}
                                            >
                                                {appointment.status}
                                            </span>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        {/* Appointment Details */}

                        <div className="col-lg-6 mb-4">

                            <h5 className="section-title mb-3">
                                Appointment Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    {/* <tr>
                                        <th width="40%">Appointment ID</th>
                                        <td>{appointment.id}</td>
                                    </tr> */}

                                    <tr>
                                        <th>Date</th>
                                        <td>
                                            {formatDate(
                                                appointment.appointmentDate
                                            )}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Time</th>
                                        <td>
                                            {formatTime(
                                                appointment.appointmentTime
                                            )}
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div className="mt-4">

                        <h5 className="section-title">
                            Reason for Visit
                        </h5>

                        <div className="reason-box p-3 border rounded bg-light">

                            {appointment.reason || "No reason provided."}

                        </div>

                    </div>

                    <div className="text-end mt-4">

                        <Link
                            to={`/appointments/edit/${appointment.id}`}
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