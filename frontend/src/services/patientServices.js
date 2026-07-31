


// import api from "../api/axios";

// export const getPatients = () => api.get("/patients");

// export const addPatient = (patient) => api.post("/patients", patient);


// export const updatePatient = (id, patient) =>
//   api.put(`/patients/${id}`, patient);


// export const deletePatient = (id) => api.delete(`/patients/${id}`);


import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

// Named exports (for existing components)

export const getPatients = () => api.get(ENDPOINTS.PATIENT);

export const getAllPatients = () => api.get(ENDPOINTS.PATIENT);

export const getPatientById = (id) =>
    api.get(`${ENDPOINTS.PATIENT}/${id}`);

export const addPatient = (patient) =>
    api.post(ENDPOINTS.PATIENT, patient);

export const updatePatient = (id, patient) =>
    api.put(`${ENDPOINTS.PATIENT}/${id}`, patient);

export const deletePatient = (id) =>
    api.delete(`${ENDPOINTS.PATIENT}/${id}`);


// Default export (for RoomAllocation)

const patientService = {
    getPatients,
    getAllPatients,
    getPatientById,
    addPatient,
    updatePatient,
    deletePatient,
};

export default patientService;