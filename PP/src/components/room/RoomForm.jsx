import "./RoomForm.css";

function RoomForm({
  room,
  handleChange,
  handleSubmit,
  buttonText = "Save Room",
  onCancel,
}) {
  return (
    <div className="room-form-container">

      <form className="room-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Room Number</label>

          <input
            type="text"
            name="roomNumber"
            value={room.roomNumber}
            onChange={handleChange}
            placeholder="Enter Room Number"
            required
          />
        </div>

        <div className="form-group">
          <label>Room Type</label>

          <select
            name="roomType"
            value={room.roomType}
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="Private">Private</option>
            <option value="Deluxe">Deluxe</option>
            <option value="ICU">ICU</option>
          </select>
        </div>

        <div className="form-group">
          <label>Floor</label>

          <input
            type="number"
            name="floor"
            value={room.floor}
            onChange={handleChange}
            placeholder="Enter Floor"
            required
          />
        </div>

        <div className="form-group">
          <label>Capacity</label>

          <input
            type="number"
            name="capacity"
            value={room.capacity}
            onChange={handleChange}
            placeholder="Number of Beds"
            required
          />
        </div>

        <div className="form-group">
          <label>Daily Charge (₹)</label>

          <input
            type="number"
            name="dailyCharge"
            value={room.dailyCharge}
            onChange={handleChange}
            placeholder="Enter Daily Charge"
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={room.status}
            onChange={handleChange}
          >
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Maintenance">Maintenance</option>
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
  );
}

export default RoomForm;