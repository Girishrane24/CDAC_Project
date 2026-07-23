package com.entity;


import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "Lab_Test")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class LabTest {
	
	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double labTestId;
    
    
    private String testName;
    private String sampleType;
    private String testDate;
    private String Result;
    private String status;
    
    
    // --- FOREIGN KEY RELATIONSHIPS ---

    // Connection to Lab ("conducted by")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "labid", nullable = false)
    private Lab lab;

    // Foreign key reference to Appointment
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "appointmentid")
    private Appointment appointment;

    // Foreign key reference to Patient
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patientid", nullable = false)
    private Patient patient;
    
    

	
}
