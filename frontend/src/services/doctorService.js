import api from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';

export const doctorService = {
  getAll: () => api.get(ENDPOINTS.DOCTORS),
  getById: (id) => api.get(`${ENDPOINTS.DOCTORS}/${id}`),
  create: (doctorData) => api.post(ENDPOINTS.DOCTORS, doctorData),
  update: (id, doctorData) => api.put(`${ENDPOINTS.DOCTORS}/${id}`, doctorData),
  delete: (id) => api.delete(`${ENDPOINTS.DOCTORS}/${id}`),
};