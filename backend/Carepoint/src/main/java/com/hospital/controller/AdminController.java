package com.hospital.controller;

import com.hospital.model.AuditLog;
import com.hospital.model.User;
import com.hospital.service.AdminService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal; // Import Principal
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
//@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(adminService.getAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return adminService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/users")
    public ResponseEntity<?> createUser(
            @Valid @RequestBody User user,
            Principal principal) { // Changed here
        try {
            String adminUsername = (principal != null) ? principal.getName() : "SYSTEM_ADMIN";
            User createdUser = adminService.createUserByAdmin(user, adminUsername);
            return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", e.getMessage()));
        }
    }

    @PatchMapping("/users/{id}/status")
    public ResponseEntity<User> toggleUserStatus(
            @PathVariable String id,
            @RequestBody Map<String, Boolean> body,
            Principal principal) { // Changed here
        boolean enabled = body.getOrDefault("enabled", true);
        String adminUsername = (principal != null) ? principal.getName() : "SYSTEM_ADMIN";
        return ResponseEntity.ok(adminService.toggleUserStatus(id, enabled, adminUsername));
    }

    @PatchMapping("/users/{id}/roles")
    public ResponseEntity<User> updateUserRoles(
            @PathVariable String id,
            @RequestBody Map<String, Set<String>> body,
            Principal principal) { // Changed here
        Set<String> roles = body.get("roles");
        String adminUsername = (principal != null) ? principal.getName() : "SYSTEM_ADMIN";
        return ResponseEntity.ok(adminService.updateUserRoles(id, roles, adminUsername));
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getAdminStats() {
        return ResponseEntity.ok(adminService.getAdminDashboardStats());
    }

    @GetMapping("/logs")
    public ResponseEntity<List<AuditLog>> getAuditLogs() {
        return ResponseEntity.ok(adminService.getRecentAuditLogs());
    }
}