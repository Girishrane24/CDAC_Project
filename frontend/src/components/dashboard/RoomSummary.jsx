import "./RoomSummary.css";

function RoomSummary({ rooms }) {
  const totalRooms = rooms.length;

  const availableRooms = rooms.filter(
    (room) => room.status === "Available"
  ).length;

  const occupiedRooms = rooms.filter(
    (room) => room.status === "Occupied"
  ).length;

  const maintenanceRooms = rooms.filter(
    (room) => room.status === "Maintenance"
  ).length;

  return (
    <div className="summary-card">
      <h3>Room Summary</h3>

      <div className="summary-item">
        <span>Total Rooms</span>
        <strong>{totalRooms}</strong>
      </div>

      <div className="summary-item">
        <span>Available</span>
        <strong className="green">{availableRooms}</strong>
      </div>

      <div className="summary-item">
        <span>Occupied</span>
        <strong className="blue">{occupiedRooms}</strong>
      </div>

      <div className="summary-item">
        <span>Maintenance</span>
        <strong className="red">{maintenanceRooms}</strong>
      </div>
    </div>
  );
}

export default RoomSummary;