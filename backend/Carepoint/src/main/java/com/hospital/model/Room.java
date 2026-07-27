package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "rooms")
public class Room {

    @Id
    private String id;
    private String roomNumber;
    private String roomType; // General, Private, ICU, Deluxe
    private Integer floor;
    private Integer capacity;
    private Integer occupiedBeds = 0;
    private Double dailyCharge;
    private String status = "Available"; // Available, Occupied, Maintenance
//    private String description;

    public Room() {}

    public Room(String roomNumber, String roomType, Integer floor, Integer capacity, Double dailyCharge, String status, String description) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.floor = floor;
        this.capacity = capacity;
        this.dailyCharge = dailyCharge;
        this.status = status;
        //this.description = description;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getRoomNumber() { return roomNumber; }
    public void setRoomNumber(String roomNumber) { this.roomNumber = roomNumber; }

    public String getRoomType() { return roomType; }
    public void setRoomType(String roomType) { this.roomType = roomType; }

    public Integer getFloor() { return floor; }
    public void setFloor(Integer floor) { this.floor = floor; }

    public Integer getCapacity() { return capacity; }
    public void setCapacity(Integer capacity) { this.capacity = capacity; }

    public Integer getOccupiedBeds() { return occupiedBeds; }
    public void setOccupiedBeds(Integer occupiedBeds) { this.occupiedBeds = occupiedBeds; }

    public Double getDailyCharge() { return dailyCharge; }
    public void setDailyCharge(Double dailyCharge) { this.dailyCharge = dailyCharge; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    //public String getDescription() { return description; }
    //public void setDescription(String description) { this.description = description; }
}