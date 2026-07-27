package com.hospital.controller;


import com.hospital.dto.LabResultUpdateDTO;
import com.hospital.dto.LabTestRequestDTO;
import com.hospital.model.LabTest;
import com.hospital.service.LabTestService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lab-tests")
@CrossOrigin(origins = "*")
public class LabTestController {

    private final LabTestService labTestService;

    @Autowired
    public LabTestController(LabTestService labTestService) {
        this.labTestService = labTestService;
    }

    @GetMapping
    public ResponseEntity<List<LabTest>> getAllLabTests() {
        return ResponseEntity.ok(labTestService.getAllLabTests());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LabTest> getLabTestById(@PathVariable String id) {
        return ResponseEntity.ok(labTestService.getLabTestById(id));
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<LabTest>> getTestsByPatientId(@PathVariable String patientId) {
        return ResponseEntity.ok(labTestService.getTestsByPatientId(patientId));
    }

    @PostMapping
    public ResponseEntity<LabTest> createLabTest(@Valid @RequestBody LabTestRequestDTO dto) {
        return new ResponseEntity<>(labTestService.createLabTest(dto), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/results")
    public ResponseEntity<LabTest> updateTestResult(
            @PathVariable String id, 
            @Valid @RequestBody LabResultUpdateDTO dto) {
        return ResponseEntity.ok(labTestService.updateTestResult(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLabTest(@PathVariable String id) {
        labTestService.deleteLabTest(id);
        return ResponseEntity.noContent().build();
    }
}