package com.hospital.repository;

import com.hospital.model.Billing;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface BillingRepository extends MongoRepository<Billing, String> {
    List<Billing> findByPatientId(String patientId);
}