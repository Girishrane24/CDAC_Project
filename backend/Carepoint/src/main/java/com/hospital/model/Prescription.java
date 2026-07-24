package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "prescriptions") // MongoDB collection annotation
public class Prescription {

    @Id
    private String prescriptionId; // MongoDB uses String ObjectIds by default

    // --- Foreign Key Reference IDs (MongoDB NoSQL Pattern) ---
    private String consultationId;
    private String patientId;
    private String doctorId;

    // --- List of Medicine IDs or Embedded Medicines ---
    private List<String> medicineIds;

    private LocalDate prescriptionDate;
    private String notes; // MongoDB handles large strings natively without @Column
}