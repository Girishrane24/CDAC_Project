package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Document(collection = "appointments")
public class Appointment {

    @Id
    private String id;

//    @NotBlank(message = "Patient ID is required")
    private String patientId;

//    @NotBlank(message = "Patient Name is required")
    private String patientName;

    private String patientPhone;

//    @NotBlank(message = "Doctor/Nurse ID is required")
    private String assignedProviderId;

    private String assignedProviderName; // e.g., "Dr. Smith" or "Nurse Sarah"

//    @NotBlank(message = "Department is required")
    private String department; // e.g., Cardiology, Emergency, Pediatrics

//    @NotNull(message = "Appointment Date is required")
//    @FutureOrPresent(message = "Appointment date cannot be in the past")
    private LocalDate appointmentDate;

//    @NotNull(message = "Appointment Time slot is required")
    private LocalTime appointmentTime;

    private String appointmentType; // CONSULTATION, FOLLOW_UP, ROUTINE_CHECKUP, VACCINATION
    private String status; // SCHEDULED, COMPLETED, CANCELLED, NO_SHOW
    private String reasonForVisit;
    private String notes;

    private LocalDateTime createdAt = LocalDateTime.now();

    public Appointment() {}

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public String getPatientPhone() { return patientPhone; }
    public void setPatientPhone(String patientPhone) { this.patientPhone = patientPhone; }

    public String getAssignedProviderId() { return assignedProviderId; }
    public void setAssignedProviderId(String assignedProviderId) { this.assignedProviderId = assignedProviderId; }

    public String getAssignedProviderName() { return assignedProviderName; }
    public void setAssignedProviderName(String assignedProviderName) { this.assignedProviderName = assignedProviderName; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public LocalDate getAppointmentDate() { return appointmentDate; }
    public void setAppointmentDate(LocalDate appointmentDate) { this.appointmentDate = appointmentDate; }

    public LocalTime getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(LocalTime appointmentTime) { this.appointmentTime = appointmentTime; }

    public String getAppointmentType() { return appointmentType; }
    public void setAppointmentType(String appointmentType) { this.appointmentType = appointmentType; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getReasonForVisit() { return reasonForVisit; }
    public void setReasonForVisit(String reasonForVisit) { this.reasonForVisit = reasonForVisit; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}