package com.hospital.service;

import com.hospital.model.Bed;
import com.hospital.repository.BedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BedService {

    @Autowired
    private BedRepository bedRepository;

    public List<Bed> getAllBeds() {
        return bedRepository.findAll();
    }

    public Bed addBed(Bed bed) {
        return bedRepository.save(bed);
    }

    public Bed toggleBedStatus(String id) {
        return bedRepository.findById(id).map(bed -> {
            String current = bed.getStatus();
            if ("Available".equalsIgnoreCase(current)) bed.setStatus("Occupied");
            else if ("Occupied".equalsIgnoreCase(current)) bed.setStatus("Maintenance");
            else bed.setStatus("Available");
            return bedRepository.save(bed);
        }).orElseThrow(() -> new RuntimeException("Bed not found: " + id));
    }

    public void deleteBed(String id) {
        bedRepository.deleteById(id);
    }
}