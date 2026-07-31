package com.hospital.repository;

import com.hospital.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

    List<Appointment> findByPatientName(String patientName);

    List<Appointment> findByDoctorName(String doctorName);

    List<Appointment> findByAppointmentDate(LocalDate appointmentDate);

    List<Appointment> findByDoctorNameAndAppointmentDate(
            String doctorName,
            LocalDate appointmentDate);

    List<Appointment> findByStatus(String status);

}