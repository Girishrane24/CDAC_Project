package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "patients") // MongoDB collection annotation
public class Patient {

    @Id
    private String patientId; // MongoDB uses String ObjectIds by default

    private String name;
    private String dob;
    private String gender;
    private String bloodGroup; // Fixed camelCase naming (capital 'G')
    private String phone;
    private String email;
    private String address;
    private String allergies;
    
 // Explicit Getter and Setter to resolve compilation errors
    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }
	
    
}