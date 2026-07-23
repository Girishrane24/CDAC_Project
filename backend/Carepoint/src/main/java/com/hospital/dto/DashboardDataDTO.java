package com.hospital.dto;

import com.entity.Appointment;
import lombok.Data;
import lombok.AllArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
public class DashboardDataDTO {
    private CardMetrics metrics;
    private List<ChartPoint> revenueData;
    private List<ChartPoint> patientData;
    private List<Appointment> recentAppointments;

    @Data
    @AllArgsConstructor
    public static class CardMetrics {
        private long totalPatients;
        private long totalAppointments;
        private double totalRevenue;
        private long pendingAppointments;
    }

    @Data
    @AllArgsConstructor
    public static class ChartPoint {
        private String month;
        private double value;
    }
}