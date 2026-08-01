package com.hospital.repository;

import com.hospital.model.Lab;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LabRepository extends MongoRepository<Lab, String> {
}