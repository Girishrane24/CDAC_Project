package com.hospital.controller;

import com.jwt.*;
//import com.hospital.dto.LoginRequest;
import com.hospital.model.LoginRequest;
import com.hospital.model.User;
import com.hospital.repository.UserRepository;
//import com.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Match raw password against hashed password in database
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                String token = jwtUtils.generateJwtToken(user.getEmail(), user.getRole());

                Map<String, Object> response = new HashMap<>();
                response.put("token", token);
                response.put("type", "Bearer");
                response.put("email", user.getEmail());
                response.put("role", user.getRole());

                return ResponseEntity.ok(response);
            }
        }

        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalid email or password.");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Email is already registered!");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }

        // Encrypt plain-text password before saving to MongoDB
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null) {
            user.setRole("PATIENT");
        }

        User savedUser = userRepository.save(user);
        savedUser.setPassword(null); // Don't return password hash in response
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
}