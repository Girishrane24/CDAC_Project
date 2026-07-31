package com.hospital.controller;

import com.hospital.model.BillingInvoice;
import com.hospital.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/billing")
@CrossOrigin(origins = "http://localhost:5173")
public class BillingController {

    @Autowired
    private BillingService billingService;

    // Get all bills
    @GetMapping
    public List<BillingInvoice> getAllBills() {
        return billingService.getAllBills();
    }

    // Get bill by id
    @GetMapping("/{id}")
    public ResponseEntity<BillingInvoice> getBillById(@PathVariable String id) {

        return billingService.getBillById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create bill
    @PostMapping
    public ResponseEntity<BillingInvoice> createBill(@RequestBody BillingInvoice bill) {

        BillingInvoice savedBill = billingService.createBill(bill);

        return ResponseEntity.ok(savedBill);
    }

    // Update bill
    @PutMapping("/{id}")
    public ResponseEntity<BillingInvoice> updateBill(@PathVariable String id,
                                                     @RequestBody BillingInvoice bill) {

        BillingInvoice updatedBill = billingService.updateBill(id, bill);

        return ResponseEntity.ok(updatedBill);
    }

    // Delete bill
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBill(@PathVariable String id) {

        billingService.deleteBill(id);

        return ResponseEntity.noContent().build();
    }
}