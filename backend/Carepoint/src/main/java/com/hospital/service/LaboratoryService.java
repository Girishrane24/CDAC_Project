package com.hospital.service;


import com.hospital.model.Laboratory;
import com.hospital.repository.LaboratoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LaboratoryService {

    @Autowired
    private LaboratoryRepository repository;

    public List<Laboratory> getAllLaboratories() {
        return repository.findAll();
    }

    public Optional<Laboratory> getLaboratoryByLabId(String labId) {
        return repository.findByLabId(labId);
    }

    public Laboratory createLaboratory(Laboratory lab) {
        return repository.save(lab);
    }

    public Laboratory updateLaboratory(String labId, Laboratory updatedLab) {
        Optional<Laboratory> existingLabOpt = repository.findByLabId(labId);

        if (existingLabOpt.isPresent()) {
            Laboratory existingLab = existingLabOpt.get();
            existingLab.setLabName(updatedLab.getLabName());
            existingLab.setLocation(updatedLab.getLocation());
            existingLab.setPhone(updatedLab.getPhone());
            return repository.save(existingLab);
        } else {
            throw new RuntimeException("Laboratory not found with labId: " + labId);
        }
    }

    public void deleteLaboratory(String labId) {
        repository.deleteByLabId(labId);
    }
}