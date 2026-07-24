package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "nurses") // Correct MongoDB collection annotation
public class Nurse {

    @Id
    private String nurseId; // Fixed camelCase naming and String type for MongoDB ObjectIds

    private String name;
    private String phone;
    private String email;
    private String department;
    private String qualification;
    private String shift;
}