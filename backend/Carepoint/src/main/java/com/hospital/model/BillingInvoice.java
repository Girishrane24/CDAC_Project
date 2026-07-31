package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "billing")
public class BillingInvoice {

    @Id
    private String id;

    private String patientName;
    private String doctorName;

    private Double consultationFee;
    private Double labCharges;
    private Double roomCharges;

    private Double totalAmount;

    private String paymentMode;
    private String status;

    private String generatedDate;

    public BillingInvoice() {
    }

    public BillingInvoice(String patientName,
                          String doctorName,
                          Double consultationFee,
                          Double labCharges,
                          Double roomCharges,
                          Double totalAmount,
                          String paymentMode,
                          String status,
                          String generatedDate) {
        this.patientName = patientName;
        this.doctorName = doctorName;
        this.consultationFee = consultationFee;
        this.labCharges = labCharges;
        this.roomCharges = roomCharges;
        this.totalAmount = totalAmount;
        this.paymentMode = paymentMode;
        this.status = status;
        this.generatedDate = generatedDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public Double getConsultationFee() {
        return consultationFee;
    }

    public void setConsultationFee(Double consultationFee) {
        this.consultationFee = consultationFee;
    }

    public Double getLabCharges() {
        return labCharges;
    }

    public void setLabCharges(Double labCharges) {
        this.labCharges = labCharges;
    }

    public Double getRoomCharges() {
        return roomCharges;
    }

    public void setRoomCharges(Double roomCharges) {
        this.roomCharges = roomCharges;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getGeneratedDate() {
        return generatedDate;
    }

    public void setGeneratedDate(String generatedDate) {
        this.generatedDate = generatedDate;
    }
}