package com.hospital.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.hospital.model.enumm.RoomStatus;
import com.hospital.model.enumm.RoomType;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "rooms")
public class Room {
    @Id
    private String id;

    @Indexed(unique = true)
    private String roomNumber;

    private Integer floor;
    private RoomType roomType;
    private Double dailyRate;
    private RoomStatus status = RoomStatus.AVAILABLE;
    private List<String> amenities = new ArrayList<>();
    private List<Bed> beds = new ArrayList<>();
    public Room()
    {}
    
	public Room(String id, String roomNumber, Integer floor, RoomType roomType, Double dailyRate, RoomStatus status,
			List<String> amenities, List<Bed> beds) {
		super();
		this.id = id;
		this.roomNumber = roomNumber;
		this.floor = floor;
		this.roomType = roomType;
		this.dailyRate = dailyRate;
		this.status = status;
		this.amenities = amenities;
		this.beds = beds;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public List<Bed> getBeds() {
		return beds;
	}
	public void setBeds(List<Bed> beds) {
		this.beds = beds;
	}
    
    
}