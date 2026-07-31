package com.hospital.dto;


import jakarta.validation.constraints.NotBlank;

public class LabResultUpdateDTO {

    @NotBlank(message = "Status is required")
    private String status; // e.g., COMPLETED

    @NotBlank(message = "Test result details are required")
    private String testResult;

    private String remarks;

    // Getters and Setters
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getTestResult() { return testResult; }
    public void setTestResult(String testResult) { this.testResult = testResult; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
}