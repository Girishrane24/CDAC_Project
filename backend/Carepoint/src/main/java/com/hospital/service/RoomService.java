package com.hospital.service;


import com.hospital.dto.RoomRequestDTO;
import com.hospital.dto.RoomStatusSummaryDTO;
import com.hospital.model.Bed;
import com.hospital.model.Room;
import com.hospital.model.enumm.BedStatus;
import com.hospital.model.enumm.*;
import com.hospital.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    // Handles AddRoom
    public Room addRoom(RoomRequestDTO dto) {
        Room room = new Room();
        room.setRoomNumber(dto.getRoomNumber());
        room.setFloor(dto.getFloor());
        room.setRoomType(dto.getRoomType());
        room.setDailyRate(dto.getDailyRate());
        room.setAmenities(dto.getAmenities());
        room.setStatus(dto.getStatus() != null ? dto.getStatus() : RoomStatus.AVAILABLE);

        // Auto-populate beds based on totalBeds count
        List<Bed> beds = new ArrayList<>();
        int bedCount = dto.getTotalBeds() != null ? dto.getTotalBeds() : 1;
        for (int i = 1; i <= bedCount; i++) {
            beds.add(new Bed("B" + i, BedStatus.VACANT, null));
        }
        room.setBeds(beds);

        return roomRepository.save(room);
    }

    // Handles EditRoom
    public Room updateRoom(String id, RoomRequestDTO dto) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with ID: " + id));

        room.setRoomNumber(dto.getRoomNumber());
        room.setFloor(dto.getFloor());
        room.setRoomType(dto.getRoomType());
        room.setDailyRate(dto.getDailyRate());
        room.setAmenities(dto.getAmenities());
        if (dto.getStatus() != null) {
            room.setStatus(dto.getStatus());
        }

        return roomRepository.save(room);
    }

    // Handles RoomDetails
    public Room getRoomDetails(String id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with ID: " + id));
    }

    // Handles RoomList with Optional Filtering
    public List<Room> getAllRooms(RoomStatus status, Integer floor) {
        if (status != null) {
            return roomRepository.findByStatus(status);
        }
        if (floor != null) {
            return roomRepository.findByFloor(floor);
        }
        return roomRepository.findAll();
    }

    // Handles RoomStatus Dashboard Metrics
    public RoomStatusSummaryDTO getRoomStatusSummary() {
        List<Room> allRooms = roomRepository.findAll();
        RoomStatusSummaryDTO summary = new RoomStatusSummaryDTO();

        summary.setTotalRooms(allRooms.size());
        summary.setAvailableRooms(roomRepository.countByStatus(RoomStatus.AVAILABLE));
        summary.setOccupiedRooms(roomRepository.countByStatus(RoomStatus.OCCUPIED));
        summary.setUnderMaintenanceRooms(roomRepository.countByStatus(RoomStatus.UNDER_MAINTENANCE));
        summary.setCleaningNeededRooms(roomRepository.countByStatus(RoomStatus.CLEANING_NEEDED));

        long totalBeds = 0, vacantBeds = 0, occupiedBeds = 0;
        for (Room room : allRooms) {
            for (Bed bed : room.getBeds()) {
                totalBeds++;
                if (bed.getStatus() == BedStatus.VACANT) vacantBeds++;
                if (bed.getStatus() == BedStatus.OCCUPIED) occupiedBeds++;
            }
        }

        summary.setTotalBeds(totalBeds);
        summary.setVacantBeds(vacantBeds);
        summary.setOccupiedBeds(occupiedBeds);

        return summary;
    }

    public void deleteRoom(String id) {
        roomRepository.deleteById(id);
    }
}