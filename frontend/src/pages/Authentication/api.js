const BASE_URL = "http://localhost:5173"; // Replace with your actual backend URL

// Helper to construct headers with the stored JWT
const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : ""
    };
};

export const api = {
    getDashboardSummary: async () => {
        const response = await fetch(`${BASE_URL}/dashboard/summary`, {
            headers: getAuthHeaders()
        });
        return response.json();
    },

    getPatients: async () => {
        const response = await fetch(`${BASE_URL}/patients`, {
            headers: getAuthHeaders()
        });
        return response.json();
    }
};