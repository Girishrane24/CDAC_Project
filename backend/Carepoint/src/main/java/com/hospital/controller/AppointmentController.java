package com.hospital.controller;


import com.hospital.model.Appointment;
import com.hospital.repository.AppointmentRepository;
//import com.hospital.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:3000") // React default port
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // 1. Get All Appointments (Used by AppointmentList.jsx)
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // 2. Get Single Appointment (Used by AppointmentDetails.jsx)
    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable String id) {
        return appointmentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. Create Appointment (Used by BookAppointment.jsx)
    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        if (appointment.getStatus() == null) {
            appointment.setStatus("BOOKED");
        }
        return appointmentRepository.save(appointment);
    }

    // 4. Update Appointment (Used by EditAppointment.jsx)
    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateAppointment(
            @PathVariable String id, 
            @RequestBody Appointment updatedData) {
        
        return appointmentRepository.findById(id).map(appointment -> {
            appointment.setTitle(updatedData.getTitle());
            appointment.setClientName(updatedData.getClientName());
            appointment.setClientEmail(updatedData.getClientEmail());
            appointment.setAppointmentTime(updatedData.getAppointmentTime());
            appointment.setStatus(updatedData.getStatus());
            appointment.setNotes(updatedData.getNotes());
            Appointment saved = appointmentRepository.save(appointment);
            return ResponseEntity.ok(saved);
        }).orElse(ResponseEntity.notFound().build());
    }

    // 5. Delete Appointment
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable String id) {
        if (appointmentRepository.existsById(id)) {
            appointmentRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}