package com.hospital.controller;


import com.hospital.model.Room;
import com.hospital.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room-status")
public class RoomStatusController {

    @Autowired
    private RoomService roomService;

    // GET /api/room-status - Fetches all room statuses for the grid table
    @GetMapping
    public ResponseEntity<List<Room>> getAllRoomStatuses() {
        return ResponseEntity.ok(roomService.getAllRooms());
    }
    /*
    // GET /api/room-status/summary - Fetches pre-calculated card totals
    @GetMapping("/summary")
    public ResponseEntity<RoomStatusSummaryDto> getRoomStatusSummary() {
        return ResponseEntity.ok(roomService.getRoomStatusSummary());
    }
    */
}