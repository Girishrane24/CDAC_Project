package com.hospital.service;

import com.hospital.model.Appointment;
import com.hospital.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(String id) {
        return appointmentRepository.findById(id);
    }

    public List<Appointment> getAppointmentsByPatient(String patientId) {
        return appointmentRepository.findByPatientId(patientId);
    }

    public List<Appointment> getAppointmentsByDate(LocalDate date) {
        return appointmentRepository.findByAppointmentDate(date);
    }

    public Appointment scheduleAppointment(Appointment appointment) {
        // Prevent double booking for the same provider at the exact date and time
        List<Appointment> existingAppointments = appointmentRepository
                .findByAssignedProviderIdAndAppointmentDate(
                        appointment.getAssignedProviderId(), 
                        appointment.getAppointmentDate()
                );

        boolean isSlotTaken = existingAppointments.stream()
                .anyMatch(a -> a.getAppointmentTime().equals(appointment.getAppointmentTime()) 
                            && !"CANCELLED".equalsIgnoreCase(a.getStatus()));

        if (isSlotTaken) {
            throw new IllegalArgumentException("The selected provider is already booked for this time slot.");
        }

        if (appointment.getStatus() == null) {
            appointment.setStatus("SCHEDULED");
        }

        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointmentStatus(String id, String status) {
        return appointmentRepository.findById(id).map(appointment -> {
            appointment.setStatus(status.toUpperCase());
            return appointmentRepository.save(appointment);
        }).orElseThrow(() -> new RuntimeException("Appointment not found with id: " + id));
    }

    public Appointment updateAppointmentDetails(String id, Appointment updatedDetails) {
        return appointmentRepository.findById(id).map(appointment -> {
            appointment.setAppointmentDate(updatedDetails.getAppointmentDate());
            appointment.setAppointmentTime(updatedDetails.getAppointmentTime());
            appointment.setAssignedProviderId(updatedDetails.getAssignedProviderId());
            appointment.setAssignedProviderName(updatedDetails.getAssignedProviderName());
            appointment.setDepartment(updatedDetails.getDepartment());
            appointment.setReasonForVisit(updatedDetails.getReasonForVisit());
            appointment.setNotes(updatedDetails.getNotes());
            if (updatedDetails.getStatus() != null) {
                appointment.setStatus(updatedDetails.getStatus());
            }
            return appointmentRepository.save(appointment);
        }).orElseThrow(() -> new RuntimeException("Appointment not found with id: " + id));
    }

    public void cancelAppointment(String id) {
        appointmentRepository.findById(id).ifPresent(appointment -> {
            appointment.setStatus("CANCELLED");
            appointmentRepository.save(appointment);
        });
    }
}