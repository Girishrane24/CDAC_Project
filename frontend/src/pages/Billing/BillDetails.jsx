import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios"; // Change path if needed
import html2pdf from "html2pdf.js";
import "./BillDetails.css";

function BillDetails() {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [bill, setBill] = useState(null);

    useEffect(() => {
        loadBill();
    }, [id]);


    const downloadBill = () => {
        const element = document.querySelector(".card");

        const options = {
            margin: 0.5,
            filename: `Invoice_${bill.id}.pdf`,
            image: {
                type: "jpeg",
                quality: 1,
            },
            html2canvas: {
                scale: 2,
                useCORS: true,
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: "portrait",
            },
        };

        html2pdf().set(options).from(element).save();
    };

    const loadBill = async () => {
        try {

            const response = await api.get(`/billing/${id}`);

            setBill(response.data);

        } catch (error) {

            console.error("Error loading bill:", error);

        } finally {

            setLoading(false);

        }
    };

    if (loading) {
        return (
            <div className="bill-details-container text-center py-5">
                <div className="spinner-border text-primary"></div>
                <h5 className="mt-3">Loading Invoice...</h5>
            </div>
        );
    }

    if (!bill) {
        return (
            <div className="bill-details-container">
                <div className="alert alert-danger">
                    Bill not found.
                </div>
            </div>
        );
    }

    return (
        <div className="bill-details-container">

            <div className="card shadow-lg">

                <div className="card-header bg-primary text-white">

                    <div className="invoice-header">

                        <div>
                            <h2>CarePoint Hospital</h2>
                            <p className="mb-0">
                                Hospital Management System
                            </p>
                        </div>

                        <div className="text-end">

                            <h4>Invoice</h4>

                            <p className="mb-1">
                                <strong>Bill ID :</strong> {bill.id}
                            </p>

                            <p className="mb-0">
                                <strong>Date :</strong> {bill.generatedDate}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6">

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>Patient Name</th>
                                        <td>{bill.patientName}</td>
                                    </tr>

                                    <tr>
                                        <th>Doctor Name</th>
                                        <td>{bill.doctorName}</td>
                                    </tr>

                                    <tr>
                                        <th>Payment Mode</th>
                                        <td>{bill.paymentMode}</td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>

                                        <td>

                                            <span
                                                className={`badge ${bill.status === "Paid"
                                                    ? "bg-success"
                                                    : "bg-warning text-dark"
                                                    }`}
                                            >
                                                {bill.status}
                                            </span>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div className="mt-4">

                        <h5>Bill Summary</h5>

                        <table className="table table-striped table-bordered">

                            <thead className="table-primary">

                                <tr>

                                    <th>Service</th>

                                    <th className="text-end">
                                        Amount (₹)
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>Consultation Fee</td>
                                    <td className="text-end">
                                        ₹ {Number(bill.consultationFee).toLocaleString("en-IN")}
                                    </td>
                                </tr>

                                <tr>
                                    <td>Lab Charges</td>
                                    <td className="text-end">
                                        ₹ {Number(bill.labCharges).toLocaleString("en-IN")}
                                    </td>
                                </tr>

                                <tr>
                                    <td>Room Charges</td>
                                    <td className="text-end">
                                        ₹ {Number(bill.roomCharges).toLocaleString("en-IN")}
                                    </td>
                                </tr>

                                <tr className="table-success">

                                    <th>Total Amount</th>

                                    <th className="text-end">
                                        ₹ {Number(bill.totalAmount).toLocaleString("en-IN")}
                                    </th>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="action-buttons mt-4">

                        <button
                            className="btn btn-success"
                            onClick={() => window.print()}
                        >
                            Print Invoice
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={downloadBill}
                        >
                            Download PDF
                        </button>

                        <Link
                            to={`/billing/edit/${bill.id}`}
                            className="btn btn-warning"
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