package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "room_allocations")
public class RoomAllocation {

    @Id
    private String id;
    private String patientId;
    private String patientName;
    private String roomNumber;
    private String roomType;
    private String admissionDate;
    private String dischargeDate;
    private String status = "Allocated"; // Allocated, Discharged

    public RoomAllocation() {}

    public RoomAllocation(String patientId, String patientName, String roomNumber, String roomType, String admissionDate, String dischargeDate) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.admissionDate = admissionDate;
        this.dischargeDate = dischargeDate;
    }
    // Getters and Setters
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPatientId() {
		return patientId;
	}

	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
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

	public String getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(String admissionDate) {
		this.admissionDate = admissionDate;
	}

	public String getDischargeDate() {
		return dischargeDate;
	}

	public void setDischargeDate(String dischargeDate) {
		this.dischargeDate = dischargeDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

 
   
}