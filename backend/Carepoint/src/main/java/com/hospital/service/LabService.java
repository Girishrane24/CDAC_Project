package com.hospital.service;

import com.hospital.model.Lab;
import com.hospital.repository.LabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabService {

    @Autowired
    private LabRepository labRepository;

    // Get All Laboratories
    public List<Lab> getAllLabs() {
        return labRepository.findAll();
    }

    // Get Laboratory By ID
    public Optional<Lab> getLabById(String id) {
        return labRepository.findById(id);
    }

    // Add Laboratory
    public Lab addLab(Lab lab) {
        return labRepository.save(lab);
    }

    // Update Laboratory
    public Lab updateLab(String id, Lab updatedLab) {

        return labRepository.findById(id)
                .map(lab -> {

                    lab.setLabName(updatedLab.getLabName());
                    lab.setLocation(updatedLab.getLocation());
                    lab.setPhone(updatedLab.getPhone());

                    return labRepository.save(lab);

                })
                .orElseThrow(() ->
                        new RuntimeException(
                                "Laboratory not found with id: " + id
                        )
                );
    }

    // Delete Laboratory
    public void deleteLab(String id) {

        Lab lab = labRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Laboratory not found with id: " + id
                        )
                );

        labRepository.delete(lab);
    }
}
