package com.hospital.repository;


import com.entity.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {
    
    // Custom method to fetch top 10 recent appointments ordered by date
    List<Appointment> findTop10ByOrderByAppointmentDateDesc();

    // Count appointments by status
    long countByStatus(String status);
}