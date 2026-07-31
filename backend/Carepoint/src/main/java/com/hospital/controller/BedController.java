package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Bed;
import com.hospital.service.BedService;

@RestController
@RequestMapping("/api/beds")
@CrossOrigin(origins = "http://localhost:5173")
public class BedController {

    @Autowired
    private BedService bedService;

    // Add Bed
    @PostMapping
    public Bed addBed(@RequestBody Bed bed) {
        return bedService.createBed(bed);
    }

    // Get All Beds
    @GetMapping
    public List<Bed> getAllBeds() {
        return bedService.getAllBeds();
    }

    // Get Bed By ID
    @GetMapping("/{id}")
    public Bed getBedById(@PathVariable String id) {
        return bedService.getBedById(id);
    }

    // Update Bed
    @PutMapping("/{id}")
    public Bed updateBed(@PathVariable String id,
                         @RequestBody Bed bed) {
        return bedService.updateBed(id, bed);
    }

    // Delete Bed
    @DeleteMapping("/{id}")
    public String deleteBed(@PathVariable String id) {

        bedService.deleteBed(id);

        return "Bed deleted successfully.";
    }

    // Change Bed Status
    @PutMapping("/{id}/status")
    public Bed changeStatus(@PathVariable String id,
                            @RequestParam String status) {

        return bedService.changeStatus(id, status);
    }

    // Get Beds By Room Number
    @GetMapping("/room/{roomNumber}")
    public List<Bed> getBedsByRoom(@PathVariable String roomNumber) {
        return bedService.getBedsByRoom(roomNumber);
    }

    // Get Beds By Status
    @GetMapping("/status/{status}")
    public List<Bed> getBedsByStatus(@PathVariable String status) {
        return bedService.getBedsByStatus(status);
    }

}