package com.hospital.controller;

import com.hospital.model.Nurse;
import com.hospital.service.NurseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/nurses")
@CrossOrigin(origins = "http://localhost:5173")
public class NurseController {

    @Autowired
    private NurseService nurseService;

    // Get all nurses
    @GetMapping
    public ResponseEntity<List<Nurse>> getAllNurses() {
        return ResponseEntity.ok(nurseService.getAllNurses());
    }

    // Get nurse by ID
    @GetMapping("/{nurseId}")
    public ResponseEntity<Nurse> getNurseById(@PathVariable String nurseId) {
        return nurseService.getNurseById(nurseId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create nurse
    @PostMapping
    public ResponseEntity<Nurse> createNurse(@Valid @RequestBody Nurse nurse) {
        Nurse createdNurse = nurseService.createNurse(nurse);
        return new ResponseEntity<>(createdNurse, HttpStatus.CREATED);
    }

    // Update nurse
    @PutMapping("/{nurseId}")
    public ResponseEntity<Nurse> updateNurse(
            @PathVariable String nurseId,
            @Valid @RequestBody Nurse nurse) {

        Nurse updatedNurse = nurseService.updateNurse(nurseId, nurse);
        return ResponseEntity.ok(updatedNurse);
    }

    // Delete nurse
    @DeleteMapping("/{nurseId}")
    public ResponseEntity<Void> deleteNurse(@PathVariable String nurseId) {
        nurseService.deleteNurse(nurseId);
        return ResponseEntity.noContent().build();
    }
}