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
@Document(collection = "payments") // MongoDB collection annotation
public class Payment {

    @Id
    private String paymentId; // MongoDB uses String ObjectIds by default

    // --- Foreign Key Reference ID (MongoDB NoSQL Pattern) ---
    private String invoiceId;

    private LocalDate paymentDate;
    private BigDecimal amount;
    private String paymentMode;
    private String transactionRefNo;
    private String status;
}