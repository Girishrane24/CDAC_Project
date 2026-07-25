package com.hospital.controller;

import com.hospital.model.Patient;
import com.hospital.service.PatientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {

    @Autowired
    private PatientService service;

    // Get All Patients
    @GetMapping
    public List<Patient> getAll() {
        return service.getAllPatients();
    }

    // Get Patient By Id
    @GetMapping("/{id}")
    public ResponseEntity<Patient> getById(@PathVariable String id) {
        return service.getPatient(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Add Patient
    @PostMapping
    public Patient create(@RequestBody Patient patient) {
        return service.savePatient(patient);
    }

    // Update Patient
    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@PathVariable String id,
                                          @RequestBody Patient updated) {

        return service.getPatient(id).map(existing -> {

            existing.setFirstName(updated.getFirstName());
            existing.setLastName(updated.getLastName());
            existing.setGender(updated.getGender());
            existing.setPhone(updated.getPhone());
            existing.setEmail(updated.getEmail());
            existing.setAddress(updated.getAddress());
            existing.setDob(updated.getDob());
            existing.setBloodGroup(updated.getBloodGroup());

            return ResponseEntity.ok(service.savePatient(existing));

        }).orElse(ResponseEntity.notFound().build());
    }

    // Delete Patient
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {

        if (service.getPatient(id).isPresent()) {
            service.deletePatient(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}