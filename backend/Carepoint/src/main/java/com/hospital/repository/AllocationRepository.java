package com.hospital.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.Allocation;
import com.hospital.model.enumm.AllocationStatus;

import java.util.List;

@Repository
public interface AllocationRepository extends MongoRepository<Allocation, String> {
    List<Allocation> findByRoomIdAndStatus(String roomId, AllocationStatus status);
    List<Allocation> findByOccupantId(String occupantId);
}