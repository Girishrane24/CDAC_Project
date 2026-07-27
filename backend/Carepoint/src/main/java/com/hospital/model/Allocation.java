package com.hospital.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.hospital.model.enumm.AllocationStatus;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "allocations")
public class Allocation {
    @Id
    private String id;
    private String roomId;
    private String roomNumber;
    private String bedNumber;
    private String occupantId;
    private String occupantName;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private AllocationStatus status = AllocationStatus.ACTIVE;
    
    public Allocation()
    {}

	public Allocation(String id, String roomId, String roomNumber, String bedNumber, String occupantId,
			String occupantName, LocalDate checkInDate, LocalDate checkOutDate, AllocationStatus status) {
		super();
		this.id = id;
		this.roomId = roomId;
		this.roomNumber = roomNumber;
		this.bedNumber = bedNumber;
		this.occupantId = occupantId;
		this.occupantName = occupantName;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}

	public String getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
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

	public AllocationStatus getStatus() {
		return status;
	}

	public void setStatus(AllocationStatus status) {
		this.status = status;
	}
    
    
}