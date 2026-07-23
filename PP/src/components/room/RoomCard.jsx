import "./RoomCard.css";

function RoomCard({ room, onView, onEdit, onDelete }) {
  return (
    <div className="room-card">

      <div className="room-card-header">

        <div>
          <h3>Room {room.roomNumber}</h3>
          <p>{room.roomType}</p>
        </div>

        <span
          className={`status-badge ${
            room.status.toLowerCase()
          }`}
        >
          {room.status}
        </span>

      </div>

      <div className="room-card-body">

        <div className="info">
          <span>Floor</span>
          <strong>{room.floor}</strong>
        </div>

        <div className="info">
          <span>Capacity</span>
          <strong>{room.capacity} Beds</strong>
        </div>

        <div className="info">
          <span>Daily Charge</span>
          <strong>₹ {room.dailyCharge}</strong>
        </div>

      </div>

      <div className="room-card-footer">

        <button
          className="view-btn"
          onClick={() => onView(room.id)}
        >
          View
        </button>

        <button
          className="edit-btn"
          onClick={() => onEdit(room.id)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(room.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default RoomCard;