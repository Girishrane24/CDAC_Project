import api from "../api/axios";

export const getDoctors = () => {
  return api.get("/doctors");
};

export const getDoctorById = (id) => {
  return api.get(`/doctors/${id}`);
};

export const addDoctor = (doctor) => {
  return api.post("/doctors", doctor);
};

export const updateDoctor = (id, doctor) => {
  return api.put(`/doctors/${id}`, doctor);
};

export const deleteDoctor = (id) => {
  return api.delete(`/doctors/${id}`);
};

export const searchDoctorBySpecialization = (specialization) => {
  return api.get(`/doctors/specialization/${specialization}`);
};