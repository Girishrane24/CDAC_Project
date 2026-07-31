import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios"; // Change path if needed
import "./EditBill.css";

function EditBill() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [bill, setBill] = useState({
        id: "",
        patientName: "",
        doctorName: "",
        consultationFee: "",
        labCharges: "",
        roomCharges: "",
        paymentMode: "Cash",
        status: "Paid",
        generatedDate: ""
    });

    useEffect(() => {
        loadBill();
    }, []);

    const loadBill = async () => {
        try {
            const response = await api.get(`/billing/${id}`);
            setBill(response.data);
        } catch (error) {
            console.error("Error loading bill:", error);
            alert("Failed to load bill.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBill({
            ...bill,
            [name]: value
        });
    };

    const totalAmount =
        (Number(bill.consultationFee) || 0) +
        (Number(bill.labCharges) || 0) +
        (Number(bill.roomCharges) || 0);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const updatedBill = {
            ...bill,
            consultationFee: Number(bill.consultationFee),
            labCharges: Number(bill.labCharges),
            roomCharges: Number(bill.roomCharges),
            totalAmount
        };

        try {

            await api.put(`/billing/${id}`, updatedBill);

            alert("Bill Updated Successfully!");

            navigate("/billing");

        } catch (error) {
            console.error("Error updating bill:", error);
            alert("Failed to update bill.");
        }
    };

    return (
        <div className="edit-bill-container">

            <div className="card shadow">

                <div className="card-header bg-warning">
                    <h3>Edit Bill</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Bill ID
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={bill.id}
                                    disabled
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Patient Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="patientName"
                                    value={bill.patientName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Doctor Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="doctorName"
                                    value={bill.doctorName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Consultation Fee
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    name="consultationFee"
                                    value={bill.consultationFee}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Lab Charges
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    name="labCharges"
                                    value={bill.labCharges}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Room Charges
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    name="roomCharges"
                                    value={bill.roomCharges}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Payment Mode
                                </label>

                                <select
                                    className="form-select"
                                    name="paymentMode"
                                    value={bill.paymentMode}
                                    onChange={handleChange}
                                >
                                    <option value="Cash">Cash</option>
                                    <option value="Card">Card</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Net Banking">Net Banking</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Payment Status
                                </label>

                                <select
                                    className="form-select"
                                    name="status"
                                    value={bill.status}
                                    onChange={handleChange}
                                >
                                    <option value="Paid">Paid</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            <div className="col-12 mb-4">

                                <div className="alert alert-info">
                                    <h4>
                                        Total Amount : ₹ {totalAmount.toLocaleString("en-IN")}
                                    </h4>
                                </div>

                            </div>

                        </div>

                        <div className="text-end">

                            <button
                                type="button"
                                className="btn btn-secondary me-2"
                                onClick={() => navigate("/billing")}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-warning"
                            >
                                Update Bill
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default EditBill;