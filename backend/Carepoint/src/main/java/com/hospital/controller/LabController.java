package com.hospital.controller;

import com.hospital.model.Lab;
import com.hospital.service.LabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/labs")
@CrossOrigin(origins = "http://localhost:5173")
public class LabController {

    @Autowired
    private LabService labService;

    // Get All Laboratories
    @GetMapping
    public ResponseEntity<List<Lab>> getAllLabs() {

        return ResponseEntity.ok(
                labService.getAllLabs()
        );

    }

    // Get Laboratory By ID
    @GetMapping("/{id}")
    public ResponseEntity<Lab> getLabById(
            @PathVariable String id) {

        return labService.getLabById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }

    // Add Laboratory
    @PostMapping
    public ResponseEntity<Lab> addLab(
            @RequestBody Lab lab) {

        Lab savedLab = labService.addLab(lab);

        return new ResponseEntity<>(
                savedLab,
                HttpStatus.CREATED
        );

    }

    // Update Laboratory
    @PutMapping("/{id}")
    public ResponseEntity<Lab> updateLab(
            @PathVariable String id,
            @RequestBody Lab lab) {

        return ResponseEntity.ok(
                labService.updateLab(id, lab)
        );

    }

    // Delete Laboratory
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLab(
            @PathVariable String id) {

        labService.deleteLab(id);

        return ResponseEntity.noContent().build();

    }

}