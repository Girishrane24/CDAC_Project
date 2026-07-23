package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "labs") // MongoDB collection mapping
public class Lab {

    @Id
    private String labId; // Standard camelCase naming and String type for MongoDB ObjectIds

    private String labName;
    private String location;
    private String phone;
}