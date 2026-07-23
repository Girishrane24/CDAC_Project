package com.hospital.controller;

import com.hospital.dto.DashboardDataDTO;
import com.entity.Appointment;
import com.hospital.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/dashboard")
@CrossOrigin(origins = "*") // Allows React dev server to communicate with backend without CORS issues
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    // Fetch unified dashboard data
    @GetMapping
    public ResponseEntity<DashboardDataDTO> getDashboardData() {
        return ResponseEntity.ok(dashboardService.getDashboardSummary());
    }

    // Handles "+ Add Appointment" button submit
    @PostMapping("/appointments")
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment savedAppointment = dashboardService.addAppointment(appointment);
        return ResponseEntity.ok(savedAppointment);
    }
}