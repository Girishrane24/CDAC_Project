package com.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "appointments") // Correct MongoDB collection mapping
public class Appointment {

    @Id
    private String appointmentId; // MongoDB uses String IDs (ObjectIds)

    private String appointmentDate;
    private String appointmentTime;
    private String reason;
    private String status; // PENDING, CONFIRMED, COMPLETED, CANCELLED

    // --- Foreign Key Reference IDs (MongoDB NoSQL Pattern) ---
    private String patientId;
    private String doctorId;
    private String nurseId;
}