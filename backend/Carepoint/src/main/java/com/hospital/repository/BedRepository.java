package com.hospital.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.Bed;

@Repository
public interface BedRepository extends MongoRepository<Bed, String> {

    // Find by Bed Number
    Optional<Bed> findByBedNumber(String bedNumber);

    // Check duplicate Bed Number
    boolean existsByBedNumber(String bedNumber);

    // Find all beds in a room
    List<Bed> findByRoomNumber(String roomNumber);

    // Find beds by status
    List<Bed> findByStatus(String status);

}
