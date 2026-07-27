package com.hospital.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "billing")
public class BillingInvoice {

    @Id
    private String id;

   
    private String patientId;

  
    private String patientName;

    private String doctorOrNurseId;

    private List<LineItem> lineItems;

    private Double subtotal;

    private Double taxAmount = 0.0;
    private Double discountAmount = 0.0;

    private Double totalAmount;

    private String paymentStatus; // PENDING, PAID, PARTIALLY_PAID, CANCELLED
    private String paymentMethod; // CASH, CREDIT_CARD, INSURANCE, UPI
    
    private InsuranceDetail insuranceDetail;
    private LocalDateTime invoiceDate = LocalDateTime.now();
    private LocalDateTime dueDate;

    public BillingInvoice() {}

    // Inner static class for line items
    public static class LineItem {
        private String serviceName; // e.g., "Blood Test", "Consultation", "Medication"
        private int quantity;
        private double unitPrice;
        private double totalPrice;

        public LineItem() {}

        public LineItem(String serviceName, int quantity, double unitPrice) {
            this.serviceName = serviceName;
            this.quantity = quantity;
            this.unitPrice = unitPrice;
            this.totalPrice = quantity * unitPrice;
        }

        // Getters & Setters
        public String getServiceName() { return serviceName; }
        public void setServiceName(String serviceName) { this.serviceName = serviceName; }

        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }

        public double getUnitPrice() { return unitPrice; }
        public void setUnitPrice(double unitPrice) { this.unitPrice = unitPrice; }

        public double getTotalPrice() { return totalPrice; }
        public void setTotalPrice(double totalPrice) { this.totalPrice = totalPrice; }
    }

    // Inner static class for Insurance details
    public static class InsuranceDetail {
        private String providerName;
        private String policyNumber;
        private Double coveredAmount;

        public InsuranceDetail() {}

        // Getters & Setters
        public String getProviderName() { return providerName; }
        public void setProviderName(String providerName) { this.providerName = providerName; }

        public String getPolicyNumber() { return policyNumber; }
        public void setPolicyNumber(String policyNumber) { this.policyNumber = policyNumber; }

        public Double getCoveredAmount() { return coveredAmount; }
        public void setCoveredAmount(Double coveredAmount) { this.coveredAmount = coveredAmount; }
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public String getDoctorOrNurseId() { return doctorOrNurseId; }
    public void setDoctorOrNurseId(String doctorOrNurseId) { this.doctorOrNurseId = doctorOrNurseId; }

    public List<LineItem> getLineItems() { return lineItems; }
    public void setLineItems(List<LineItem> lineItems) { this.lineItems = lineItems; }

    public Double getSubtotal() { return subtotal; }
    public void setSubtotal(Double subtotal) { this.subtotal = subtotal; }

    public Double getTaxAmount() { return taxAmount; }
    public void setTaxAmount(Double taxAmount) { this.taxAmount = taxAmount; }

    public Double getDiscountAmount() { return discountAmount; }
    public void setDiscountAmount(Double discountAmount) { this.discountAmount = discountAmount; }

    public Double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(Double totalAmount) { this.totalAmount = totalAmount; }

    public String getPaymentStatus() { return paymentStatus; }
    public void setPaymentStatus(String paymentStatus) { this.paymentStatus = paymentStatus; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public InsuranceDetail getInsuranceDetail() { return insuranceDetail; }
    public void setInsuranceDetail(InsuranceDetail insuranceDetail) { this.insuranceDetail = insuranceDetail; }

    public LocalDateTime getInvoiceDate() { return invoiceDate; }
    public void setInvoiceDate(LocalDateTime invoiceDate) { this.invoiceDate = invoiceDate; }

    public LocalDateTime getDueDate() { return dueDate; }
    public void setDueDate(LocalDateTime dueDate) { this.dueDate = dueDate; }
}