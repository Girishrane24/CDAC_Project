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

    public List<Appointment> getAppointmentsByPatient(String patientName) {
        return appointmentRepository.findByPatientName(patientName);
    }

    public List<Appointment> getAppointmentsByDate(LocalDate date) {
        return appointmentRepository.findByAppointmentDate(date);
    }

    public Appointment scheduleAppointment(Appointment appointment) {

        List<Appointment> existingAppointments =
                appointmentRepository.findByDoctorNameAndAppointmentDate(
                        appointment.getDoctorName(),
                        appointment.getAppointmentDate());

        boolean slotTaken = existingAppointments.stream()
                .anyMatch(a ->
                        a.getAppointmentTime().equals(appointment.getAppointmentTime())
                                && !"Cancelled".equalsIgnoreCase(a.getStatus()));

        if (slotTaken) {
            throw new IllegalArgumentException(
                    "Doctor is already booked for this time slot.");
        }

        if (appointment.getStatus() == null ||
                appointment.getStatus().isBlank()) {

            appointment.setStatus("Pending");
        }

        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointmentStatus(String id, String status) {

        return appointmentRepository.findById(id)
                .map(appointment -> {

                    appointment.setStatus(status);

                    return appointmentRepository.save(appointment);

                })
                .orElseThrow(() ->
                        new RuntimeException(
                                "Appointment not found with id : " + id));
    }

    public Appointment updateAppointmentDetails(
            String id,
            Appointment updatedAppointment) {

        return appointmentRepository.findById(id)
                .map(appointment -> {

                    appointment.setPatientName(updatedAppointment.getPatientName());

                    appointment.setDoctorName(updatedAppointment.getDoctorName());

                    appointment.setDepartment(updatedAppointment.getDepartment());

                    appointment.setAppointmentDate(updatedAppointment.getAppointmentDate());

                    appointment.setAppointmentTime(updatedAppointment.getAppointmentTime());

                    appointment.setReason(updatedAppointment.getReason());

                    appointment.setStatus(updatedAppointment.getStatus());

                    return appointmentRepository.save(appointment);

                })
                .orElseThrow(() ->
                        new RuntimeException(
                                "Appointment not found with id : " + id));
    }

    public void cancelAppointment(String id) {

        if (!appointmentRepository.existsById(id)) {
            throw new RuntimeException("Appointment not found with id: " + id);
        }

        appointmentRepository.deleteById(id);
    }

}