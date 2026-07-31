package com.hospital.service;

import com.hospital.dto.RoomRequestDTO;
import com.hospital.model.Room;
import com.hospital.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // Get all rooms
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // Get room by ID
    public Room getRoomById(String id) {
        return roomRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Room not found with id: " + id));
    }

    // Add room
    public Room createRoom(RoomRequestDTO dto) {

        if (roomRepository.existsByRoomNumber(dto.getRoomNumber())) {
            throw new RuntimeException(
                    "Room Number " + dto.getRoomNumber() + " already exists.");
        }

        Room room = new Room();
        room.setRoomNumber(dto.getRoomNumber());
        room.setRoomType(dto.getRoomType());
        room.setFloor(dto.getFloor());
        room.setCapacity(dto.getCapacity());
        room.setDailyCharge(dto.getDailyCharge());
        room.setStatus(dto.getStatus());

        return roomRepository.save(room);
    }

    // Update room
    public Room updateRoom(String id, RoomRequestDTO dto) {

        Room room = getRoomById(id);

        if (!room.getRoomNumber().equals(dto.getRoomNumber())
                && roomRepository.existsByRoomNumber(dto.getRoomNumber())) {

            throw new RuntimeException(
                    "Room Number " + dto.getRoomNumber() + " already exists.");
        }

        room.setRoomNumber(dto.getRoomNumber());
        room.setRoomType(dto.getRoomType());
        room.setFloor(dto.getFloor());
        room.setCapacity(dto.getCapacity());
        room.setDailyCharge(dto.getDailyCharge());
        room.setStatus(dto.getStatus());

        return roomRepository.save(room);
    }

    // Delete room
    public void deleteRoom(String id) {

        Room room = getRoomById(id);

        roomRepository.delete(room);
    }
    
    public List<Room> getRoomsByStatus(String status) {
        return roomRepository.findByStatus(status);
    }

    public List<Room> getRoomsByType(String roomType) {
        return roomRepository.findByRoomType(roomType);
    }
    
}