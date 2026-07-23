package com.entity;


import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "Medicine")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Medicine {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medicine_id")
    private Long medicineId;

    // --- FOREIGN KEY RELATIONSHIP ("for") ---
    // Many medicines belong to One Prescription
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prescription_id", nullable = false)
    private Prescription prescription;

    // --- STANDARD COLUMNS ---

    @Column(name = "medicine_name", nullable = false)
    private String medicineName;

    @Column(name = "category")
    private String category;

    @Column(name = "unit_price", precision = 10, scale = 2)
    private BigDecimal unitPrice;

    @Column(name = "expiry_date")
    private LocalDate expiryDate;
}
