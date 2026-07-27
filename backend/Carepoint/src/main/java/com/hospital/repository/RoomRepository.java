package com.hospital.repository;


import com.hospital.model.Room;
import com.hospital.model.enumm.RoomStatus;
import com.hospital.model.enumm.RoomType;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoomRepository extends MongoRepository<Room, String> {
    Optional<Room> findByRoomNumber(String roomNumber);
    List<Room> findByStatus(RoomStatus status);
    List<Room> findByFloor(Integer floor);
    List<Room> findByRoomType(RoomType roomType);
    long countByStatus(RoomStatus status);
}