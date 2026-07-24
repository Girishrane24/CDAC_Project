package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "appointments")
public class Appointment {

    @Id
    private String appointmentId;

    private String appointmentDate;
    private String appointmentTime;
    private String reason;
    private String status; // PENDING, CONFIRMED, COMPLETED, CANCELLED

    // Foreign Key Reference IDs
    private String patientId;
    private String doctorId;
    private String nurseId;

    // Explicit Getters and Setters to avoid Lombok compilation issues
    public String getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
    }

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
    
    
}