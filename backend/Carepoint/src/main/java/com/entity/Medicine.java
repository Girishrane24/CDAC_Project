package com.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "medicines") // MongoDB collection annotation
public class Medicine {

    @Id
    private String medicineId; // MongoDB uses String ObjectIds by default

    private String medicineName;
    private String category;
    private BigDecimal unitPrice;
    private LocalDate expiryDate;

    // --- Foreign Key Reference ID (MongoDB NoSQL Pattern) ---
    private String prescriptionId;
}