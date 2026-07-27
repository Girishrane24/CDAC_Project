package com.hospital.controller;


import com.hospital.model.Nurse;
import com.hospital.service.NurseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nurses")
public class NurseController {

    @Autowired
    private NurseService nurseService;

    @GetMapping
    public ResponseEntity<List<Nurse>> getAllNurses() {
        return ResponseEntity.ok(nurseService.getAllNurses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nurse> getNurseById(@PathVariable String id) {
        return nurseService.getNurseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Nurse> createNurse(@Valid @RequestBody Nurse nurse) {
        Nurse createdNurse = nurseService.createNurse(nurse);
        return new ResponseEntity<>(createdNurse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nurse> updateNurse(@PathVariable String id, @Valid @RequestBody Nurse nurse) {
        Nurse updatedNurse = nurseService.updateNurse(id, nurse);
        return ResponseEntity.ok(updatedNurse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNurse(@PathVariable String id) {
        nurseService.deleteNurse(id);
        return ResponseEntity.noContent().build();
    }
}