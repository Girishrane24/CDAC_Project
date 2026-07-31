//package com.hospital.service;
//
//import com.hospital.model.AuditLog;
//import com.hospital.model.User;
//import com.hospital.repository.AuditLogRepository;
//import com.hospital.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.*;
//
//@Service
//public class AdminService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private AuditLogRepository auditLogRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    public Optional<User> getUserById(String id) {
//        return userRepository.findById(id);
//    }
//
//    public User createUserByAdmin(User user, String adminUsername) {
//        if (userRepository.existsByUsername(user.getUsername())) {
//            throw new IllegalArgumentException("Username is already taken");
//        }
//        if (userRepository.existsByEmail(user.getEmail())) {
//            throw new IllegalArgumentException("Email is already registered");
//        }
//
//        // Encrypt user password
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        User savedUser = userRepository.save(user);
//
//        // Audit Log
//        auditLogRepository.save(new AuditLog(
//                adminUsername, 
//                "USER_CREATED", 
//                savedUser.getId(), 
//                "Created user with roles: " + savedUser.getRoles()
//        ));
//
//        return savedUser;
//    }
//
//    public User toggleUserStatus(String userId, boolean enabled, String adminUsername) {
//        return userRepository.findById(userId).map(user -> {
//            user.setEnabled(enabled);
//            User updated = userRepository.save(user);
//
//            // Audit Log
//            auditLogRepository.save(new AuditLog(
//                    adminUsername,
//                    enabled ? "USER_ACTIVATED" : "USER_DEACTIVATED",
//                    userId,
//                    "Account status changed to: " + (enabled ? "ACTIVE" : "DISABLED")
//            ));
//
//            return updated;
//        }).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
//    }
//
//    public User updateUserRoles(String userId, Set<String> roles, String adminUsername) {
//        return userRepository.findById(userId).map(user -> {
//            user.setRoles(roles);
//            User updated = userRepository.save(user);
//
//            auditLogRepository.save(new AuditLog(
//                    adminUsername,
//                    "ROLES_UPDATED",
//                    userId,
//                    "Roles updated to: " + roles
//            ));
//
//            return updated;
//        }).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
//    }
//
//    public Map<String, Object> getAdminDashboardStats() {
//        Map<String, Object> stats = new HashMap<>();
//        stats.put("totalUsers", userRepository.count());
//        stats.put("totalDoctors", userRepository.findByRolesContaining("ROLE_DOCTOR").size());
//        stats.put("totalNurses", userRepository.findByRolesContaining("ROLE_NURSE").size());
//        stats.put("totalAdmins", userRepository.findByRolesContaining("ROLE_ADMIN").size());
//        return stats;
//    }
//
//    public List<AuditLog> getRecentAuditLogs() {
//        return auditLogRepository.findTop50ByOrderByTimestampDesc();
//    }
//}