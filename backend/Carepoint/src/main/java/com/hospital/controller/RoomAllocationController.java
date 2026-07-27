package com.hospital.controller;

import com.hospital.model.RoomAllocation;
import com.hospital.service.RoomAllocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room-allocations")
//@CrossOrigin(origins = "*")
public class RoomAllocationController {

    @Autowired
    private RoomAllocationService allocationService;

    @GetMapping
    public ResponseEntity<List<RoomAllocation>> getAllAllocations() {
        return ResponseEntity.ok(allocationService.getAllAllocations());
    }

    @PostMapping
    public ResponseEntity<RoomAllocation> allocateRoom(@RequestBody RoomAllocation allocation) {
        return new ResponseEntity<>(allocationService.allocateRoom(allocation), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/discharge")
    public ResponseEntity<RoomAllocation> dischargePatient(@PathVariable String id) {
        return ResponseEntity.ok(allocationService.dischargePatient(id));
    }
}