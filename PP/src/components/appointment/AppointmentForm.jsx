import "./AppointmentForm.css";

function AppointmentForm({
  appointment,
  handleChange,
  handleSubmit,
  buttonText,
}) {
  return (
    <form onSubmit={handleSubmit}>

      <div className="row">

        {/* Patient Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            name="patientName"
            value={appointment.patientName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Doctor */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Doctor Name</label>
          <select
            className="form-select"
            name="doctorName"
            value={appointment.doctorName}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
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
            required
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Dermatology</option>
            <option>Pediatrics</option>
          </select>
        </div>

        {/* Date */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Appointment Date</label>
          <input
            type="date"
            className="form-control"
            name="appointmentDate"
            value={appointment.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Appointment Time</label>
          <input
            type="time"
            className="form-control"
            name="appointmentTime"
            value={appointment.appointmentTime}
            onChange={handleChange}
            required
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

      <div className="text-end mt-3">

        <button
          type="reset"
          className="btn btn-secondary me-2"
        >
          Reset
        </button>

        <button
          type="submit"
          className="btn btn-primary"
        >
          {buttonText}
        </button>

      </div>

    </form>
  );
}

export default AppointmentForm;