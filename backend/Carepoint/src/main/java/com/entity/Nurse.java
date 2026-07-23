package com.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Nurse")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Nurse {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double nurseID;
    
    @Column(nullable = false)
    private String name;
    private String phone;
    private String email;
    private String department;
    private String qualification;
    private String shift;

	
}
