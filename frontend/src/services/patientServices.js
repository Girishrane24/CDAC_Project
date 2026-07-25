// import api from "../api/axios";
// import { ENDPOINTS } from "../api/endpoints";

// export const getPatients = () =>
//     api.get(ENDPOINTS.PATIENT);

// export const addPatient = (patient) =>
//     api.post(ENDPOINTS.PATIENT, patient);

// export const updatePatient = (id, patient) =>
//     api.put(`${ENDPOINTS.PATIENT}/${id}`, patient);

// export const deletePatient = (id) =>
//     api.delete(`${ENDPOINTS.PATIENT}/${id}`);


import api from "../api/axios";

export const getPatients = () => api.get("/patients");

export const addPatient = (patient) => api.post("/patients", patient);

export const updatePatient = (id, patient) =>
  api.put(`/patients/${id}`, patient);

export const deletePatient = (id) => api.delete(`/patients/${id}`);