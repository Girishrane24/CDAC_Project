package com.hospital.controller;


import com.hospital.model.User;
import com.hospital.repository.UserRepository;
import com.hospital.security.JwtUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;

    public AuthController(UserRepository userRepository, PasswordEncoder encoder, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        if (userRepository.existsByEmail(email)) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email is already registered!"));
        }

        User user = new User(email, encoder.encode(password), password, password, null);
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        var userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent() && encoder.matches(password, userOpt.get().getPassword())) {
            String token = jwtUtils.generateJwtToken(email);
            return ResponseEntity.ok(Map.of(
                "token", token,
                "email", email
            ));
        }

        return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
    }
}