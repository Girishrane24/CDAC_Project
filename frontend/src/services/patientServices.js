import api from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';

export const patientService = {
  getAll: () => api.get(ENDPOINTS.PATIENTS),
  getById: (id) => api.get(`${ENDPOINTS.PATIENTS}/${id}`),
  create: (patientData) => api.post(ENDPOINTS.PATIENTS, patientData),
  update: (id, patientData) => api.put(`${ENDPOINTS.PATIENTS}/${id}`, patientData),
  delete: (id) => api.delete(`${ENDPOINTS.PATIENTS}/${id}`),
};