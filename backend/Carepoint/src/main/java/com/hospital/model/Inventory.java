package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "inventories") // Correct MongoDB collection annotation
public class Inventory {

    @Id
    private String itemId; // MongoDB uses String ObjectIds by default

    private String itemName;
    private String category;
    private Double unitPrice;
    private Integer quantityInStock; // Changed to Integer & fixed camelCase convention
    private Integer reorderLevel;    // Changed to Integer (stock count levels are whole numbers)
    private String supplier;
}