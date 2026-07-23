package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "invoices") // MongoDB collection annotation
public class Invoice {

    @Id
    private String invoiceId; // MongoDB uses String ObjectIds by default

    private String invoiceDate;
    private Double totalAmount; // Changed to Double for financial/currency values
    private Double discount;
    private Double netAmount;
    private String paymentStatus;

    // --- Foreign Key Reference IDs (MongoDB NoSQL Pattern) ---
    private String appointmentId;
    private String patientId;
}