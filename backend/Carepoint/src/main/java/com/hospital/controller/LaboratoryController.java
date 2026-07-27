package com.hospital.controller;


import com.hospital.model.Laboratory;
import com.hospital.service.LaboratoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laboratories")
//@CrossOrigin(origins = "*") // Adjust origin port as needed (e.g., http://localhost:5173)
public class LaboratoryController {

    @Autowired
    private LaboratoryService service;

    // GET /api/laboratories
    @GetMapping
    public ResponseEntity<List<Laboratory>> getAllLaboratories() {
        return ResponseEntity.ok(service.getAllLaboratories());
    }

    // GET /api/laboratories/{labId}
    @GetMapping("/{labId}")
    public ResponseEntity<Laboratory> getLaboratoryById(@PathVariable String labId) {
        return service.getLaboratoryByLabId(labId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/laboratories
    @PostMapping
    public ResponseEntity<Laboratory> createLaboratory(@RequestBody Laboratory lab) {
        Laboratory createdLab = service.createLaboratory(lab);
        return new ResponseEntity<>(createdLab, HttpStatus.CREATED);
    }

    // PUT /api/laboratories/{labId}
    @PutMapping("/{labId}")
    public ResponseEntity<Laboratory> updateLaboratory(@PathVariable String labId, @RequestBody Laboratory lab) {
        try {
            Laboratory updated = service.updateLaboratory(labId, lab);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE /api/laboratories/{labId}
    @DeleteMapping("/{labId}")
    public ResponseEntity<Void> deleteLaboratory(@PathVariable String labId) {
        service.deleteLaboratory(labId);
        return ResponseEntity.noContent().build();
    }
}