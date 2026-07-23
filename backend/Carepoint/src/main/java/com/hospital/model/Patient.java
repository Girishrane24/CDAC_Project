package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "patients") // MongoDB collection annotation
public class Patient {

    @Id
    private String patientId; // MongoDB uses String ObjectIds by default

    private String name;
    private String dob;
    private String gender;
    private String bloodGroup; // Fixed camelCase naming (capital 'G')
    private String phone;
    private String email;
    private String address;
    private String allergies;
    
    
	public Patient(String patientId, String name, String dob, String gender, String bloodGroup, String phone,
			String email, String address, String allergies) {
		super();
		this.patientId = patientId;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.bloodGroup = bloodGroup;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.allergies = allergies;
	}
	public String getPatientId() {
		return patientId;
	}
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAllergies() {
		return allergies;
	}
	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

    
    
}