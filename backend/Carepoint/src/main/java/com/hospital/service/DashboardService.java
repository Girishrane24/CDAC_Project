package com.hospital.service;


import com.hospital.dto.DashboardDataDTO;
import com.entity.Appointment;
import com.hospital.repository.AppointmentRepository;
import com.hospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PatientRepository patientRepository; // Assuming PatientRepository is defined

    public DashboardDataDTO getDashboardSummary() {
        // 1. Calculate Summary Cards Metrics
        long totalAppointments = appointmentRepository.count();
        long pendingAppointments = appointmentRepository.countByStatus("PENDING");
        long totalPatients = patientRepository.count();

        List<Appointment> allAppointments = appointmentRepository.findAll();
        double totalRevenue = allAppointments.stream()
                .mapToDouble(a -> a.getFee() != null ? a.getFee() : 0.0)
                .sum();

        DashboardDataDTO.CardMetrics metrics = new DashboardDataDTO.CardMetrics(
                totalPatients, totalAppointments, totalRevenue, pendingAppointments
        );

        // 2. Prepare Data for RevenueChart & PatientChart
        List<DashboardDataDTO.ChartPoint> revenueChart = Arrays.asList(
                new DashboardDataDTO.ChartPoint("Jan", 4000.0),
                new DashboardDataDTO.ChartPoint("Feb", 3000.0),
                new DashboardDataDTO.ChartPoint("Mar", 5000.0),
                new DashboardDataDTO.ChartPoint("Apr", 7000.0)
        );

        List<DashboardDataDTO.ChartPoint> patientChart = Arrays.asList(
                new DashboardDataDTO.ChartPoint("Jan", 120.0),
                new DashboardDataDTO.ChartPoint("Feb", 150.0),
                new DashboardDataDTO.ChartPoint("Mar", 180.0),
                new DashboardDataDTO.ChartPoint("Apr", 220.0)
        );

        // 3. Fetch Recent Appointments for AppointmentTable
        List<Appointment> recentAppointments = appointmentRepository.findTop10ByOrderByAppointmentDateDesc();

        return new DashboardDataDTO(metrics, revenueChart, patientChart, recentAppointments);
    }

    public Appointment addAppointment(Appointment appointment) {
        if (appointment.getStatus() == null) {
            appointment.setStatus("PENDING");
        }
        return appointmentRepository.save(appointment);
    }
}