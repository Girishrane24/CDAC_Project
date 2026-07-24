const BASE_URL = "http://localhost:8081/api";

export const api = {
    // --- DASHBOARD ---
    getDashboardSummary: async () => {
        const response = await fetch(`${BASE_URL}/dashboard/summary`);
        return response.json();
    },

    // --- PATIENTS ---
    getPatients: async () => {
        const response = await fetch(`${BASE_URL}/patients`);
        return response.json();
    },

    addPatient: async (patientData) => {
        const response = await fetch(`${BASE_URL}/patients`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patientData),
        });
        return response.json();
    },

    deletePatient: async (id) => {
        await fetch(`${BASE_URL}/patients/${id}`, { method: "DELETE" });
    },

    // --- APPOINTMENTS ---
    getAppointments: async () => {
        const response = await fetch(`${BASE_URL}/appointments`);
        return response.json();
    },

    createAppointment: async (appointmentData) => {
        const response = await fetch(`${BASE_URL}/appointments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appointmentData),
        });
        return response.json();
    },
};