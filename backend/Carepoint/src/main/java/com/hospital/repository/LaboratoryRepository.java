package com.hospital.repository;


import com.hospital.model.Laboratory;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface LaboratoryRepository extends MongoRepository<Laboratory, String> {
    
    // Find by the custom labId string (e.g. LAB001) used by frontend
    Optional<Laboratory> findByLabId(String labId);

    // Delete by custom labId string
    void deleteByLabId(String labId);
}