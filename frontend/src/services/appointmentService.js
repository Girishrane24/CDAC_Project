import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

export const getAppointments = () => {
    return api.get(ENDPOINTS.APPOINTMENT);
};

export const getAppointmentById = (id) => {
    return api.get(`${ENDPOINTS.APPOINTMENT}/${id}`);
};

export const addAppointment = (appointment) => {
    return api.post(ENDPOINTS.APPOINTMENT, appointment);
};

export const updateAppointment = (id, appointment) => {
    return api.put(`${ENDPOINTS.APPOINTMENT}/${id}`, appointment);
};

export const deleteAppointment = (id) => {
    return api.delete(`${ENDPOINTS.APPOINTMENT}/${id}`);
};