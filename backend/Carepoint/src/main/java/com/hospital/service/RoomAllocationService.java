package com.hospital.service;

import com.hospital.dto.RoomAllocationRequestDTO;
import com.hospital.model.Room;
import com.hospital.model.RoomAllocation;
import com.hospital.repository.RoomAllocationRepository;
import com.hospital.repository.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomAllocationService {

    @Autowired
    private RoomAllocationRepository allocationRepository;

    @Autowired
    private RoomRepository roomRepository;

    // Get all allocations
    public List<RoomAllocation> getAllAllocations() {
        return allocationRepository.findAll();
    }

    // Get allocation by ID
    public RoomAllocation getAllocationById(String id) {
        return allocationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Allocation not found."));
    }

    // Allocate room
    public RoomAllocation allocateRoom(RoomAllocationRequestDTO dto) {

        Room room = roomRepository.findById(dto.getRoomId())
                .orElseThrow(() ->
                        new RuntimeException("Room not found."));

        if (!"Available".equalsIgnoreCase(room.getStatus())) {
            throw new RuntimeException("Room is not available.");
        }

        RoomAllocation allocation = new RoomAllocation();

        allocation.setPatientId(dto.getPatientId());
        allocation.setPatientName(dto.getPatientName());

        allocation.setRoomId(room.getId());
        allocation.setRoomNumber(room.getRoomNumber());
        allocation.setRoomType(room.getRoomType());

        allocation.setAdmissionDate(dto.getAdmissionDate());
        allocation.setDischargeDate(dto.getDischargeDate());

        allocation.setStatus("Allocated");

        room.setStatus("Occupied");

        roomRepository.save(room);

        return allocationRepository.save(allocation);
    }

    // Discharge patient
    public RoomAllocation dischargePatient(String id) {

        RoomAllocation allocation = getAllocationById(id);

        Room room = roomRepository.findById(allocation.getRoomId())
                .orElseThrow(() ->
                        new RuntimeException("Room not found."));

        allocation.setStatus("Discharged");

        room.setStatus("Available");

        roomRepository.save(room);

        return allocationRepository.save(allocation);
    }

    // Delete allocation
    public void deleteAllocation(String id) {

        RoomAllocation allocation = getAllocationById(id);

        allocationRepository.delete(allocation);
    }
}