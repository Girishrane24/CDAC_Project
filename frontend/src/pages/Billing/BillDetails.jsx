import { Link, useParams } from "react-router-dom";
import "./BillDetails.css";

function BillDetails() {

    const { id } = useParams();

    // Dummy Data (Replace with Backend API)

    const bill = {

        billId: id || "BILL001",

        patientName: "Rahul Sharma",
        patientId: "PAT001",
        age: 35,
        gender: "Male",

        doctorName: "Dr. Amit Patel",
        department: "Cardiology",

        consultationFee: 1000,
        labCharges: 800,
        medicineCharges: 1200,
        roomCharges: 500,

        paymentMode: "Cash",
        paymentStatus: "Paid",

        billDate: "21-Jul-2026"

    };

    const total =
        bill.consultationFee +
        bill.labCharges +
        bill.medicineCharges +
        bill.roomCharges;

    return (

        <div className="bill-details-container">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>Invoice Details</h3>

                </div>

                <div className="card-body">

                    {/* Patient Information */}

                    <div className="row">

                        <div className="col-md-6">

                            <h5 className="section-title">
                                Patient Information
                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>Patient ID</th>
                                        <td>{bill.patientId}</td>
                                    </tr>

                                    <tr>
                                        <th>Patient Name</th>
                                        <td>{bill.patientName}</td>
                                    </tr>

                                    <tr>
                                        <th>Age</th>
                                        <td>{bill.age}</td>
                                    </tr>

                                    <tr>
                                        <th>Gender</th>
                                        <td>{bill.gender}</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="col-md-6">

                            <h5 className="section-title">

                                Doctor Information

                            </h5>

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>Doctor</th>
                                        <td>{bill.doctorName}</td>
                                    </tr>

                                    <tr>
                                        <th>Department</th>
                                        <td>{bill.department}</td>
                                    </tr>

                                    <tr>
                                        <th>Bill Date</th>
                                        <td>{bill.billDate}</td>
                                    </tr>

                                    <tr>
                                        <th>Payment Status</th>

                                        <td>

                                            <span className="badge bg-success">

                                                {bill.paymentStatus}

                                            </span>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Charges */}

                    <div className="mt-4">

                        <h5 className="section-title">

                            Bill Summary

                        </h5>

                        <table className="table table-striped table-bordered">

                            <thead className="table-primary">

                                <tr>

                                    <th>Service</th>
                                    <th>Amount (₹)</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Consultation Fee</td>
                                    <td>₹ {bill.consultationFee}</td>

                                </tr>

                                <tr>

                                    <td>Lab Charges</td>
                                    <td>₹ {bill.labCharges}</td>

                                </tr>

                                <tr>

                                    <td>Medicine Charges</td>
                                    <td>₹ {bill.medicineCharges}</td>

                                </tr>

                                <tr>

                                    <td>Room Charges</td>
                                    <td>₹ {bill.roomCharges}</td>

                                </tr>

                                <tr className="table-success">

                                    <th>Total Amount</th>
                                    <th>₹ {total}</th>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    {/* Payment */}

                    <div className="payment-box">

                        <h5>

                            Payment Mode :
                            <span> {bill.paymentMode}</span>

                        </h5>

                    </div>

                    {/* Buttons */}

                    <div className="text-end mt-4">

                        <button
                            className="btn btn-success me-2"
                            onClick={() => window.print()}
                        >
                            Print Invoice
                        </button>

                        <button
                            className="btn btn-info me-2"
                        >
                            Download PDF
                        </button>

                        <Link
                            to={`/billing/edit/${bill.billId}`}
                            className="btn btn-warning me-2"
                        >
                            Edit
                        </Link>

                        <Link
                            to="/billing"
                            className="btn btn-secondary"
                        >
                            Back
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default BillDetails;