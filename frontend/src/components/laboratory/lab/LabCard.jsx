import "./LabCard.css";

function LabCard({ lab, onView, onEdit, onDelete }) {
  return (
    <div className="lab-card">

      <div className="lab-card-header">
        <h3>{lab.labName}</h3>
      </div>

      <div className="lab-card-body">

        <p>
          <strong>Lab ID:</strong> {lab.labId}
        </p>

        <p>
          <strong>Location:</strong> {lab.location}
        </p>

        <p>
          <strong>Phone:</strong> {lab.phone}
        </p>

      </div>

      <div className="lab-card-footer">

        <button
          className="view-btn"
          onClick={() => onView(lab.labId)}
        >
          View
        </button>

        <button
          className="edit-btn"
          onClick={() => onEdit(lab.labId)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(lab.labId)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default LabCard;