import { useNavigate } from "react-router-dom";
import "./RoomTable.css";
import roomService from "../../services/roomService";

function RoomTable({ rooms, refreshRooms }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );

    if (!confirmDelete) return;

    try {
      await roomService.deleteRoom(id);
      alert("Room deleted successfully.");
      refreshRooms();
    } catch (error) {
      console.error(error);
      alert("Failed to delete room.");
    }
  };

  return (
    <table className="room-table">

      <thead>
        <tr>
          <th>Room No.</th>
          <th>Type</th>
          <th>Floor</th>
          <th>Capacity</th>
          <th>Daily Charge</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {rooms.length === 0 ? (
          <tr>
            <td colSpan="7" className="no-data">
              No rooms found.
            </td>
          </tr>
        ) : (
          rooms.map((room) => (
            <tr key={room.id}>

              <td>{room.roomNumber}</td>
              <td>{room.roomType}</td>
              <td>{room.floor}</td>
              <td>{room.capacity}</td>
              <td>₹ {room.dailyCharge}</td>

              <td>
                <span
                  className={`status-badge ${room.status?.toLowerCase()}`}
                >
                  {room.status}
                </span>
              </td>

              <td className="action-buttons">

                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(`/rooms/details/${room.id}`)
                  }
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() =>
                    navigate(`/rooms/edit/${room.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(room.id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>
          ))
        )}

      </tbody>

    </table>
  );
}

export default RoomTable;