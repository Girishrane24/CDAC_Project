package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "consultations") // MongoDB collection annotation
public class Consultation {

    @Id
    private String consultationId; // MongoDB uses String ObjectIds by default

    // Reference IDs instead of JPA relationships (@ManyToOne)
    private String appointmentId;
    private String doctorId;
    private String patientId;

    private String diagnosis;
    private String notes; // MongoDB handles large strings natively without @Column
    private LocalDate consultationDate;
}