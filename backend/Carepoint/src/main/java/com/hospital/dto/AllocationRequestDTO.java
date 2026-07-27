package com.hospital.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AllocationRequestDTO {
    private String roomId;
    private String bedNumber;
    private String occupantId;
    private String occupantName;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    
    public AllocationRequestDTO() {}

	public AllocationRequestDTO(String roomId, String bedNumber, String occupantId, String occupantName,
			LocalDate checkInDate, LocalDate checkOutDate) {
		super();
		this.roomId = roomId;
		this.bedNumber = bedNumber;
		this.occupantId = occupantId;
		this.occupantName = occupantName;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
	}

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}

	public String getBedNumber() {
		return bedNumber;
	}

	public void setBedNumber(String bedNumber) {
		this.bedNumber = bedNumber;
	}

	public String getOccupantId() {
		return occupantId;
	}

	public void setOccupantId(String occupantId) {
		this.occupantId = occupantId;
	}

	public String getOccupantName() {
		return occupantName;
	}

	public void setOccupantName(String occupantName) {
		this.occupantName = occupantName;
	}

	public LocalDate getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(LocalDate checkInDate) {
		this.checkInDate = checkInDate;
	}

	public LocalDate getCheckOutDate() {
		return checkOutDate;
	}

	public void setCheckOutDate(LocalDate checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
    
    
    
}