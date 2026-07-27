package com.hospital.repository;


import com.hospital.model.PatientVitals;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PatientVitalsRepository extends MongoRepository<PatientVitals, String> {
    List<PatientVitals> findByPatientId(String patientId);
    List<PatientVitals> findByNurseId(String nurseId);
}