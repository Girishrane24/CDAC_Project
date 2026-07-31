import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAppointments } from "../../services/appointmentService";

import "./AppointmentTable.css";

function AppointmentTable() {

    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {

        try {

            const response = await getAppointments();

            // Show latest 5 appointments
            const latestAppointments = response.data.slice(0, 5);

            setAppointments(latestAppointments);

        } catch (error) {

            console.error("Error loading appointments:", error);

        }

    };

    const getStatusClass = (status) => {

        switch (status) {

            case "Completed":
                return "completed";

            case "Pending":
                return "pending";

            case "Cancelled":
                return "cancelled";

            default:
                return "default";

        }

    };

    return (

        <div className="appointment-table">

            <div className="table-header">

                <h3>Recent Appointments</h3>

                <button
                    className="view-btn"
                    onClick={() => navigate("/appointments")}
                >
                    View All
                </button>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Patient</th>

                        <th>Doctor</th>

                        <th>Department</th>

                        <th>Date</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        appointments.length > 0 ?

                            appointments.map((appointment) => (

                                <tr key={appointment.id}>

                                    <td>{appointment.patientName}</td>

                                    <td>{appointment.doctorName}</td>

                                    <td>{appointment.department}</td>

                                    <td>{appointment.appointmentDate}</td>

                                    <td>

                                        <span
                                            className={getStatusClass(
                                                appointment.status
                                            )}
                                        >
                                            {appointment.status}
                                        </span>

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td
                                    colSpan="5"
                                    className="no-data"
                                >
                                    No Appointments Found
                                </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default AppointmentTable;