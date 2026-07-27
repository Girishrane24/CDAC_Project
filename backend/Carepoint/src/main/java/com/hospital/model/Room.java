package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.List;

@Document(collection = "rooms")
public class Room {

    @Id
    private String id;

    @Indexed(unique = true)
    private String roomNumber;

    private String type; // e.g., Single, Double, Suite
    private @NotNull(message = "Price per night is required") @DecimalMax(value = "0.01", inclusive = true, message = "Price must be greater than 0") Double pricePerNight;
    private Integer capacity;
    private Boolean isAvailable;
    private List<String> amenities;

    public Room() {}

    public Room(String roomNumber, String type, @NotNull(message = "Price per night is required") @DecimalMax(value = "0.01", inclusive = true, message = "Price must be greater than 0") Double pricePerNight, Integer capacity, Boolean isAvailable, List<String> amenities) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.capacity = capacity;
        this.isAvailable = isAvailable;
        this.amenities = amenities;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getRoomNumber() { return roomNumber; }
    public void setRoomNumber(String roomNumber) { this.roomNumber = roomNumber; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Double getPricePerNight() { return pricePerNight; }
    public void setPricePerNight(@NotNull(message = "Price per night is required") @DecimalMax(value = "0.01", inclusive = true, message = "Price must be greater than 0") Double double1) { this.pricePerNight = double1; }

    public Integer getCapacity() { return capacity; }
    public void setCapacity(Integer capacity) { this.capacity = capacity; }

    public Boolean getIsAvailable() { return isAvailable; }
    public void setIsAvailable(Boolean isAvailable) { this.isAvailable = isAvailable; }

    public List<String> getAmenities() { return amenities; }
    public void setAmenities(List<String> amenities) { this.amenities = amenities; }
}