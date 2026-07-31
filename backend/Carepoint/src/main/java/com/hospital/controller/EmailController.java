package com.hospital.controller;


import com.hospital.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
//@CrossOrigin(origins = "http://localhost:5173")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public ResponseEntity<String> sendNotification(@RequestBody Map<String, String> request) {
        String recipient = request.get("to");
        String subject = request.get("subject");
        String message = request.get("message");

        emailService.sendSimpleEmail(recipient, subject, message);
        return ResponseEntity.ok("Email sent successfully to " + recipient);
    }
}