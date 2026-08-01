package com.hospital.repository;

import com.hospital.model.BillingInvoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillingRepository extends MongoRepository<BillingInvoice, String> {

    // Search bills by patient name
    List<BillingInvoice> findByPatientName(String patientName);

    // Search bills by doctor name
    List<BillingInvoice> findByDoctorName(String doctorName);

    // Search bills by payment status (Paid/Pending)
    List<BillingInvoice> findByStatus(String status);

    // Search bills by payment mode (Cash/Card/UPI/Net Banking)
    List<BillingInvoice> findByPaymentMode(String paymentMode);
}