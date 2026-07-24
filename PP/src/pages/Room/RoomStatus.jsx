import { useEffect, useState } from "react";
import "./RoomStatus.css";

function RoomStatus() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = () => {
    // Replace with API call later
    const roomData = [
      {
        id: 1,
        roomNumber: "101",
        roomType: "General",
        floor: 1,
        capacity: 4,
        occupiedBeds: 2,
        status: "Available",
      },
      {
        id: 2,
        roomNumber: "102",
        roomType: "Private",
        floor: 1,
        capacity: 1,
        occupiedBeds: 1,
        status: "Occupied",
      },
      {
        id: 3,
        roomNumber: "201",
        roomType: "ICU",
        floor: 2,
        capacity: 2,
        occupiedBeds: 0,
        status: "Maintenance",
      },
      {
        id: 4,
        roomNumber: "202",
        roomType: "Deluxe",
        floor: 2,
        capacity: 2,
        occupiedBeds: 1,
        status: "Available",
      },
    ];

    setRooms(roomData);
  };

  const filteredRooms = rooms.filter(
    (room) =>
      room.roomNumber.toLowerCase().includes(search.toLowerCase()) ||
      room.roomType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="room-status-container">

      <div className="room-status-header">
        <h2>Room Status</h2>

        <input
          type="text"
          placeholder="Search Room..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="status-cards">

        <div className="status-card available-card">
          <h3>
            {
              rooms.filter(
                (room) => room.status === "Available"
              ).length
            }
          </h3>
          <p>Available Rooms</p>
        </div>

        <div className="status-card occupied-card">
          <h3>
            {
              rooms.filter(
                (room) => room.status === "Occupied"
              ).length
            }
          </h3>
          <p>Occupied Rooms</p>
        </div>

        <div className="status-card maintenance-card">
          <h3>
            {
              rooms.filter(
                (room) => room.status === "Maintenance"
              ).length
            }
          </h3>
          <p>Maintenance</p>
        </div>

      </div>

      <table>

        <thead>

          <tr>
            <th>Room No</th>
            <th>Room Type</th>
            <th>Floor</th>
            <th>Total Beds</th>
            <th>Occupied Beds</th>
            <th>Available Beds</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {filteredRooms.length === 0 ? (
            <tr>
              <td colSpan="7">No Rooms Found</td>
            </tr>
          ) : (
            filteredRooms.map((room) => (
              <tr key={room.id}>

                <td>{room.roomNumber}</td>

                <td>{room.roomType}</td>

                <td>{room.floor}</td>

                <td>{room.capacity}</td>

                <td>{room.occupiedBeds}</td>

                <td>{room.capacity - room.occupiedBeds}</td>

                <td>
                  <span
                    className={`status ${room.status.toLowerCase()}`}
                  >
                    {room.status}
                  </span>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default RoomStatus;