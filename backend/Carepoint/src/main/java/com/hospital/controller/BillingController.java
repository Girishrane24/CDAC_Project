package com.hospital.controller;


import com.hospital.model.BillingInvoice;
import com.hospital.service.BillingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/billing")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @GetMapping
    public ResponseEntity<List<BillingInvoice>> getAllInvoices() {
        return ResponseEntity.ok(billingService.getAllInvoices());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BillingInvoice> getInvoiceById(@PathVariable String id) {
        return billingService.getInvoiceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<BillingInvoice>> getInvoicesByPatient(@PathVariable String patientId) {
        return ResponseEntity.ok(billingService.getInvoicesByPatient(patientId));
    }

    @PostMapping
    public ResponseEntity<BillingInvoice> createInvoice(@Valid @RequestBody BillingInvoice invoice) {
        BillingInvoice createdInvoice = billingService.createInvoice(invoice);
        return new ResponseEntity<>(createdInvoice, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<BillingInvoice> updatePaymentStatus(
            @PathVariable String id,
            @RequestBody Map<String, String> statusUpdate) {
        
        String status = statusUpdate.get("paymentStatus");
        String paymentMethod = statusUpdate.get("paymentMethod");
        
        BillingInvoice updatedInvoice = billingService.updatePaymentStatus(id, status, paymentMethod);
        return ResponseEntity.ok(updatedInvoice);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvoice(@PathVariable String id) {
        billingService.deleteInvoice(id);
        return ResponseEntity.noContent().build();
    }
}