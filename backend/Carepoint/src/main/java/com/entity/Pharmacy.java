package com.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Pharmacy")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pharmacy {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double pharmacyID;
    
    @Column(nullable = false)
    private String pharmacyname;
    private String location;
    private String phone;
	
}
