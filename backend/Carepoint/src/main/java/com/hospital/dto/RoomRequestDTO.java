package com.hospital.dto;


import lombok.Data;

import java.util.List;

import com.hospital.model.enumm.RoomStatus;
import com.hospital.model.enumm.RoomType;

@Data
public class RoomRequestDTO {
    private String roomNumber;
    private Integer floor;
    private RoomType roomType;
    private Double dailyRate;
    private RoomStatus status;
    private List<String> amenities;
    private Integer totalBeds; // Helper to auto-create beds when room is added

    public RoomRequestDTO()
    {}

	public RoomRequestDTO(String roomNumber, Integer floor, RoomType roomType, Double dailyRate, RoomStatus status,
			List<String> amenities, Integer totalBeds) {
		super();
		this.roomNumber = roomNumber;
		this.floor = floor;
		this.roomType = roomType;
		this.dailyRate = dailyRate;
		this.status = status;
		this.amenities = amenities;
		this.totalBeds = totalBeds;
	}

	public String getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}

	public Integer getFloor() {
		return floor;
	}

	public void setFloor(Integer floor) {
		this.floor = floor;
	}

	public RoomType getRoomType() {
		return roomType;
	}

	public void setRoomType(RoomType roomType) {
		this.roomType = roomType;
	}

	public Double getDailyRate() {
		return dailyRate;
	}

	public void setDailyRate(Double dailyRate) {
		this.dailyRate = dailyRate;
	}

	public RoomStatus getStatus() {
		return status;
	}

	public void setStatus(RoomStatus status) {
		this.status = status;
	}

	public List<String> getAmenities() {
		return amenities;
	}

	public void setAmenities(List<String> amenities) {
		this.amenities = amenities;
	}

	public Integer getTotalBeds() {
		return totalBeds;
	}

	public void setTotalBeds(Integer totalBeds) {
		this.totalBeds = totalBeds;
	}
    
    
}

