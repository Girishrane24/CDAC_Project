import api from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';

export const appointmentService = {
  getAll: () => api.get(ENDPOINTS.APPOINTMENTS),
  getById: (id) => api.get(`${ENDPOINTS.APPOINTMENTS}/${id}`),
  create: (appointmentData) => api.post(ENDPOINTS.APPOINTMENTS, appointmentData),
  update: (id, appointmentData) => api.put(`${ENDPOINTS.APPOINTMENTS}/${id}`, appointmentData),
  delete: (id) => api.delete(`${ENDPOINTS.APPOINTMENTS}/${id}`),
};