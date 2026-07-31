import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

const bedService = {

    // Get All Beds
    getAllBeds() {
        return api.get(ENDPOINTS.BED);
    },

    // Get Bed By ID
    getBedById(id) {
        return api.get(`${ENDPOINTS.BED}/${id}`);
    },

    // Add Bed
    addBed(bed) {
        return api.post(ENDPOINTS.BED, bed);
    },

    // Update Bed
    updateBed(id, bed) {
        return api.put(`${ENDPOINTS.BED}/${id}`, bed);
    },

    // Delete Bed
    deleteBed(id) {
        return api.delete(`${ENDPOINTS.BED}/${id}`);
    },

    // Change Bed Status
    changeStatus(id, status) {
        return api.put(
            `${ENDPOINTS.BED}/${id}/status?status=${status}`
        );
    }

};

export default bedService;