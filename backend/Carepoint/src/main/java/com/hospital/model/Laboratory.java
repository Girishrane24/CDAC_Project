package com.hospital.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "laboratories")
public class Laboratory {

    @Id
    private String id; // Mongo internal ID
    
    private String labId; // Custom Business ID (e.g. LAB001)
    private String labName;
    private String location;
    private String phone;

    public Laboratory() {}

    public Laboratory(String labId, String labName, String location, String phone) {
        this.labId = labId;
        this.labName = labName;
        this.location = location;
        this.phone = phone;
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLabId() {
		return labId;
	}

	public void setLabId(String labId) {
		this.labId = labId;
	}

	public String getLabName() {
		return labName;
	}

	public void setLabName(String labName) {
		this.labName = labName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

    // Getters and Setters
    
}