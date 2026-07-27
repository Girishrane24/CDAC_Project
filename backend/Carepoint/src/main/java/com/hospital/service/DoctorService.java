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

    public Optional<Doctor> updateDoctor(String id, Doctor updatedDoctor) {

        return repository.findById(id).map(existingDoctor -> {

            existingDoctor.setName(updatedDoctor.getName());
            existingDoctor.setSpecialization(updatedDoctor.getSpecialization());
            existingDoctor.setQualification(updatedDoctor.getQualification());
            existingDoctor.setExperience(updatedDoctor.getExperience());
            existingDoctor.setGender(updatedDoctor.getGender());
            existingDoctor.setPhone(updatedDoctor.getPhone());
            existingDoctor.setEmail(updatedDoctor.getEmail());
            existingDoctor.setAddress(updatedDoctor.getAddress());
            existingDoctor.setConsultationFee(updatedDoctor.getConsultationFee());
            existingDoctor.setStatus(updatedDoctor.getStatus());

            return repository.save(existingDoctor);
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
