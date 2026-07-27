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

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(String id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + id));
    }

    public Room createRoom(RoomRequestDTO dto) {
        if (roomRepository.existsByRoomNumber(dto.getRoomNumber())) {
            throw new IllegalArgumentException("Room number " + dto.getRoomNumber() + " already exists.");
        }

        Room room = new Room();
        room.setRoomNumber(dto.getRoomNumber());
        room.setType(dto.getType());
        room.setPricePerNight(dto.getPricePerNight());
        room.setCapacity(dto.getCapacity());
        room.setIsAvailable(dto.getIsAvailable() != null ? dto.getIsAvailable() : true);
        room.setAmenities(dto.getAmenities());

        return roomRepository.save(room);
    }

    public Room updateRoom(String id, RoomRequestDTO dto) {
        Room room = getRoomById(id);

        if (!room.getRoomNumber().equals(dto.getRoomNumber()) && roomRepository.existsByRoomNumber(dto.getRoomNumber())) {
            throw new IllegalArgumentException("Room number " + dto.getRoomNumber() + " is already taken.");
        }

        room.setRoomNumber(dto.getRoomNumber());
        room.setType(dto.getType());
        room.setPricePerNight(dto.getPricePerNight());
        room.setCapacity(dto.getCapacity());
        if (dto.getIsAvailable() != null) {
            room.setIsAvailable(dto.getIsAvailable());
        }
        room.setAmenities(dto.getAmenities());

        return roomRepository.save(room);
    }

    public void deleteRoom(String id) {
        if (!roomRepository.existsById(id)) {
            throw new RuntimeException("Room not found with id: " + id);
        }
        roomRepository.deleteById(id);
    }

    public List<Room> getAvailableRooms() {
        return roomRepository.findByIsAvailable(true);
    }
}