package com.example.demo; // Moved to the root package!

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController; // <--- ADD THIS


@SpringBootApplication(
	    exclude = { SecurityAutoConfiguration.class },
	    scanBasePackages = {"com.example.demo", "com.hospital"} // <--- TELL SPRING TO SCAN BOTH
	)
	@EnableMongoRepositories(basePackages = "com.hospital.repository") // <--- SCAN YOUR REPOSITORY
	@EnableMongoAuditing
public class CarepointApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarepointApplication.class, args);
    }
    
    @GetMapping("/test")
    public String healthCheck() {
        return "Spring Boot is working!";
    }
}