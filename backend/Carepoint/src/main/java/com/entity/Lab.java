package com.entity;

import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "Lab")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lab {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double labID;
    private String labName;
    private String location;
    private String phone;
    
}
