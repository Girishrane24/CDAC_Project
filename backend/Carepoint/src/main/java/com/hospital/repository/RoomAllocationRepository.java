package com.hospital.repository;


import com.hospital.model.RoomAllocation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomAllocationRepository extends MongoRepository<RoomAllocation, String> {
}