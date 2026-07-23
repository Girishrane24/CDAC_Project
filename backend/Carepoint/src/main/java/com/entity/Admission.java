package com.entity;

import java.util.*;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "Admission")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Admission {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double admissionId;
    
    private String admissionDate;
    private String DischargeDate;
    private String status;
    
    // Foreigin Key RelationShips
    
    // 1-to-1 or Many-to-1 Relationship with Room
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name=  "roomId",nullable= false)
    private Room room;
    
    // foreign key reference to Patient
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patientId", nullable=false)
    private Patient patient;
    
 // Foreign key reference to Doctor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    // Foreign key reference to Nurse
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nurse_id")
    private Nurse nurse;
    
    
    // Inside the Admissio entity class:
    @ManyToMany
    @JoinTable(
    		name = "admission_inventory",
    		joinColumns = @JoinColumn(name = "admission_id"),
    		inverseJoinColumns = @JoinColumn(name = "item_id")
    		)
    private List<Inventory> inventoryItems;
    
}
