

import "./LabTestForm.css";
import labTests from "../../../data/labTests";

function LabTestForm({
  labTest,
  handleChange,
  handleSubmit,
  appointments = [],
  patients = [],
  labs = [],
  buttonText = "Save",
  isEdit = false,
  onCancel,
}) {
  return (
    <div className="labtest-form-container">
      <div className="labtest-form-card">
        <h2>{isEdit ? "Edit Lab Test" : "Add Lab Test"}</h2>

        <form onSubmit={handleSubmit}>
          {/* Lab Test ID */}
          <div className="form-group">
            <label>Lab Test ID</label>

            <input
              type="text"
              name="labTestId"
              value={labTest.labTestId}
              onChange={handleChange}
              disabled={isEdit}
              required
            />
          </div>

          {/* Appointment */}
          <div className="form-group">
            <label>Appointment</label>

            <select
              name="appointmentId"
              value={labTest.appointmentId}
              onChange={handleChange}
              required
            >
              <option value="">Select Appointment</option>

              {appointments.map((appointment) => (
                <option key={appointment.id} value={appointment.id}>
                  {appointment.patientName} ({appointment.appointmentDate})
                </option>
              ))}
            </select>
          </div>

          {/* Patient */}
          <div className="form-group">
            <label>Patient</label>

            <select
              name="patientId"
              value={labTest.patientId}
              onChange={handleChange}
              required
            >
              <option value="">Select Patient</option>

              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.firstName} {patient.lastName}
                </option>
              ))}
            </select>
          </div>

          {/* Laboratory */}
          <div className="form-group">
            <label>Laboratory</label>

            <select
              name="labId"
              value={labTest.labId}
              onChange={handleChange}
              required
            >
              <option value="">Select Laboratory</option>

              {labs.map((lab) => (
                <option key={lab.labId} value={lab.labId}>
                  {lab.labName}
                </option>
              ))}
            </select>
          </div>

          {/* Test Name */}
          <div className="form-group">
            <label>Test Name</label>

            <select
              name="testName"
              value={labTest.testName}
              onChange={handleChange}
              required
            >
              <option value="">Select Test</option>

              {labTests.map((test) => (
                <option key={test.testName} value={test.testName}>
                  {test.testName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
    <label>Doctor</label>

    <input
        type="text"
        value={labTest.doctorName}
        disabled
    />
</div>

          {/* Sample Type */}
          <div className="form-group">
            <label>Sample Type</label>

            <input type="text" value={labTest.sampleType} disabled />
          </div>

          {/* Test Date */}
          <div className="form-group">
            <label>Test Date</label>

            <input
              type="date"
              name="testDate"
              value={labTest.testDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label>Price (₹)</label>

            <input type="number" value={labTest.price ?? ""} disabled />
          </div>

          {/* Result */}
          <div className="form-group">
            <label>Result</label>

            <textarea
              name="result"
              value={labTest.result}
              onChange={handleChange}
              rows="4"
              placeholder={
                isEdit
                  ? "Enter Test Result"
                  : "Result will be added after the test is completed"
              }
              disabled={!isEdit}
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={labTest.status}
              onChange={handleChange}
              disabled={!isEdit}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="save-btn">
              {buttonText}
            </button>

            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LabTestForm;
