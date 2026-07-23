package com.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "admins") // Correct annotation for MongoDB
public class Admin {

    @Id
    private String adminId; // MongoDB uses String IDs (ObjectIds) by default

    private String name;
    private String email;
    private String phone;
    private String password; // CamelCase convention (lowercase 'p')
}