import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AppointmentList.css";
import {
    getAppointments,
    deleteAppointment,
} from "../../services/appointmentService";

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        try {
            const res = await getAppointments();
            setAppointments(res.data);
        } catch (error) {
            console.error("Error loading appointments:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this appointment?")) {
            return;
        }

        try {
            await deleteAppointment(id);
            alert("Appointment deleted successfully!");
            loadAppointments();
        } catch (error) {
            console.error(error);
            alert("Unable to delete appointment.");
        }
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

    const filteredAppointments = appointments.filter((appointment) => {
        const keyword = search.toLowerCase();

        return (
            appointment.patientName?.toLowerCase().includes(keyword) ||
            appointment.doctorName?.toLowerCase().includes(keyword) ||
            appointment.department?.toLowerCase().includes(keyword) ||
            appointment.status?.toLowerCase().includes(keyword)
        );
    });

    return (
        <div className="container-fluid">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="fw-bold">Appointment List</h2>

                <Link
                    to="/appointments/book"
                    className="btn btn-primary"
                >
                    + Book Appointment
                </Link>

            </div>

            <div className="card shadow-sm">

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-4">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Patient, Doctor..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-primary">

                                <tr>

                                    {/* <th>ID</th> */}
                                    <th>Patient</th>
                                    <th>Doctor</th>
                                    <th>Department</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th width="220">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredAppointments.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="8"
                                            className="text-center text-muted py-4"
                                        >
                                            No Appointments Found
                                        </td>

                                    </tr>

                                ) : (

                                    filteredAppointments.map((appointment) => (

                                        <tr key={appointment.id}>

                                            {/* <td>{appointment.id}</td> */}

                                            <td>{appointment.patientName}</td>

                                            <td>{appointment.doctorName}</td>

                                            <td>{appointment.department}</td>

                                            <td>
                                                {formatDate(
                                                    appointment.appointmentDate
                                                )}
                                            </td>

                                            <td>
                                                {formatTime(
                                                    appointment.appointmentTime
                                                )}
                                            </td>

                                            <td>

                                                <span
                                                    className={`badge bg-${getBadge(
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
                                                    onClick={() =>
                                                        handleDelete(appointment.id)
                                                    }
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

                </div>

            </div>

        </div>
    );
}

export default AppointmentList;