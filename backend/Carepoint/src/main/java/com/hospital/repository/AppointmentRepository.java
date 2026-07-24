package com.hospital.repository;

import com.hospital.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {
    List<Appointment> findTop10ByOrderByAppointmentDateDesc();
    long countByStatus(String status);
}
