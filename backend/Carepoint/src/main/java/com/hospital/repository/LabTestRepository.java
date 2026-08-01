package com.hospital.repository;

import com.hospital.model.LabTest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabTestRepository extends MongoRepository<LabTest, String> {

    List<LabTest> findByPatientId(String patientId);

    List<LabTest> findByAppointmentId(String appointmentId);

    List<LabTest> findByLabId(String labId);

    List<LabTest> findByStatus(String status);
    
    List<LabTest> findByPatientName(String patientName);
}