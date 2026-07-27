package com.hospital.repository;


import com.hospital.model.Bed;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BedRepository extends MongoRepository<Bed, String> {
}