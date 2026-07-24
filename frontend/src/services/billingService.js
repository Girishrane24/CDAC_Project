import api from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';

export const billingService = {
  getAll: () => api.get(ENDPOINTS.BILLING),
  getById: (id) => api.get(`${ENDPOINTS.BILLING}/${id}`),
  create: (billData) => api.post(ENDPOINTS.BILLING, billData),
  update: (id, billData) => api.put(`${ENDPOINTS.BILLING}/${id}`, billData),
  delete: (id) => api.delete(`${ENDPOINTS.BILLING}/${id}`),
};