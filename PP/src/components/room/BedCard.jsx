import "./BedCard.css";

function BedCard({
  bed,
  onEdit,
  onDelete,
  onChangeStatus,
}) {
  return (
    <div className="bed-card">

      <div className="bed-card-header">

        <h3>{bed.bedNumber}</h3>

        <span
          className={`bed-status ${bed.status.toLowerCase()}`}
        >
          {bed.status}
        </span>

      </div>

      <div className="bed-card-body">

        <div className="bed-info">
          <label>Room Number</label>
          <span>{bed.roomNumber}</span>
        </div>

        <div className="bed-info">
          <label>Floor</label>
          <span>{bed.floor}</span>
        </div>

        <div className="bed-info">
          <label>Bed Type</label>
          <span>{bed.bedType}</span>
        </div>

        <div className="bed-info">
          <label>Patient</label>
          <span>
            {bed.patientName || "Not Assigned"}
          </span>
        </div>

      </div>

      <div className="bed-card-footer">

        <button
          className="status-btn"
          onClick={() => onChangeStatus(bed.id)}
        >
          Change Status
        </button>

        <button
          className="edit-btn"
          onClick={() => onEdit(bed.id)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(bed.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default BedCard;