package com.entity;


import jakarta.persistence.*;
import lombok.*;

@Table(name = "Admin")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Admin {
	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double adminId;

    private String name;
    private String email;
    private String phone;
    private String Password;
	
}
