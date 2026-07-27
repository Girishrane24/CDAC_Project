package com.hospital.controller;

import com.hospital.model.Bed;
import com.hospital.service.BedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/beds")
@CrossOrigin(origins = "*")
public class BedController {

    @Autowired
    private BedService bedService;

    @GetMapping
    public ResponseEntity<List<Bed>> getAllBeds() {
        return ResponseEntity.ok(bedService.getAllBeds());
    }

    @PostMapping
    public ResponseEntity<Bed> addBed(@RequestBody Bed bed) {
        return new ResponseEntity<>(bedService.addBed(bed), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/toggle-status")
    public ResponseEntity<Bed> toggleStatus(@PathVariable String id) {
        return ResponseEntity.ok(bedService.toggleBedStatus(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBed(@PathVariable String id) {
        bedService.deleteBed(id);
        return ResponseEntity.noContent().build();
    }
}