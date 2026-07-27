package com.hospital.service;


import com.hospital.dto.LabResultUpdateDTO;
import com.hospital.dto.LabTestRequestDTO;
import com.hospital.model.LabTest;
import com.hospital.repository.LabTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LabTestService {

    private final LabTestRepository labTestRepository;

    @Autowired
    public LabTestService(LabTestRepository labTestRepository) {
        this.labTestRepository = labTestRepository;
    }

    public List<LabTest> getAllLabTests() {
        return labTestRepository.findAll();
    }

    public LabTest getLabTestById(String id) {
        return labTestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lab test record not found with ID: " + id));
    }

    public List<LabTest> getTestsByPatientId(String patientId) {
        return labTestRepository.findByPatientId(patientId);
    }

    public LabTest createLabTest(LabTestRequestDTO dto) {
        if (labTestRepository.existsByTestCode(dto.getTestCode())) {
            throw new IllegalArgumentException("Test code " + dto.getTestCode() + " already exists.");
        }

        LabTest test = new LabTest();
        test.setTestCode(dto.getTestCode());
        test.setPatientId(dto.getPatientId());
        test.setTestName(dto.getTestName());
        test.setCategory(dto.getCategory());
        test.setCost(dto.getCost());
        test.setStatus("PENDING");
        test.setSampleCollectedAt(LocalDateTime.now());

        return labTestRepository.save(test);
    }

    public LabTest updateTestResult(String id, LabResultUpdateDTO dto) {
        LabTest test = getLabTestById(id);

        test.setStatus(dto.getStatus());
        test.setTestResult(dto.getTestResult());
        test.setRemarks(dto.getRemarks());
        test.setResultGeneratedAt(LocalDateTime.now());

        return labTestRepository.save(test);
    }

    public void deleteLabTest(String id) {
        if (!labTestRepository.existsById(id)) {
            throw new RuntimeException("Lab test record not found with ID: " + id);
        }
        labTestRepository.deleteById(id);
    }
}