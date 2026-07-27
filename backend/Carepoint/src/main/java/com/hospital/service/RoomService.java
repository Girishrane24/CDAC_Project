package com.hospital.service;

import com.hospital.model.Room;
import com.hospital.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Optional<Room> getRoomById(String id) {
        return roomRepository.findById(id);
    }

    public Room addRoom(Room room) {
        return roomRepository.save(room);
    }

    public Room updateRoom(String id, Room updatedRoom) {
        return roomRepository.findById(id).map(room -> {
            room.setRoomNumber(updatedRoom.getRoomNumber());
            room.setRoomType(updatedRoom.getRoomType());
            room.setFloor(updatedRoom.getFloor());
            room.setCapacity(updatedRoom.getCapacity());
            room.setDailyCharge(updatedRoom.getDailyCharge());
            room.setStatus(updatedRoom.getStatus());
            //room.setDescription(updatedRoom.getDescription());
            return roomRepository.save(room);
        }).orElseThrow(() -> new RuntimeException("Room not found: " + id));
    }
    
    public void deleteRoom(String id) {
        roomRepository.deleteById(id);
    }
}