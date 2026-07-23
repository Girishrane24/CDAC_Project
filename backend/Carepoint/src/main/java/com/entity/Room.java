package com.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "rooms") // MongoDB collection annotation
public class Room {

    @Id
    private String roomId; // MongoDB uses String ObjectIds by default

    private String roomNumber;  // Standardized to String (room numbers often include letters, e.g., "101-A")
    private String roomType;    // Single, ICU, General Ward, Deluxe, etc.
    private String floor;
    private Double dailyCharge; // Changed from String to Double for numeric/price calculations
    private String status;      // AVAILABLE, OCCUPIED, MAINTENANCE
}