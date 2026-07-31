package com.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Bed;
import com.hospital.repository.BedRepository;

@Service
public class BedService {

    private final BedRepository bedRepository;

    @Autowired
    public BedService(BedRepository bedRepository) {
        this.bedRepository = bedRepository;
    }

    // Get All Beds
    public List<Bed> getAllBeds() {
        return bedRepository.findAll();
    }

    // Get Bed By ID
    public Bed getBedById(String id) {
        return bedRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Bed not found with id: " + id));
    }

    // Add Bed
    public Bed createBed(Bed bed) {

        if (bedRepository.existsByBedNumber(bed.getBedNumber())) {
            throw new RuntimeException(
                    "Bed Number " + bed.getBedNumber() + " already exists.");
        }

        return bedRepository.save(bed);
    }

    // Update Bed
    public Bed updateBed(String id, Bed updatedBed) {

        Bed bed = getBedById(id);

        // Check duplicate bed number
        if (!bed.getBedNumber().equals(updatedBed.getBedNumber())
                && bedRepository.existsByBedNumber(updatedBed.getBedNumber())) {

            throw new RuntimeException(
                    "Bed Number " + updatedBed.getBedNumber() + " already exists.");
        }

        bed.setBedNumber(updatedBed.getBedNumber());
        bed.setRoomNumber(updatedBed.getRoomNumber());
        bed.setStatus(updatedBed.getStatus());

        return bedRepository.save(bed);
    }

    // Delete Bed
    public void deleteBed(String id) {

        if (!bedRepository.existsById(id)) {
            throw new RuntimeException(
                    "Bed not found with id: " + id);
        }

        bedRepository.deleteById(id);
    }

    // Change Bed Status
    public Bed changeStatus(String id, String status) {

        Bed bed = getBedById(id);

        bed.setStatus(status);

        return bedRepository.save(bed);
    }

    // Get Beds By Room Number
    public List<Bed> getBedsByRoom(String roomNumber) {
        return bedRepository.findByRoomNumber(roomNumber);
    }

    // Get Beds By Status
    public List<Bed> getBedsByStatus(String status) {
        return bedRepository.findByStatus(status);
    }
}
