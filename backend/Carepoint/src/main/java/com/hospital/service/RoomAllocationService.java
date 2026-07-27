package com.hospital.service;

import com.hospital.model.Room;
import com.hospital.model.RoomAllocation;
import com.hospital.repository.RoomAllocationRepository;
import com.hospital.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomAllocationService {

    @Autowired
    private RoomAllocationRepository allocationRepository;

    @Autowired
    private RoomRepository roomRepository;

    public List<RoomAllocation> getAllAllocations() {
        return allocationRepository.findAll();
    }

    public RoomAllocation allocateRoom(RoomAllocation allocation) {
        allocation.setStatus("Allocated");
        RoomAllocation saved = allocationRepository.save(allocation);

        // Update room status
        Optional<Room> roomOpt = roomRepository.findByRoomNumber(allocation.getRoomNumber());
        if (roomOpt.isPresent()) {
            Room room = roomOpt.get();
            room.setOccupiedBeds(room.getOccupiedBeds() + 1);
            if (room.getOccupiedBeds() >= room.getCapacity()) {
                room.setStatus("Occupied");
            }
            roomRepository.save(room);
        }

        return saved;
    }

    public RoomAllocation dischargePatient(String id) {
        return allocationRepository.findById(id).map(allocation -> {
            allocation.setStatus("Discharged");

            Optional<Room> roomOpt = roomRepository.findByRoomNumber(allocation.getRoomNumber());
            if (roomOpt.isPresent()) {
                Room room = roomOpt.get();
                room.setOccupiedBeds(Math.max(0, room.getOccupiedBeds() - 1));
                room.setStatus("Available");
                roomRepository.save(room);
            }

            return allocationRepository.save(allocation);
        }).orElseThrow(() -> new RuntimeException("Allocation record not found: " + id));
    }
}