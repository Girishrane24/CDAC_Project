package com.hospital.service;
import com.hospital.model.Role;
import com.hospital.dto.LoginRequest;
import com.hospital.dto.LoginResponse;
import com.hospital.model.User;
import com.hospital.repository.UserRepository;
import com.hospital.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Login
     */
    public LoginResponse login(LoginRequest request) {

        // Authenticate email & password
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        // Find user
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new BadCredentialsException("Invalid Email or Password"));

        // Generate JWT Token
        String token = jwtUtil.generateToken(
                user.getEmail(),
                user.getRole().name()
        );

        // Return response
        return new LoginResponse(
                token,
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }

    /**
     * Register Admin/User (Optional)
     */
    public User register(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Default role
        if (user.getRole() == null) {
            user.setRole(Role.ADMIN);
        }

        return userRepository.save(user);
    }
}