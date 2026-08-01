import "./RoomSummary.css";

function BedSummary({ beds }) {
  const totalBeds = beds.length;

  const availableBeds = beds.filter(
    (bed) => bed.status === "Available"
  ).length;

  const occupiedBeds = beds.filter(
    (bed) => bed.status === "Occupied"
  ).length;

  const occupancy =
    totalBeds === 0
      ? 0
      : Math.round((occupiedBeds / totalBeds) * 100);

  return (
    <div className="summary-card">
      <h3>Bed Summary</h3>

      <div className="summary-item">
        <span>Total Beds</span>
        <strong>{totalBeds}</strong>
      </div>

      <div className="summary-item">
        <span>Available</span>
        <strong className="green">{availableBeds}</strong>
      </div>

      <div className="summary-item">
        <span>Occupied</span>
        <strong className="blue">{occupiedBeds}</strong>
      </div>

      <div className="summary-item">
        <span>Occupancy</span>
        <strong className="orange">{occupancy}%</strong>
      </div>
    </div>
  );
}

export default BedSummary;