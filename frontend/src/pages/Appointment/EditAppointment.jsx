import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditAppointment.css";
import {
  getAppointmentById,
  updateAppointment,
} from "../../services/appointmentService";

import { getPatients } from "../../services/patientServices";
import { getDoctors } from "../../services/doctorService";

function EditAppointment() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [appointment, setAppointment] = useState({
    id: "",
    patientName: "",
    doctorName: "",
    department: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    status: "Pending",
  });

  useEffect(() => {
    loadAppointment();
    loadPatients();
    loadDoctors();
  }, []);

  const loadPatients = async () => {
    try {
      const res = await getPatients();
      setPatients(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadDoctors = async () => {
    try {
      const res = await getDoctors();
      setDoctors(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAppointment = async () => {
    try {
      const res = await getAppointmentById(id);

      setAppointment({
        ...res.data,
        appointmentDate: res.data.appointmentDate || "",
        appointmentTime: res.data.appointmentTime
          ? res.data.appointmentTime.substring(0, 5)
          : "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to load appointment.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "doctorName") {
      const selectedDoctor = doctors.find((doctor) => doctor.name === value);

      setAppointment((prev) => ({
        ...prev,
        doctorName: value,
        department: selectedDoctor ? selectedDoctor.specialization : "",
      }));

      return;
    }

    setAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateAppointment(id, appointment);

      alert("Appointment Updated Successfully!");

      navigate("/appointments");
    } catch (error) {
      console.error(error);
      alert("Unable to update appointment.");
    }
  };

  return (
    <div className="container-fluid">
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
                  value={appointment.id}
                  disabled
                />
              </div>

              {/* Patient Name */}

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

              {/* Doctor */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Doctor</label>

                <select
                  className="form-select"
                  name="doctorName"
                  value={appointment.doctorName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>

                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Department */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>

                <input
                  type="text"
                  className="form-control"
                  value={appointment.department}
                  readOnly
                />
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
                  required
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
                  required
                />
              </div>

              {/* Status */}

              <div className="col-md-4 mb-3">
                <label className="form-label">Status</label>

                <select
                  className="form-select"
                  name="status"
                  value={appointment.status}
                  onChange={handleChange}
                  required
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

              <button type="submit" className="btn btn-warning">
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
