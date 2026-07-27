package com.hospital.repository;


import com.hospital.model.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoomRepository extends MongoRepository<Room, String> {
    Optional<Room> findByRoomNumber(String roomNumber);
    List<Room> findByIsAvailable(Boolean isAvailable);
    List<Room> findByType(String type);
    boolean existsByRoomNumber(String roomNumber);
}