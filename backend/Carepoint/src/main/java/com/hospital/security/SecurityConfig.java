package com.hospital.security;

import com.hospital.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration configuration) throws Exception {

        return configuration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        System.out.println("******** SecurityConfig Loaded ********");

        http
            
            .csrf(csrf -> csrf.disable())

            .cors(Customizer.withDefaults())

            .sessionManagement(session ->
                    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(auth -> auth

            	    .requestMatchers("/api/auth/**").permitAll()

            	    .requestMatchers("/api/patients", "/api/patients/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_DOCTOR", "ROLE_RECEPTIONIST")

            	    .requestMatchers("/api/doctors", "/api/doctors/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_DOCTOR")

            	    .requestMatchers("/api/appointments", "/api/appointments/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_DOCTOR", "ROLE_RECEPTIONIST")

            	    .requestMatchers("/api/billing", "/api/billing/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_RECEPTIONIST")

            	    .requestMatchers("/api/labs", "/api/labs/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_LAB_TECHNICIAN")

            	    .requestMatchers("/api/labtests", "/api/labtests/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_LAB_TECHNICIAN")

            	    .requestMatchers(
            	            "/api/rooms", "/api/rooms/**",
            	            "/api/beds", "/api/beds/**",
            	            "/api/room-allocations", "/api/room-allocations/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_RECEPTIONIST")

            	    .anyRequest().authenticated()
            	)
            .addFilterBefore(jwtAuthenticationFilter,
                    UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}