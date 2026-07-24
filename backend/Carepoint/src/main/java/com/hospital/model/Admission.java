package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "admissions") // Correct MongoDB collection annotation
public class Admission {

    @Id
    private String admissionId; // String auto-generates MongoDB ObjectIds

    private String admissionDate;
    private String dischargeDate; // Standard camelCase naming convention
    private String status;

    // --- MongoDB Relationship Options ---

    // Option A: Store Foreign Key IDs directly (Recommended for high performance)
    private String roomId;
    private String patientId;
    private String doctorId;
    private String nurseId;

    // For Many-to-Many inventory relationship, store a List of Item IDs:
    private List<String> inventoryItemIds;
}