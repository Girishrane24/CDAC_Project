import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.css";
import { addAppointment } from "../../services/appointmentService";
import { getPatients } from "../../services/patientServices";
import { getDoctors } from "../../services/doctorService";

function BookAppointment() {
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    department: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    status: "Pending",
  });
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadPatients();
    loadDoctors();
  }, []);

  const loadPatients = async () => {
    try {
      const response = await getPatients();
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadDoctors = async () => {
    try {
      const response = await getDoctors();
      setDoctors(response.data);
    } catch (error) {
      console.error("Error loading doctors:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "doctorName") {
      const doctor = doctors.find((doc) => doc.name === value);

      setAppointment({
        ...appointment,
        doctorName: value,
        department: doctor ? doctor.specialization : "",
      });

      return;
    }

    setAppointment({
      ...appointment,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAppointment(appointment);

      alert("Appointment Booked Successfully!");

      navigate("/appointments");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.error || "Unable to book appointment");
    }
  };

  return (
    <div className="appointment-form-container">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>Book Appointment</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Patient Name</label>

                <select
                  className="form-select"
                  name="patientName"
                  value={appointment.patientName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Patient</option>

                  {patients.map((patient) => (
                    <option
                      key={patient.id}
                      value={`${patient.firstName} ${patient.lastName}`}
                    >
                      {patient.firstName} {patient.lastName}
                    </option>
                  ))}
                </select>
              </div>

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

                  {doctors
                    .filter((doctor) => doctor.status === "Available")
                    .map((doctor) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>

                {/* <select
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
                </select> */}

                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={appointment.department}
                  readOnly
                />
              </div>

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

              <button type="submit" className="btn btn-primary">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
