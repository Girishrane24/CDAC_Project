package com.hospital.repository;

import com.hospital.model.BillingInvoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BillingRepository extends MongoRepository<BillingInvoice, String> {
    List<BillingInvoice> findByPatientId(String patientId);
    List<BillingInvoice> findByPaymentStatus(String paymentStatus);
}