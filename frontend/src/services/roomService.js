import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

const roomService = {

    getAllRooms() {
        return api.get(ENDPOINTS.ROOM);
    },

    getRoomById(id) {
        return api.get(`${ENDPOINTS.ROOM}/${id}`);
    },

    addRoom(room) {
        return api.post(ENDPOINTS.ROOM, room);
    },

    updateRoom(id, room) {
        return api.put(`${ENDPOINTS.ROOM}/${id}`, room);
    },

getRoomsByStatus(status) {
    return api.get(`${ENDPOINTS.ROOM}/status/${status}`);
},

getRoomsByType(type) {
    return api.get(`${ENDPOINTS.ROOM}/type/${type}`);
},

    deleteRoom(id) {
        return api.delete(`${ENDPOINTS.ROOM}/${id}`);
    }

};

export default roomService;