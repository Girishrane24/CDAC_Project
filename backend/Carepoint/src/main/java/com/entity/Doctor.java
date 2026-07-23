package com.entity;

import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "Doctor")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double doctorId;
    
    @Column(nullable = false)
    private String name;
    private String specialization;
    private String department;
    private String phone;
    private String email;
    private String qualification;
    private Double experience;
	

}
