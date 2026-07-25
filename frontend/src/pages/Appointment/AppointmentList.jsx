
import { Link } from "react-router-dom";
import "./AppointmentList.css";

function AppointmentList() {

  const appointments = [
    {
      id: "APT001",
      patient: "Rahul Sharma",
      doctor: "Dr. Amit Patel",
      department: "Cardiology",
      date: "20-Jul-2026",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: "APT002",
      patient: "Priya Singh",
      doctor: "Dr. Sneha Joshi",
      department: "Neurology",
      date: "20-Jul-2026",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: "APT003",
      patient: "Rohan Verma",
      doctor: "Dr. Anil Kumar",
      department: "Orthopedics",
      date: "21-Jul-2026",
      time: "02:00 PM",
      status: "Completed",
    },
    {
      id: "APT004",
      patient: "Neha Gupta",
      doctor: "Dr. Pooja Mehta",
      department: "Dermatology",
      date: "22-Jul-2026",
      time: "09:30 AM",
      status: "Cancelled",
    },
  ];

  const getBadge = (status) => {
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
    <div className="appointment-container">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Appointment List</h2>

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
                placeholder="Search Appointment..."
              />

            </div>

          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-primary">

                <tr>

                  <th>ID</th>
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

                {appointments.map((appointment) => (

                  <tr key={appointment.id}>

                    <td>{appointment.id}</td>

                    <td>{appointment.patient}</td>

                    <td>{appointment.doctor}</td>

                    <td>{appointment.department}</td>

                    <td>{appointment.date}</td>

                    <td>{appointment.time}</td>

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
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AppointmentList;