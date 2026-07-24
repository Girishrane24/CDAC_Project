package com.hospital.service;


import com.hospital.model.Appointment;
import com.hospital.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    public Optional<Appointment> getAppointmentById(String id) {
        return repository.findById(id);
    }

    public List<Appointment> getAppointmentsByPatient(String patientId) {
        return repository.findByPatientId(patientId);
    }

    public List<Appointment> getAppointmentsByDoctor(String doctorId) {
        return repository.findByDoctorId(doctorId);
    }

    public Appointment createAppointment(Appointment appointment) {
        if (appointment.getStatus() == null || appointment.getStatus().isEmpty()) {
            appointment.setStatus("BOOKED");
        }
        return repository.save(appointment);
    }

    public Optional<Appointment> updateAppointment(String id, Appointment updated) {
        return repository.findById(id).map(existing -> {
            if (updated.getPatientId() != null) existing.setPatientId(updated.getPatientId());
            if (updated.getDoctorId() != null) existing.setDoctorId(updated.getDoctorId());
            if (updated.getAppointmentDate() != null) existing.setAppointmentDate(updated.getAppointmentDate());
            if (updated.getStatus() != null) existing.setStatus(updated.getStatus());
            if (updated.getNotes() != null) existing.setNotes(updated.getNotes());
            return repository.save(existing);
        });
    }

    public boolean deleteAppointment(String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}