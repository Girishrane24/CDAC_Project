package com.hospital.controller;

import com.hospital.model.Appointment;
import com.hospital.service.AppointmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    // GET /appointments - Fetch all appointments
    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok(service.getAllAppointments());
    }

    // GET /appointments/{id} - Fetch single appointment
    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable String id) {
        return service.getAppointmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // GET /appointments/patient/{patientId} - Fetch by patient
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Appointment>> getByPatientId(@PathVariable String patientId) {
        return ResponseEntity.ok(service.getAppointmentsByPatient(patientId));
    }

    // GET /appointments/doctor/{doctorId} - Fetch by doctor
    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Appointment>> getByDoctorId(@PathVariable String doctorId) {
        return ResponseEntity.ok(service.getAppointmentsByDoctor(doctorId));
    }

    // POST /appointments - Create a new appointment
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment saved = service.createAppointment(appointment);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // PUT /appointments/{id} - Update an existing appointment
    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateAppointment(
            @PathVariable String id, 
            @RequestBody Appointment appointment) {
        return service.updateAppointment(id, appointment)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /appointments/{id} - Delete/Cancel appointment
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable String id) {
        if (service.deleteAppointment(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}