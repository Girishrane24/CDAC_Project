package com.hospital.controller;

import com.hospital.dto.LoginRequest;
import com.hospital.dto.LoginResponse;
import com.hospital.model.User;
import com.hospital.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    /**
     * Login API
     * POST: /api/auth/login
     */
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @Valid @RequestBody LoginRequest request) {

        LoginResponse response = authService.login(request);

        return ResponseEntity.ok(response);
    }

    /**
     * Register Admin/User
     * (Optional - Useful for testing)
     * POST: /api/auth/register
     */
    @PostMapping("/register")
    public ResponseEntity<User> register(
            @Valid @RequestBody User user) {

        User savedUser = authService.register(user);

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    /**
     * Health Check
     * GET: /api/auth/test
     */
    @GetMapping("/test")
    public ResponseEntity<String> test() {

        return ResponseEntity.ok("Authentication API is working.");
    }
}