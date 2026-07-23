package com.entity;

import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Appointment {
	
	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double appointmentId;
    
    private String appointmentDate;
    
    private String appointmentTime;
    
    private String reason;
    private String status;
    
    // Foreigin Key RelationShips
    
    // 1-to-1 or Many-to-1 Relationship with Patient
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name=  "patientId",nullable= false)
    private Patient patient;
    
    // foreign key reference to Doctor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctorId", nullable=false)
    private Doctor doctor;
    
    // foreign key reference to Doctor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseId", nullable=false)
    private Nurse nurse;
    
    

}
