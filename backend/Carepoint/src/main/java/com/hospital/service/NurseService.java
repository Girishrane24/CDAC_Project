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

    // Get all nurses
    public List<Nurse> getAllNurses() {
        return nurseRepository.findAll();
    }

    // Get nurse by ID
    public Optional<Nurse> getNurseById(String nurseId) {
        return nurseRepository.findById(nurseId);
    }

    // Create nurse
    public Nurse createNurse(Nurse nurse) {
        return nurseRepository.save(nurse);
    }

    // Update nurse
    public Nurse updateNurse(String nurseId, Nurse nurseDetails) {

        return nurseRepository.findById(nurseId)
                .map(nurse -> {

                    nurse.setName(nurseDetails.getName());
                    nurse.setEmail(nurseDetails.getEmail());
                    nurse.setPhone(nurseDetails.getPhone());
                    nurse.setGender(nurseDetails.getGender());
                    nurse.setQualification(nurseDetails.getQualification());
                    nurse.setExperience(nurseDetails.getExperience());
                    nurse.setDepartment(nurseDetails.getDepartment());
                    nurse.setShift(nurseDetails.getShift());
                    nurse.setJoiningDate(nurseDetails.getJoiningDate());
                    nurse.setAvailabilityStatus(nurseDetails.getAvailabilityStatus());

                    return nurseRepository.save(nurse);
                })
                .orElseThrow(() -> new RuntimeException("Nurse not found with ID: " + nurseId));
    }

    // Delete nurse
    public void deleteNurse(String nurseId) {
        nurseRepository.deleteById(nurseId);
    }
}