package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "lab_tests") // MongoDB collection annotation
public class LabTest {

    @Id
    private String labTestId; // MongoDB uses String ObjectIds by default

    private String testName;
    private String sampleType;
    private String testDate;
    private String result; // Fixed camelCase naming (lowercase 'r')
    private String status;

    // --- Foreign Key Reference IDs (MongoDB NoSQL Pattern) ---
    private String labId;
    private String appointmentId;
    private String patientId;
}