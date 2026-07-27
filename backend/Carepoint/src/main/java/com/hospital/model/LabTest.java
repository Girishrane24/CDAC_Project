package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Document(collection = "lab_tests")
public class LabTest {

    @Id
    private String id;

    @Indexed(unique = true)
    private String testCode;

    private String patientId;
    private String testName;
    private String category; // e.g., Hematology, Biochemistry, Radiology
    private BigDecimal cost;
    private String status; // PENDING, IN_PROGRESS, COMPLETED, CANCELLED
    private String testResult;
    private String remarks;
    private LocalDateTime sampleCollectedAt;
    private LocalDateTime resultGeneratedAt;

    public LabTest() {}

    public LabTest(String testCode, String patientId, String testName, String category, BigDecimal cost, String status) {
        this.testCode = testCode;
        this.patientId = patientId;
        this.testName = testName;
        this.category = category;
        this.cost = cost;
        this.status = status;
        this.sampleCollectedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTestCode() { return testCode; }
    public void setTestCode(String testCode) { this.testCode = testCode; }

    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }

    public String getTestName() { return testName; }
    public void setTestName(String testName) { this.testName = testName; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public BigDecimal getCost() { return cost; }
    public void setCost(BigDecimal cost) { this.cost = cost; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getTestResult() { return testResult; }
    public void setTestResult(String testResult) { this.testResult = testResult; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }

    public LocalDateTime getSampleCollectedAt() { return sampleCollectedAt; }
    public void setSampleCollectedAt(LocalDateTime sampleCollectedAt) { this.sampleCollectedAt = sampleCollectedAt; }

    public LocalDateTime getResultGeneratedAt() { return resultGeneratedAt; }
    public void setResultGeneratedAt(LocalDateTime resultGeneratedAt) { this.resultGeneratedAt = resultGeneratedAt; }
}