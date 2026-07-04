package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.app.UserController", "package com.app.SecurityConfig"})
public class CarePointHospitalSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarePointHospitalSystemApplication.class, args);
	}

}
