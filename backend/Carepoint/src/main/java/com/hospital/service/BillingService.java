package com.hospital.service;


import com.hospital.model.BillingInvoice;
import com.hospital.repository.BillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BillingService {

    @Autowired
    private BillingRepository billingRepository;

    public List<BillingInvoice> getAllInvoices() {
        return billingRepository.findAll();
    }

    public Optional<BillingInvoice> getInvoiceById(String id) {
        return billingRepository.findById(id);
    }

    public List<BillingInvoice> getInvoicesByPatient(String patientId) {
        return billingRepository.findByPatientId(patientId);
    }

    public BillingInvoice createInvoice(BillingInvoice invoice) {
        // Calculate item total prices & grand totals
        double calculatedSubtotal = 0.0;
        if (invoice.getLineItems() != null) {
            for (BillingInvoice.LineItem item : invoice.getLineItems()) {
                item.setTotalPrice(item.getQuantity() * item.getUnitPrice());
                calculatedSubtotal += item.getTotalPrice();
            }
        }
        
        invoice.setSubtotal(calculatedSubtotal);
        double tax = invoice.getTaxAmount() != null ? invoice.getTaxAmount() : 0.0;
        double discount = invoice.getDiscountAmount() != null ? invoice.getDiscountAmount() : 0.0;
        
        invoice.setTotalAmount(calculatedSubtotal + tax - discount);
        
        if (invoice.getPaymentStatus() == null) {
            invoice.setPaymentStatus("PENDING");
        }
        if (invoice.getInvoiceDate() == null) {
            invoice.setInvoiceDate(LocalDateTime.now());
        }

        return billingRepository.save(invoice);
    }

    public BillingInvoice updatePaymentStatus(String id, String status, String paymentMethod) {
        return billingRepository.findById(id).map(invoice -> {
            invoice.setPaymentStatus(status);
            if (paymentMethod != null) {
                invoice.setPaymentMethod(paymentMethod);
            }
            return billingRepository.save(invoice);
        }).orElseThrow(() -> new RuntimeException("Invoice not found with id: " + id));
    }

    public void deleteInvoice(String id) {
        billingRepository.deleteById(id);
    }
}