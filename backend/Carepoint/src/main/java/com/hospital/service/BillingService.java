package com.hospital.service;

import com.hospital.model.BillingInvoice;
import com.hospital.model.Doctor;
import com.hospital.model.LabTest;
import com.hospital.model.Room;
import com.hospital.model.RoomAllocation;
import com.hospital.repository.BillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import com.hospital.repository.DoctorRepository;
import com.hospital.repository.LabTestRepository;
import com.hospital.repository.RoomAllocationRepository;
import com.hospital.repository.RoomRepository;
@Service
public class BillingService {

    @Autowired
    private BillingRepository billingRepository;

    
    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private LabTestRepository labTestRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomAllocationRepository roomAllocationRepository;
    
    
    // Get all bills
    public List<BillingInvoice> getAllBills() {
        return billingRepository.findAll();
    }

    // Get bill by id
    public Optional<BillingInvoice> getBillById(String id) {
        return billingRepository.findById(id);
    }

    // Create bill
    public BillingInvoice createBill(BillingInvoice bill) {

        // ---------------- Doctor Consultation Fee ----------------

        Doctor doctor = doctorRepository.findByName(bill.getDoctorName())
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        double consultationFee = doctor.getConsultationFee();

        // ---------------- Lab Charges ----------------

        List<LabTest> labTests =
                labTestRepository.findByPatientName(bill.getPatientName());

        double labCharges = labTests.stream()
                .mapToDouble(test -> test.getPrice() == null ? 0 : test.getPrice())
                .sum();

        // ---------------- Room Charges ----------------

        double roomCharges = 0;

        List<RoomAllocation> allocations =
                roomAllocationRepository.findByPatientName(bill.getPatientName());

        if (!allocations.isEmpty()) {

            RoomAllocation allocation = allocations.get(0);

            Room room = roomRepository.findById(allocation.getRoomId())
                    .orElse(null);

            if (room != null &&
                    allocation.getAdmissionDate() != null &&
                    allocation.getDischargeDate() != null) {

                long days = ChronoUnit.DAYS.between(
                        allocation.getAdmissionDate(),
                        allocation.getDischargeDate());

                if (days <= 0) {
                    days = 1;
                }

                roomCharges = room.getDailyCharge() * days;
            }
        }

        // ---------------- Total ----------------

        double total = consultationFee + labCharges + roomCharges;

        bill.setConsultationFee(consultationFee);
        bill.setLabCharges(labCharges);
        bill.setRoomCharges(roomCharges);
        bill.setTotalAmount(total);

        return billingRepository.save(bill);
    }
        // automatic calculation code goes here
    


    // Update bill
    public BillingInvoice updateBill(String id, BillingInvoice bill) {
        bill.setId(id);
        return billingRepository.save(bill);
    }

    // Delete bill
    public void deleteBill(String id) {
        billingRepository.deleteById(id);
    }
}