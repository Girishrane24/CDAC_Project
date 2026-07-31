import api from "../api/axios";

/**
 * Get all bills
 */
const getAllBills = async () => {
    return await api.get("/billing");
};

/**
 * Get bill by ID
 */
const getBillById = async (id) => {
    return await api.get(`/billing/${id}`);
};

/**
 * Create a new bill
 */
const createBill = async (billData) => {
    return await api.post("/billing", billData);
};

/**
 * Update bill
 */
const updateBill = async (id, billData) => {
    return await api.put(`/billing/${id}`, billData);
};

/**
 * Delete bill
 */
const deleteBill = async (id) => {
    return await api.delete(`/billing/${id}`);
};

/**
 * Search bills by patient name
 */
const getBillsByPatient = async (patientName) => {
    return await api.get(`/billing/patient/${patientName}`);
};

/**
 * Search bills by payment status
 */
const getBillsByStatus = async (status) => {
    return await api.get(`/billing/status/${status}`);
};

const billingService = {
    getAllBills,
    getBillById,
    createBill,
    updateBill,
    deleteBill,
    getBillsByPatient,
    getBillsByStatus,
};

export default billingService;