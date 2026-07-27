package com.hospital.service;


import com.hospital.model.Nurse;
import com.hospital.repository.NurseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NurseService {

    @Autowired
    private NurseRepository nurseRepository;

    public List<Nurse> getAllNurses() {
        return nurseRepository.findAll();
    }

    public Optional<Nurse> getNurseById(String id) {
        return nurseRepository.findById(id);
    }

    public Nurse createNurse(Nurse nurse) {
        return nurseRepository.save(nurse);
    }

    public Nurse updateNurse(String id, Nurse nurseDetails) {
        return nurseRepository.findById(id).map(nurse -> {
            nurse.setName(nurseDetails.getName());
            nurse.setEmail(nurseDetails.getEmail());
            nurse.setPhone(nurseDetails.getPhone());
            nurse.setDepartment(nurseDetails.getDepartment());
            nurse.setShift(nurseDetails.getShift());
            nurse.setQualification(nurseDetails.getQualification());
            nurse.setStatus(nurseDetails.getStatus());
            return nurseRepository.save(nurse);
        }).orElseThrow(() -> new RuntimeException("Nurse not found with id: " + id));
    }

    public void deleteNurse(String id) {
        nurseRepository.deleteById(id);
    }
}