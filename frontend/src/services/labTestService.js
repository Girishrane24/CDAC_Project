import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
// Get all Lab Tests
export const getLabTests = () => {
    return api.get(ENDPOINTS.LABTEST);
};

// Get Lab Test by Mongo ID
export const getLabTestById = (id) => {
    return api.get(`${ENDPOINTS.LABTEST}/${id}`);
};

// Add Lab Test
export const addLabTest = (labTest) => {
    return api.post(ENDPOINTS.LABTEST, labTest);
};

// Update Lab Test
export const updateLabTest = (id, labTest) => {
    return api.put(`${ENDPOINTS.LABTEST}/${id}`, labTest);
};

// Delete Lab Test
export const deleteLabTest = (id) => {
    return api.delete(`${ENDPOINTS.LABTEST}/${id}`);
};

// Search by Patient
export const getLabTestsByPatient = (patientId) => {
    return api.get(`${ENDPOINTS.LABTEST}/patient/${patientId}`);
};

// Search by Appointment
export const getLabTestsByAppointment = (appointmentId) => {
    return api.get(`${ENDPOINTS.LABTEST}/appointment/${appointmentId}`);
};

// Search by Laboratory
export const getLabTestsByLab = (labId) => {
    return api.get(`${ENDPOINTS.LABTEST}/lab/${labId}`);
};

// Search by Status
export const getLabTestsByStatus = (status) => {
    return api.get(`${ENDPOINTS.LABTEST}/status/${status}`);
};