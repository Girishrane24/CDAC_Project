package com.hospital.controller;


import com.hospital.dto.AllocationRequestDTO;
import com.hospital.model.Allocation;
import com.hospital.service.RoomAllocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/allocations")
@CrossOrigin(origins = "*")
public class RoomAllocationController {

    @Autowired
    private RoomAllocationService allocationService;

    // Page: RoomAllocation (Assign room/bed to user)
    @PostMapping
    public ResponseEntity<Allocation> allocate(@RequestBody AllocationRequestDTO dto) {
        return ResponseEntity.ok(allocationService.allocateRoom(dto));
    }

    // Checkout / Release bed
    @PostMapping("/{allocationId}/checkout")
    public ResponseEntity<Allocation> checkout(@PathVariable String allocationId) {
        return ResponseEntity.ok(allocationService.checkout(allocationId));
    }

    @GetMapping
    public ResponseEntity<List<Allocation>> getAllAllocations() {
        return ResponseEntity.ok(allocationService.getAllActiveAllocations());
    }
}