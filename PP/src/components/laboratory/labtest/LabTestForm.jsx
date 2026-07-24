import "./LabTestForm.css";

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

          <div className="form-group">
            <label>Lab Test ID</label>

            <input
              type="text"
              name="labTestId"
              value={labTest.labTestId}
              onChange={handleChange}
              readOnly={isEdit}
              required
            />
          </div>

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
                <option
                  key={appointment.id}
                  value={appointment.id}
                >
                  {appointment.id}
                </option>
              ))}

            </select>

          </div>

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
                <option
                  key={patient.id}
                  value={patient.id}
                >
                  {patient.id} - {patient.name}
                </option>
              ))}

            </select>

          </div>

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
                <option
                  key={lab.id}
                  value={lab.id}
                >
                  {lab.name}
                </option>
              ))}

            </select>

          </div>

          <div className="form-group">

            <label>Test Name</label>

            <input
              type="text"
              name="testName"
              value={labTest.testName}
              onChange={handleChange}
              placeholder="Enter Test Name"
              required
            />

          </div>

          <div className="form-group">

            <label>Sample Type</label>

            <select
              name="sampleType"
              value={labTest.sampleType}
              onChange={handleChange}
              required
            >
              <option value="">Select Sample Type</option>
              <option value="Blood">Blood</option>
              <option value="Urine">Urine</option>
              <option value="Saliva">Saliva</option>
              <option value="X-Ray">X-Ray</option>
              <option value="ECG">ECG</option>
              <option value="MRI">MRI</option>
            </select>

          </div>

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

          <div className="form-group">

            <label>Result</label>

            <textarea
              name="result"
              value={labTest.result}
              onChange={handleChange}
              rows="4"
              placeholder="Enter Test Result"
            />

          </div>

          <div className="form-group">

            <label>Status</label>

            <select
              name="status"
              value={labTest.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

          </div>

          <div className="button-group">

            <button
              type="submit"
              className="save-btn"
            >
              {buttonText}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default LabTestForm;