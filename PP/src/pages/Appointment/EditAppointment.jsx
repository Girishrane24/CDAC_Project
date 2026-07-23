import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditAppointment.css";

function EditAppointment() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Dummy data (Replace with API later)
  const [appointment, setAppointment] = useState({
    appointmentId: id || "APT001",
    patientName: "Rahul Sharma",
    doctorName: "Dr. Amit Patel",
    department: "Cardiology",
    appointmentDate: "2026-07-25",
    appointmentTime: "10:00",
    reason: "Regular Heart Checkup",
    status: "Confirmed",
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Updated Successfully!");

    console.log(appointment);

    navigate("/appointments");
  };

  return (
    <div className="edit-appointment-container">

      <div className="card shadow">

        <div className="card-header bg-warning text-dark">
          <h3>Edit Appointment</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              {/* Appointment ID */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Appointment ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={appointment.appointmentId}
                  disabled
                />
              </div>

              {/* Patient */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Patient Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="patientName"
                  value={appointment.patientName}
                  onChange={handleChange}
                />
              </div>

              {/* Doctor */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Doctor</label>
                <select
                  className="form-select"
                  name="doctorName"
                  value={appointment.doctorName}
                  onChange={handleChange}
                >
                  <option>Dr. Amit Patel</option>
                  <option>Dr. Sneha Joshi</option>
                  <option>Dr. Anil Kumar</option>
                  <option>Dr. Pooja Mehta</option>
                </select>
              </div>

              {/* Department */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  name="department"
                  value={appointment.department}
                  onChange={handleChange}
                >
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                  <option>Pediatrics</option>
                </select>
              </div>

              {/* Date */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Appointment Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="appointmentDate"
                  value={appointment.appointmentDate}
                  onChange={handleChange}
                />
              </div>

              {/* Time */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Appointment Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="appointmentTime"
                  value={appointment.appointmentTime}
                  onChange={handleChange}
                />
              </div>

              {/* Reason */}

              <div className="col-12 mb-3">
                <label className="form-label">Reason for Visit</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="reason"
                  value={appointment.reason}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Status */}

              <div className="col-md-4 mb-3">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={appointment.status}
                  onChange={handleChange}
                >
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>

            </div>

            <div className="text-end">

              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => navigate("/appointments")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-warning"
              >
                Update Appointment
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditAppointment;
