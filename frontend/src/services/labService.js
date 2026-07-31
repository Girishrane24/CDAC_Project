import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

export const getLabs = () => {
    return api.get(ENDPOINTS.LAB);
};

export const getLabById = (id) => {
    return api.get(`${ENDPOINTS.LAB}/${id}`);
};

export const addLab = (lab) => {
    return api.post(ENDPOINTS.LAB, lab);
};

export const updateLab = (id, lab) => {
    return api.put(`${ENDPOINTS.LAB}/${id}`, lab);
};

export const deleteLab = (id) => {
    return api.delete(`${ENDPOINTS.LAB}/${id}`);
};