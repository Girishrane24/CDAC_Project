package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

@Document(collection = "nurses")
public class Nurse {

    @Id
    private String id;

//    @NotBlank(message = "Name is required")
    private String name;

//    @Email(message = "Invalid email format")
//    @NotBlank(message = "Email is required")
    private String email;

//    @NotBlank(message = "Phone number is required")
    private String phone;

    private String department;
    private String shift; // Morning, Afternoon, Night
    private String qualification;
    private String status; // Active, On-Leave, Inactive
    private LocalDate joiningDate;

    public Nurse() {}

    public Nurse(String id, String name, String email, String phone, String department, String shift, String qualification, String status, LocalDate joiningDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.shift = shift;
        this.qualification = qualification;
        this.status = status;
        this.joiningDate = joiningDate;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getShift() { return shift; }
    public void setShift(String shift) { this.shift = shift; }

    public String getQualification() { return qualification; }
    public void setQualification(String qualification) { this.qualification = qualification; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getJoiningDate() { return joiningDate; }
    public void setJoiningDate(LocalDate joiningDate) { this.joiningDate = joiningDate; }
}