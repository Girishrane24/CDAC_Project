package com.hospital.service;

import com.hospital.model.Doctor;
import com.hospital.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    private final DoctorRepository repository;

    public DoctorService(DoctorRepository repository) {
        this.repository = repository;
    }

    public List<Doctor> getAllDoctors() {
        return repository.findAll();
    }

    public Optional<Doctor> getDoctorById(String id) {
        return repository.findById(id);
    }

    public List<Doctor> searchBySpecialization(String specialization) {
        return repository.findBySpecializationContainingIgnoreCase(specialization);
    }

    public List<Doctor> searchByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    public Doctor createDoctor(Doctor doctor) {
        return repository.save(doctor);
    }

    public Optional<Doctor> updateDoctor(String id, Doctor updated) {
        return repository.findById(id).map(existing -> {
            if (updated.getName() != null) existing.setName(updated.getName());
            if (updated.getSpecialization() != null) existing.setSpecialization(updated.getSpecialization());
            if (updated.getQualification() != null) existing.setQualification(updated.getQualification());
            if (updated.getContactNumber() != null) existing.setContactNumber(updated.getContactNumber());
            if (updated.getEmail() != null) existing.setEmail(updated.getEmail());
            if (updated.getAvailableDays() != null) existing.setAvailableDays(updated.getAvailableDays());
            return repository.save(existing);
        });
    }

    public boolean deleteDoctor(String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}