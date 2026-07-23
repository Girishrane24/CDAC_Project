import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBill.css";

function CreateBill() {

    const navigate = useNavigate();

    const [bill, setBill] = useState({

        patientName: "",
        doctorName: "",
        consultationFee: "",
        labCharges: "",
        medicineCharges: "",
        roomCharges: "",
        paymentMode: "Cash",
        status: "Paid"

    });

    const handleChange = (e) => {

        setBill({

            ...bill,
            [e.target.name]: e.target.value

        });

    };

    const totalAmount =
        (Number(bill.consultationFee) || 0) +
        (Number(bill.labCharges) || 0) +
        (Number(bill.medicineCharges) || 0) +
        (Number(bill.roomCharges) || 0);

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("Bill Generated Successfully!");

        console.log({

            ...bill,
            totalAmount

        });

        navigate("/billing");

    };

    return (

        <div className="create-bill-container">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>Generate Bill</h3>

                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

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
                                    required
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Doctor Name
                                </label>

                                <select
                                    className="form-select"
                                    name="doctorName"
                                    value={bill.doctorName}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Doctor
                                    </option>

                                    <option>Dr. Amit Patel</option>
                                    <option>Dr. Sneha Joshi</option>
                                    <option>Dr. Anil Kumar</option>
                                    <option>Dr. Pooja Mehta</option>

                                </select>

                            </div>

                            <div className="col-md-3 mb-3">

                                <label className="form-label">
                                    Consultation Fee
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="consultationFee"
                                    value={bill.consultationFee}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-3 mb-3">

                                <label className="form-label">
                                    Lab Charges
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="labCharges"
                                    value={bill.labCharges}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-3 mb-3">

                                <label className="form-label">
                                    Medicine Charges
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="medicineCharges"
                                    value={bill.medicineCharges}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-3 mb-3">

                                <label className="form-label">
                                    Room Charges
                                </label>

                                <input
                                    type="number"
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

                                    <option>Cash</option>
                                    <option>Card</option>
                                    <option>UPI</option>
                                    <option>Net Banking</option>

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

                                    <option>Paid</option>
                                    <option>Pending</option>

                                </select>

                            </div>

                            <div className="col-md-12 mb-4">

                                <div className="alert alert-success">

                                    <h4>
                                        Total Amount : ₹ {totalAmount}
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
                                className="btn btn-primary"
                            >
                                Generate Bill
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default CreateBill;