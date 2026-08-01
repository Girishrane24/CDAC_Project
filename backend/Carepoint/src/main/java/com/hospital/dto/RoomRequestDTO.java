package com.hospital.dto;

public class RoomRequestDTO {

    private String roomNumber;
    private String roomType;
    private Integer floor;
    private Integer capacity;
    private Double dailyCharge;
    private String status;

    public RoomRequestDTO() {
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Double getDailyCharge() {
        return dailyCharge;
    }

    public void setDailyCharge(Double dailyCharge) {
        this.dailyCharge = dailyCharge;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}