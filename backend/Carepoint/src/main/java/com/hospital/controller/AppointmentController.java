package com.hospital.controller;

import com.hospital.model.Appointment;
import com.hospital.service.AppointmentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {

        return ResponseEntity.ok(
                appointmentService.getAllAppointments());

    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(
            @PathVariable String id) {

        return appointmentService.getAppointmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }

    @GetMapping("/patient/{patientName}")
    public ResponseEntity<List<Appointment>> getAppointmentsByPatient(
            @PathVariable String patientName) {

        return ResponseEntity.ok(
                appointmentService.getAppointmentsByPatient(patientName));

    }

    @GetMapping("/date/{date}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDate(

            @PathVariable
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate date) {

        return ResponseEntity.ok(
                appointmentService.getAppointmentsByDate(date));

    }

    @PostMapping
    public ResponseEntity<?> scheduleAppointment(
            @Valid @RequestBody Appointment appointment) {

        try {

            Appointment created =
                    appointmentService.scheduleAppointment(appointment);

            return new ResponseEntity<>(created, HttpStatus.CREATED);

        } catch (IllegalArgumentException ex) {

            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("error", ex.getMessage()));

        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateAppointment(

            @PathVariable String id,

            @Valid @RequestBody Appointment appointment) {

        return ResponseEntity.ok(
                appointmentService.updateAppointmentDetails(
                        id,
                        appointment));

    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Appointment> updateStatus(

            @PathVariable String id,

            @RequestBody Map<String, String> body) {

        return ResponseEntity.ok(
                appointmentService.updateAppointmentStatus(
                        id,
                        body.get("status")));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelAppointment(
            @PathVariable String id) {

        appointmentService.cancelAppointment(id);

        return ResponseEntity.noContent().build();

    }

}