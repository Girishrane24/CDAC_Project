
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./BillingList.css";

function BillingList() {

    const [search, setSearch] = useState("");

    const [bills, setBills] = useState([
        {
            id: "BILL001",
            patient: "Rahul Sharma",
            doctor: "Dr. Amit Patel",
            amount: 3500,
            paymentMode: "Cash",
            status: "Paid",
            date: "21-Jul-2026",
        },
        {
            id: "BILL002",
            patient: "Priya Singh",
            doctor: "Dr. Sneha Joshi",
            amount: 4200,
            paymentMode: "UPI",
            status: "Pending",
            date: "22-Jul-2026",
        },
        {
            id: "BILL003",
            patient: "Amit Verma",
            doctor: "Dr. Anil Kumar",
            amount: 2800,
            paymentMode: "Card",
            status: "Paid",
            date: "23-Jul-2026",
        },
    ]);

    const filteredBills = useMemo(() => {
        return bills.filter((bill) =>
            bill.id.toLowerCase().includes(search.toLowerCase()) ||
            bill.patient.toLowerCase().includes(search.toLowerCase()) ||
            bill.doctor.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, bills]);

    const deleteBill = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this bill?"
        );

        if (!confirmDelete) return;

        setBills(bills.filter((bill) => bill.id !== id));
    };

    const getBadgeColor = (status) => {

        switch (status) {
            case "Paid":
                return "success";

            case "Pending":
                return "warning";

            case "Cancelled":
                return "danger";

            default:
                return "secondary";
        }
    };

    return (
        <div className="billing-container">

            <div className="billing-header">

                <h2>Billing Management</h2>

                <Link
                    to="/billing/create"
                    className="btn btn-primary"
                >
                    + Generate Bill
                </Link>

            </div>

            <div className="card shadow">

                <div className="card-body">

                    <div className="row mb-4">

                        <div className="col-lg-4 col-md-6">

                            <input
                                className="form-control"
                                placeholder="Search Bill, Patient or Doctor"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {filteredBills.length === 0 ? (

                        <div className="alert alert-warning text-center">

                            No Bills Found

                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead className="table-primary">

                                    <tr>

                                        <th>Bill ID</th>

                                        <th>Patient</th>

                                        <th>Doctor</th>

                                        <th>Amount</th>

                                        <th>Payment</th>

                                        <th>Status</th>

                                        <th>Date</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredBills.map((bill) => (

                                        <tr key={bill.id}>

                                            <td>{bill.id}</td>

                                            <td>{bill.patient}</td>

                                            <td>{bill.doctor}</td>

                                            <td>

                                                ₹{" "}
                                                {bill.amount.toLocaleString(
                                                    "en-IN"
                                                )}

                                            </td>

                                            <td>{bill.paymentMode}</td>

                                            <td>

                                                <span
                                                    className={`badge bg-${getBadgeColor(
                                                        bill.status
                                                    )}`}
                                                >
                                                    {bill.status}
                                                </span>

                                            </td>

                                            <td>{bill.date}</td>

                                            <td>

                                                <div className="action-buttons">

                                                    <Link
                                                        to={`/billing/details/${bill.id}`}
                                                        className="btn btn-info btn-sm text-text-center"
                                                    >
                                                        View
                                                    </Link>

                                                    <Link
                                                        to={`/billing/edit/${bill.id}`}
                                                        className="btn btn-warning btn-sm"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            deleteBill(
                                                                bill.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default BillingList;