import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

const roomAllocationService = {

    // Get all room allocations
    getAllAllocations() {
        return api.get(ENDPOINTS.ROOM_ALLOCATION);
    },

    // Get allocation by ID
    getAllocationById(id) {
        return api.get(`${ENDPOINTS.ROOM_ALLOCATION}/${id}`);
    },

    // Allocate a room
    allocateRoom(allocationData) {
        return api.post(
            ENDPOINTS.ROOM_ALLOCATION,
            allocationData
        );
    },

    // Discharge a patient
    dischargePatient(id) {
        return api.put(
            `${ENDPOINTS.ROOM_ALLOCATION}/${id}/discharge`
        );
    },

    // Delete an allocation
    deleteAllocation(id) {
        return api.delete(
            `${ENDPOINTS.ROOM_ALLOCATION}/${id}`
        );
    }

};

export default roomAllocationService;