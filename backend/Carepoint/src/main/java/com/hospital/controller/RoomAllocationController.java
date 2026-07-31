package com.hospital.controller;

import com.hospital.dto.RoomAllocationRequestDTO;
import com.hospital.model.RoomAllocation;
import com.hospital.service.RoomAllocationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room-allocations")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomAllocationController {

    @Autowired
    private RoomAllocationService allocationService;

    // Get all allocations
    @GetMapping
    public List<RoomAllocation> getAllAllocations() {
        return allocationService.getAllAllocations();
    }

    // Get allocation by ID
    @GetMapping("/{id}")
    public RoomAllocation getAllocationById(@PathVariable String id) {
        return allocationService.getAllocationById(id);
    }

    // Allocate room
    @PostMapping
    public RoomAllocation allocateRoom(
            @RequestBody RoomAllocationRequestDTO dto) {

        return allocationService.allocateRoom(dto);
    }

    // Discharge patient
    @PutMapping("/{id}/discharge")
    public RoomAllocation dischargePatient(
            @PathVariable String id) {

        return allocationService.dischargePatient(id);
    }

    // Delete allocation
    @DeleteMapping("/{id}")
    public String deleteAllocation(
            @PathVariable String id) {

        allocationService.deleteAllocation(id);

        return "Room allocation deleted successfully.";
    }
}