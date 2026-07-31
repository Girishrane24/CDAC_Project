package com.hospital.model;


import java.time.LocalDate;

public class MedicalHistory {
    private String diagnosis;
    private String treatment;
    private String doctorName;
    private LocalDate visitDate;

    // Constructors
    public MedicalHistory() {}

    public MedicalHistory(String diagnosis, String treatment, String doctorName, LocalDate visitDate) {
        this.diagnosis = diagnosis;
        this.treatment = treatment;
        this.doctorName = doctorName;
        this.visitDate = visitDate;
    }

    // Getters and Setters
    public String getDiagnosis() { return diagnosis; }
    public void setDiagnosis(String diagnosis) { this.diagnosis = diagnosis; }

    public String getTreatment() { return treatment; }
    public void setTreatment(String treatment) { this.treatment = treatment; }

    public String getDoctorName() { return doctorName; }
    public void setDoctorName(String doctorName) { this.doctorName = doctorName; }

    public LocalDate getVisitDate() { return visitDate; }
    public void setVisitDate(LocalDate visitDate) { this.visitDate = visitDate; }
}