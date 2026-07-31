package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(
        scanBasePackages = {
                "com.example.demo",
                "com.hospital"
        }
)
@EnableMongoRepositories(basePackages = "com.hospital.repository")
@EnableMongoAuditing
public class CarepointApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarepointApplication.class, args);
    }

}