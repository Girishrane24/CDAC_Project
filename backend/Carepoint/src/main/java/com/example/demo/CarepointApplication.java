package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing // Automatically populates created/updated timestamps if configured
public class CarepointApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarepointApplication.class, args);
	}

}
