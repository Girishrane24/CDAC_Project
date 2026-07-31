package com.hospital.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Room;
import com.hospital.repository.RoomRepository;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    // Add Room
    @PostMapping
    public Room addRoom(@RequestBody Room room) {

        if (roomRepository.existsByRoomNumber(room.getRoomNumber())) {
            throw new RuntimeException("Room number already exists.");
        }

        return roomRepository.save(room);
    }

    // Get All Rooms
    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // Get Room By ID
    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable String id) {

        Optional<Room> room = roomRepository.findById(id);

        if (room.isPresent()) {
            return room.get();
        }

        throw new RuntimeException("Room not found.");
    }

    // Update Room
    @PutMapping("/{id}")
    public Room updateRoom(@PathVariable String id,
                           @RequestBody Room updatedRoom) {

        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found."));

        room.setRoomNumber(updatedRoom.getRoomNumber());
        room.setRoomType(updatedRoom.getRoomType());
        room.setFloor(updatedRoom.getFloor());
        room.setCapacity(updatedRoom.getCapacity());
        room.setDailyCharge(updatedRoom.getDailyCharge());
        room.setStatus(updatedRoom.getStatus());

        return roomRepository.save(room);
    }

    // Delete Room
    @DeleteMapping("/{id}")
    public String deleteRoom(@PathVariable String id) {

        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found."));

        roomRepository.delete(room);

        return "Room deleted successfully.";
    }
    
    @GetMapping("/status/{status}")
    public List<Room> getRoomsByStatus(@PathVariable String status) {

        return roomRepository.findByStatus(status);

    }

    @GetMapping("/type/{roomType}")
    public List<Room> getRoomsByType(@PathVariable String roomType) {

        return roomRepository.findByRoomType(roomType);

    }
}