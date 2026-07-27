package com.hospital.service;


import com.hospital.model.Bed;
import com.hospital.model.Room;
import com.hospital.model.enumm.BedStatus;
import com.hospital.repository.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BedManagementService {

    @Autowired
    private RoomRepository roomRepository;

    public Room addBedToRoom(String roomId, String bedNumber) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        boolean exists = room.getBeds().stream().anyMatch(b -> b.getBedNumber().equalsIgnoreCase(bedNumber));
        if (exists) {
            throw new RuntimeException("Bed number already exists in this room");
        }

        room.getBeds().add(new Bed(bedNumber, BedStatus.VACANT, null));
        return roomRepository.save(room);
    }

    public Room updateBedStatus(String roomId, String bedNumber, BedStatus status) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        for (Bed bed : room.getBeds()) {
            if (bed.getBedNumber().equalsIgnoreCase(bedNumber)) {
                bed.setStatus(status);
                if (status == BedStatus.VACANT) {
                    bed.setCurrentOccupantId(null);
                }
            }
        }
        return roomRepository.save(room);
    }

    public Room removeBedFromRoom(String roomId, String bedNumber) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        room.getBeds().removeIf(b -> b.getBedNumber().equalsIgnoreCase(bedNumber));
        return roomRepository.save(room);
    }
}