package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "beds")
public class Bed {

    @Id
    private String id;

    private String bedNumber;
    private String roomNumber;
    private String status;

    public Bed() {
    }

    public Bed(String id, String bedNumber, String roomNumber, String status) {
        this.id = id;
        this.bedNumber = bedNumber;
        this.roomNumber = roomNumber;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBedNumber() {
        return bedNumber;
    }

    public void setBedNumber(String bedNumber) {
        this.bedNumber = bedNumber;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
