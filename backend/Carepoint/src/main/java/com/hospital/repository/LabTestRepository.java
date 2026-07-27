package com.hospital.repository;


import com.hospital.model.LabTest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabTestRepository extends MongoRepository<LabTest, String> {
    List<LabTest> findByPatientId(String patientId);
    List<LabTest> findByStatus(String status);
    boolean existsByTestCode(String testCode);
}