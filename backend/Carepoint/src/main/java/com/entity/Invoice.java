package com.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "Invoice")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Invoice {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private double invoiceId;
    
    private String invoiceDate;
    private String totalAmount;
    private double discount;
    private double netAmount;
    private String paymentStatus;
    
    // --- FOREIGN KEY RELATIONSHIPS ---

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "appointmentId", nullable = false)
    private Appointment appointment;

    // Foreign key reference to Appointment
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patientId")
    private Patient patient;
    
	
}
