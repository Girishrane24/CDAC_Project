import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./RoomDetails.css";
// import roomService from "../../services/roomService";

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  useEffect(() => {
    loadRoom();
  }, []);

  const loadRoom = async () => {
    try {
      const response = await roomService.getRoomById(id);
      setRoom(response.data);
    } catch (error) {
      console.error("Error fetching room details:", error);
      alert("Unable to load room details.");
    }
  };

  if (!room) {
    return (
      <div className="room-loading">
        <h2>Loading Room Details...</h2>
      </div>
    );
  }

  return (
    <div className="room-details-container">

      <div className="room-details-card">

        <h2>Room Details</h2>

        <div className="room-details-grid">

          <div className="detail-item">
            <label>Room Number</label>
            <span>{room.roomNumber}</span>
          </div>

          <div className="detail-item">
            <label>Room Type</label>
            <span>{room.roomType}</span>
          </div>

          <div className="detail-item">
            <label>Floor</label>
            <span>{room.floor}</span>
          </div>

          <div className="detail-item">
            <label>Capacity</label>
            <span>{room.capacity}</span>
          </div>

          <div className="detail-item">
            <label>Daily Charge</label>
            <span>₹ {room.dailyCharge}</span>
          </div>

          <div className="detail-item">
            <label>Status</label>

            <span
              className={
                room.status === "Available"
                  ? "status available"
                  : room.status === "Occupied"
                  ? "status occupied"
                  : "status maintenance"
              }
            >
              {room.status}
            </span>
          </div>

          <div className="detail-item">
            <label>Description</label>
            <span>{room.description || "No description available."}</span>
          </div>

        </div>

        <div className="button-group">

          <button
            className="edit-btn"
            onClick={() => navigate(`/rooms/edit/${room.id}`)}
          >
            Edit
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/rooms")}
          >
            Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoomDetails;