package com.entity;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "patients")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Patient {
	
	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double patientId;

    //@Column(nullable = false)
    private String name;
    private String dob;
    private String gender;
    private String bloodgroup;
    private String phone;
    private String email;
    private String address;
    private String allergies;
    
}