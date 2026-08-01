package com.hospital.service;

import com.hospital.model.LabTest;
import com.hospital.repository.LabTestRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabTestService {

    private final LabTestRepository repository;

    public LabTestService(LabTestRepository repository) {
        this.repository = repository;
    }

    // Get All
    public List<LabTest> getAllLabTests() {
        return repository.findAll();
    }

    // Get By Mongo Id
    public Optional<LabTest> getLabTestById(String id) {
        return repository.findById(id);
    }

    // Save
    public LabTest saveLabTest(LabTest labTest) {
        return repository.save(labTest);
    }

    // Update
    public LabTest updateLabTest(String id, LabTest updatedLabTest) {

        LabTest existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lab Test not found"));

        existing.setLabTestId(updatedLabTest.getLabTestId());

        existing.setAppointmentId(updatedLabTest.getAppointmentId());

        existing.setPatientId(updatedLabTest.getPatientId());
        existing.setPatientName(updatedLabTest.getPatientName());

        existing.setLabId(updatedLabTest.getLabId());
        existing.setLabName(updatedLabTest.getLabName());

        existing.setDoctorName(updatedLabTest.getDoctorName());

        existing.setTestName(updatedLabTest.getTestName());
        existing.setSampleType(updatedLabTest.getSampleType());

        existing.setTestDate(updatedLabTest.getTestDate());

        existing.setResult(updatedLabTest.getResult());

        existing.setStatus(updatedLabTest.getStatus());

        existing.setPrice(updatedLabTest.getPrice());

        return repository.save(existing);
    }

    // Delete
    public void deleteLabTest(String id) {
        repository.deleteById(id);
    }

    // Search by Patient
    public List<LabTest> getByPatientId(String patientId) {
        return repository.findByPatientId(patientId);
    }

    // Search by Appointment
    public List<LabTest> getByAppointmentId(String appointmentId) {
        return repository.findByAppointmentId(appointmentId);
    }

    // Search by Lab
    public List<LabTest> getByLabId(String labId) {
        return repository.findByLabId(labId);
    }

    // Search by Status
    public List<LabTest> getByStatus(String status) {
        return repository.findByStatus(status);
    }
}