import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./AddRoom.css";
// import roomService from "../../services/roomService";
import RoomForm from "../../components/room/RoomForm";


function AddRoom() {
  const navigate = useNavigate();

  const [room, setRoom] = useState({
    roomNumber: "",
    roomType: "General",
    floor: "",
    capacity: "",
    dailyCharge: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await roomService.addRoom(room);
      alert("Room added successfully!");
      navigate("/rooms");
    } catch (error) {
      console.error(error);
      alert("Failed to add room.");
    }
  };

  return (
   <RoomForm
  room={room}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  buttonText="Save Room"
  onCancel={() => navigate("/rooms")}
/>

  );
}

export default AddRoom;