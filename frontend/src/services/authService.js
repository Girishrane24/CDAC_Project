import api from "../api/axios";

const login = async (credentials) => {
    return await api.post("/auth/login", credentials);
};

const authService = {
    login,
};

export default authService;