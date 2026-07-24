package com.hospital.controller;

import com.hospital.model.Patient;
import com.hospital.repository.PatientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    private final PatientRepository repository;

    public PatientController(PatientRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Patient> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getById(@PathVariable String id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Patient create(@RequestBody Patient patient) {
        return repository.save(patient);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@PathVariable String id, @RequestBody Patient updated) {
        return repository.findById(id).map(existing -> {
            existing.setName(updated.getName());
            existing.setAge(updated.getAge());
            existing.setGender(updated.getGender());
            existing.setContactNumber(updated.getContactNumber());
            existing.setEmail(updated.getEmail());
            existing.setAddress(updated.getAddress());
            existing.setMedicalHistory(updated.getMedicalHistory());
            return ResponseEntity.ok(repository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}