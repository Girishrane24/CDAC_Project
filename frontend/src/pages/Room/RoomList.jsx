import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RoomList.css";
import RoomTable from "../../components/room/RoomTable";
// import roomService from "../../services/roomService";

function RoomList() {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const response = await roomService.getAllRooms();
      setRooms(response.data);
      setFilteredRooms(response.data);
    } catch (error) {
      console.error("Error loading rooms:", error);
    }
  };

  useEffect(() => {
    const result = rooms.filter(
      (room) =>
        room.roomNumber.toLowerCase().includes(search.toLowerCase()) ||
        room.roomType.toLowerCase().includes(search.toLowerCase()) ||
        room.status.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredRooms(result);
  }, [search, rooms]);

  return (
    <div className="room-list-container">

      <div className="room-header">
        <h2>Room Management</h2>

        <button
          className="add-room-btn"
          onClick={() => navigate("/rooms/add")}
        >
          + Add Room
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Room Number, Type or Status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <RoomTable
        rooms={filteredRooms}
        refreshRooms={loadRooms}
      />

    </div>
  );
}

export default RoomList;