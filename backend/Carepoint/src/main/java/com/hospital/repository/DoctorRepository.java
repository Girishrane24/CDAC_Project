package com.hospital.repository;

import com.hospital.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor, String> {

    List<Doctor> findBySpecializationContainingIgnoreCase(String specialization);

    List<Doctor> findByNameContainingIgnoreCase(String name);
    Optional<Doctor> findByName(String name);

}
