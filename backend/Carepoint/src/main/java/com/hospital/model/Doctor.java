package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "doctors") // Correct MongoDB collection annotation
public class Doctor {

    @Id
    private String doctorId; // MongoDB uses String ObjectIds by default

    private String name;
    private String specialization;
    private String department;
    private String phone;
    private String email;
    private String qualification;
    private Integer experience; // Changed from Double to Integer (years of experience)
}