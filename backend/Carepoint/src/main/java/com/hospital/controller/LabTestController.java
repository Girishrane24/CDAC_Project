package com.hospital.controller;

import com.hospital.model.LabTest;
import com.hospital.service.LabTestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/labtests")
@CrossOrigin(origins = "http://localhost:5173")
public class LabTestController {

    private final LabTestService service;

    public LabTestController(LabTestService service) {
        this.service = service;
    }

    // Get All Lab Tests
    @GetMapping
    public List<LabTest> getAllLabTests() {
        return service.getAllLabTests();
    }

    // Get Lab Test by Mongo ID
    @GetMapping("/{id}")
    public ResponseEntity<LabTest> getLabTestById(@PathVariable String id) {

        return service.getLabTestById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create Lab Test
    @PostMapping
    public ResponseEntity<LabTest> createLabTest(@RequestBody LabTest labTest) {

        LabTest saved = service.saveLabTest(labTest);

        return ResponseEntity.ok(saved);
    }

    // Update Lab Test
    @PutMapping("/{id}")
    public ResponseEntity<LabTest> updateLabTest(
            @PathVariable String id,
            @RequestBody LabTest labTest) {

        LabTest updated = service.updateLabTest(id, labTest);

        return ResponseEntity.ok(updated);
    }

    // Delete Lab Test
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLabTest(@PathVariable String id) {

        service.deleteLabTest(id);

        return ResponseEntity.noContent().build();
    }

    // Search by Patient
    @GetMapping("/patient/{patientId}")
    public List<LabTest> getByPatient(@PathVariable String patientId) {
        return service.getByPatientId(patientId);
    }

    // Search by Appointment
    @GetMapping("/appointment/{appointmentId}")
    public List<LabTest> getByAppointment(@PathVariable String appointmentId) {
        return service.getByAppointmentId(appointmentId);
    }

    // Search by Laboratory
    @GetMapping("/lab/{labId}")
    public List<LabTest> getByLab(@PathVariable String labId) {
        return service.getByLabId(labId);
    }

    // Search by Status
    @GetMapping("/status/{status}")
    public List<LabTest> getByStatus(@PathVariable String status) {
        return service.getByStatus(status);
    }

}