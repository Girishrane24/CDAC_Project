package com.hospital.service;


import com.hospital.dto.AllocationRequestDTO;
import com.hospital.model.Allocation;
import com.hospital.model.Bed;
import com.hospital.model.Room;
import com.hospital.model.enumm.AllocationStatus;
import com.hospital.model.enumm.BedStatus;
import com.hospital.model.enumm.RoomStatus;
import com.hospital.repository.AllocationRepository;
import com.hospital.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RoomAllocationService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private AllocationRepository allocationRepository;

    @Transactional
    public Allocation allocateRoom(AllocationRequestDTO dto) {
        Room room = roomRepository.findById(dto.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        // Find the requested bed
        Bed targetBed = room.getBeds().stream()
                .filter(b -> b.getBedNumber().equalsIgnoreCase(dto.getBedNumber()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Bed not found in the specified room"));

        if (targetBed.getStatus() != BedStatus.VACANT) {
            throw new RuntimeException("Bed " + dto.getBedNumber() + " is currently not vacant");
        }

        // 1. Update Bed state
        targetBed.setStatus(BedStatus.OCCUPIED);
        targetBed.setCurrentOccupantId(dto.getOccupantId());

        // 2. Check if all beds are occupied, update room status accordingly
        boolean allOccupied = room.getBeds().stream().allMatch(b -> b.getStatus() == BedStatus.OCCUPIED);
        if (allOccupied) {
            room.setStatus(RoomStatus.OCCUPIED);
        }

        roomRepository.save(room);

        // 3. Create allocation record
        Allocation allocation = new Allocation();
        allocation.setRoomId(room.getId());
        allocation.setRoomNumber(room.getRoomNumber());
        allocation.setBedNumber(dto.getBedNumber());
        allocation.setOccupantId(dto.getOccupantId());
        allocation.setOccupantName(dto.getOccupantName());
        allocation.setCheckInDate(dto.getCheckInDate());
        allocation.setCheckOutDate(dto.getCheckOutDate());
        allocation.setStatus(AllocationStatus.ACTIVE);

        return allocationRepository.save(allocation);
    }

    @Transactional
    public Allocation checkout(String allocationId) {
        Allocation allocation = allocationRepository.findById(allocationId)
                .orElseThrow(() -> new RuntimeException("Allocation record not found"));

        allocation.setStatus(AllocationStatus.CHECKED_OUT);

        // Release the bed in the room
        Room room = roomRepository.findById(allocation.getRoomId()).orElse(null);
        if (room != null) {
            for (Bed bed : room.getBeds()) {
                if (bed.getBedNumber().equalsIgnoreCase(allocation.getBedNumber())) {
                    bed.setStatus(BedStatus.VACANT);
                    bed.setCurrentOccupantId(null);
                }
            }
            room.setStatus(RoomStatus.AVAILABLE);
            roomRepository.save(room);
        }

        return allocationRepository.save(allocation);
    }

    public List<Allocation> getAllActiveAllocations() {
        return allocationRepository.findAll();
    }
}