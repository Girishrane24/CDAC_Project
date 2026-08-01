import api from "../api/axios"
import { ENDPOINTS } from "../api/endpoints";

// GET All Nurses
export const getAllNurses = async () => {
  const response = await api.get(ENDPOINTS.NURSE);
  return response.data;
};

// GET Nurse By Id
export const getNurseById = async (id) => {
  const response = await api.get(`${ENDPOINTS.NURSE}/${id}`);
  return response.data;
};

// POST
export const addNurse = async (nurse) => {
  const response = await api.post(ENDPOINTS.NURSE, nurse);
  return response.data;
};

// PUT
export const updateNurse = async (id, nurse) => {
  const response = await api.put(`${ENDPOINTS.NURSE}/${id}`, nurse);
  return response.data;
};

// DELETE
export const deleteNurse = async (id) => {
  const response = await api.delete(`${ENDPOINTS.NURSE}/${id}`);
  return response.data;
};