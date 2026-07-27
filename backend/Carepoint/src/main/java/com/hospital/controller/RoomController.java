package com.hospital.controller;

import com.hospital.dto.RoomRequestDTO;
import com.hospital.dto.RoomStatusSummaryDTO;
import com.hospital.model.Room;
import com.hospital.model.enumm.RoomStatus;
import com.hospital.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "*") // Connect with React frontend
public class RoomController {

    @Autowired
    private RoomService roomService;

    // Page: AddRoom
    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody RoomRequestDTO dto) {
        return ResponseEntity.ok(roomService.addRoom(dto));
    }

    // Page: EditRoom
    @PutMapping("/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable String id, @RequestBody RoomRequestDTO dto) {
        return ResponseEntity.ok(roomService.updateRoom(id, dto));
    }

    // Page: RoomDetails
    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoomDetails(@PathVariable String id) {
        return ResponseEntity.ok(roomService.getRoomDetails(id));
    }

    // Page: RoomList (supports filtering ?status=AVAILABLE&floor=2)
    @GetMapping
    public ResponseEntity<List<Room>> getAllRooms(
            @RequestParam(required = false) RoomStatus status,
            @RequestParam(required = false) Integer floor) {
        return ResponseEntity.ok(roomService.getAllRooms(status, floor));
    }

    // Page: RoomStatus (Dashboard metrics)
    @GetMapping("/status-summary")
    public ResponseEntity<RoomStatusSummaryDTO> getRoomStatusSummary() {
        return ResponseEntity.ok(roomService.getRoomStatusSummary());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable String id) {
        roomService.deleteRoom(id);
        return ResponseEntity.noContent().build();
    }
}