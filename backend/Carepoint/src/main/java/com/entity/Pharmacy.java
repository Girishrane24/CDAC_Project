package com.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "pharmacies") // MongoDB collection annotation
public class Pharmacy {

    @Id
    private String pharmacyId; // Standard camelCase and String type for MongoDB ObjectIds

    private String pharmacyName; // Fixed camelCase naming (capital 'N')
    private String location;
    private String phone;
}