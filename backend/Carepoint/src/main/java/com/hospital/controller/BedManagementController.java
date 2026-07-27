package com.hospital.controller;

import com.hospital.model.Room;
import com.hospital.model.enumm.BedStatus;
import com.hospital.service.BedManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rooms/{roomId}/beds")
@CrossOrigin(origins = "*")
public class BedManagementController {

    @Autowired
    private BedManagementService bedService;

    @PostMapping
    public ResponseEntity<Room> addBed(@PathVariable String roomId, @RequestParam String bedNumber) {
        return ResponseEntity.ok(bedService.addBedToRoom(roomId, bedNumber));
    }

    @PatchMapping("/{bedNumber}/status")
    public ResponseEntity<Room> updateBedStatus(
            @PathVariable String roomId,
            @PathVariable String bedNumber,
            @RequestParam BedStatus status) {
        return ResponseEntity.ok(bedService.updateBedStatus(roomId, bedNumber, status));
    }

    @DeleteMapping("/{bedNumber}")
    public ResponseEntity<Room> removeBed(@PathVariable String roomId, @PathVariable String bedNumber) {
        return ResponseEntity.ok(bedService.removeBedFromRoom(roomId, bedNumber));
    }
}