package com.hospital.controller;

import com.hospital.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired private PatientRepository patientRepository;
    @Autowired private DoctorRepository doctorRepository;
    @Autowired private AppointmentRepository appointmentRepository;
    @Autowired private RoomRepository roomRepository;

    @GetMapping("/summary")
    public ResponseEntity<Map<String, Object>> getSummary() {
        Map<String, Object> summary = new HashMap<>();
        summary.put("totalPatients", patientRepository.count());
        summary.put("totalDoctors", doctorRepository.count());
        summary.put("totalAppointments", appointmentRepository.count());
        summary.put("pendingAppointments", appointmentRepository.countByStatus("PENDING"));
        summary.put("recentAppointments", appointmentRepository.findTop10ByOrderByAppointmentDateDesc());
        return ResponseEntity.ok(summary);
    }
}