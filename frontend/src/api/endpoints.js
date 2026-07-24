
const BASE_URL = 'http://localhost:8082';

export const ENDPOINTS = {

    LOGIN: `${BASE_URL}/auth/login`,

    PATIENT: `${BASE_URL}/patients`,

    DOCTOR: `${BASE_URL}/doctors`,

    APPOINTMENT: `${BASE_URL}/appointments`,

    BILLING: `${BASE_URL}/billing`,

    LAB: `${BASE_URL}/labs`,

    LABTEST: `${BASE_URL}/labtests`,

    NURSE: `${BASE_URL}/nurses`,

    ROOM: `${BASE_URL}/rooms`

};

export default ENDPOINTS;
