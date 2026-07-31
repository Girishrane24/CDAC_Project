package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

@Document(collection = "nurses")
public class Nurse {

    @Id
    private String nurseId;

    // @NotBlank(message = "Name is required")
    private String name;

    // @Email(message = "Invalid email format")
    // @NotBlank(message = "Email is required")
    private String email;

    // @NotBlank(message = "Phone number is required")
    private String phone;

    private String gender;
    private String qualification;
    private String experience;
    private String department;
    private String shift;
    private LocalDate joiningDate;
    private String availabilityStatus;

    public Nurse() {
    }

    public Nurse(String nurseId, String name, String email, String phone,
                 String gender, String qualification, String experience,
                 String department, String shift, LocalDate joiningDate,
                 String availabilityStatus) {

        this.nurseId = nurseId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.qualification = qualification;
        this.experience = experience;
        this.department = department;
        this.shift = shift;
        this.joiningDate = joiningDate;
        this.availabilityStatus = availabilityStatus;
    }

    public String getNurseId() {
        return nurseId;
    }

    public void setNurseId(String nurseId) {
        this.nurseId = nurseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getShift() {
        return shift;
    }

    public void setShift(String shift) {
        this.shift = shift;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(LocalDate joiningDate) {
        this.joiningDate = joiningDate;
    }

    public String getAvailabilityStatus() {
        return availabilityStatus;
    }

    public void setAvailabilityStatus(String availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }
}