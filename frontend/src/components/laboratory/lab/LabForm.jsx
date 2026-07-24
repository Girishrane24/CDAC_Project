import "./LabForm.css";

function LabForm({
  lab,
  handleChange,
  handleSubmit,
  buttonText = "Save",
  isEdit = false,
  onCancel,
}) {
  return (
    <div className="lab-form-container">

      <div className="lab-form-card">

        <h2>{isEdit ? "Edit Laboratory" : "Add Laboratory"}</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Lab ID</label>

            <input
              type="text"
              name="labId"
              value={lab.labId}
              onChange={handleChange}
              readOnly={isEdit}
              required
            />

          </div>

          <div className="form-group">

            <label>Laboratory Name</label>

            <input
              type="text"
              name="labName"
              value={lab.labName}
              onChange={handleChange}
              placeholder="Enter Laboratory Name"
              required
            />

          </div>

          <div className="form-group">

            <label>Location</label>

            <input
              type="text"
              name="location"
              value={lab.location}
              onChange={handleChange}
              placeholder="Enter Location"
              required
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={lab.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              maxLength="10"
              required
            />

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

export default LabForm;