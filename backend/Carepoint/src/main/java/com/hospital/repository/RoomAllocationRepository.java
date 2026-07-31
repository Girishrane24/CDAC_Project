package com.hospital.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.RoomAllocation;

@Repository
public interface RoomAllocationRepository extends MongoRepository<RoomAllocation, String> {

    List<RoomAllocation> findByPatientId(String patientId);

    List<RoomAllocation> findByRoomId(String roomId);

    List<RoomAllocation> findByStatus(String status);

    boolean existsByRoomIdAndStatus(String roomId, String status);
    
    List<RoomAllocation> findByPatientName(String patientName);

}