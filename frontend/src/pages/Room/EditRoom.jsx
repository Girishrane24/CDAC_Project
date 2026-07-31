import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import roomService from "../../services/roomService";
import RoomForm from "../../components/room/RoomForm";

function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState({
    roomNumber: "",
    roomType: "General",
    floor: "",
    capacity: "",
    dailyCharge: "",
    status: "Available",
  });

  useEffect(() => {
    loadRoom();
  }, []);

  const loadRoom = async () => {
    try {
      const response = await roomService.getRoomById(id);
      setRoom(response.data);
    } catch (error) {
      console.error("Error loading room:", error);
      alert("Unable to load room details.");
    }
  };

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await roomService.updateRoom(id, room);
      alert("Room updated successfully!");
      navigate("/rooms");
    } catch (error) {
      console.error("Error updating room:", error);
      alert("Failed to update room.");
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

export default EditRoom;