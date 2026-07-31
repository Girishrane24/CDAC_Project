//package com.hospital.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//import java.time.LocalDateTime;
//import java.util.Set;
//
//@Document(collection = "users")
//public class User {
//
//    @Id
//    private String id;
//
////    @NotBlank(message = "Username is required")
//    private String username;
//
////    @Email(message = "Invalid email format")
////    @NotBlank(message = "Email is required")
//    private String email;
//
////    @NotBlank(message = "Password is required")
//    private String password;
//
//    private String fullName;
//    private String phone;
//    private Set<String> roles; // e.g., ROLE_ADMIN, ROLE_DOCTOR, ROLE_NURSE, ROLE_RECEPTIONIST
//    private boolean enabled = true; // For Admin activation/deactivation
//    private LocalDateTime createdAt = LocalDateTime.now();
//    private LocalDateTime lastLogin;
//
//    public User() {}
//
//    public User(String username, String email, String password, String fullName, Set<String> roles) {
//        this.username = username;
//        this.email = email;
//        this.password = password;
//        this.fullName = fullName;
//        this.roles = roles;
//    }
//
//    // Getters and Setters
//    public String getId() { return id; }
//    public void setId(String id) { this.id = id; }
//
//    public String getUsername() { return username; }
//    public void setUsername(String username) { this.username = username; }
//
//    public String getEmail() { return email; }
//    public void setEmail(String email) { this.email = email; }
//
//    public String getPassword() { return password; }
//    public void setPassword(String password) { this.password = password; }
//
//    public String getFullName() { return fullName; }
//    public void setFullName(String fullName) { this.fullName = fullName; }
//
//    public String getPhone() { return phone; }
//    public void setPhone(String phone) { this.phone = phone; }
//
//    public Set<String> getRoles() { return roles; }
//    public void setRoles(Set<String> roles) { this.roles = roles; }
//
//    public boolean isEnabled() { return enabled; }
//    public void setEnabled(boolean enabled) { this.enabled = enabled; }
//
//    public LocalDateTime getCreatedAt() { return createdAt; }
//    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
//
//    public LocalDateTime getLastLogin() { return lastLogin; }
//    public void setLastLogin(LocalDateTime lastLogin) { this.lastLogin = lastLogin; }
//}


package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String name;

    private String email;

    private String password;

    private String role;

    public User() {
    }

    public User(String id, String name, String email, String password, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}