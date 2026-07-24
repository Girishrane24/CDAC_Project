import { Link } from "react-router-dom";
import "./BillingList.css";

function BillingList() {

    const bills = [

        {
            id: "BILL001",
            patient: "Rahul Sharma",
            doctor: "Dr. Amit Patel",
            amount: 3500,
            paymentMode: "Cash",
            status: "Paid",
            date: "21-Jul-2026"
        },

        {
            id: "BILL002",
            patient: "Priya Singh",
            doctor: "Dr. Sneha Joshi",
            amount: 4200,
            paymentMode: "UPI",
            status: "Pending",
            date: "22-Jul-2026"
        },

        {
            id: "BILL003",
            patient: "Amit Verma",
            doctor: "Dr. Anil Kumar",
            amount: 2800,
            paymentMode: "Card",
            status: "Paid",
            date: "23-Jul-2026"
        }

    ];

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

            <div className="d-flex justify-content-between align-items-center mb-4">

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

                    <div className="row mb-3">

                        <div className="col-md-4">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Bill..."
                            />

                        </div>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-primary">

                                <tr>

                                    <th>Bill ID</th>
                                    <th>Patient</th>
                                    <th>Doctor</th>
                                    <th>Amount (₹)</th>
                                    <th>Payment Mode</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {bills.map((bill) => (

                                    <tr key={bill.id}>

                                        <td>{bill.id}</td>

                                        <td>{bill.patient}</td>

                                        <td>{bill.doctor}</td>

                                        <td>₹ {bill.amount}</td>

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

                                            <Link
                                                to={`/billing/details/${bill.id}`}
                                                className="btn btn-info btn-sm me-2"
                                            >
                                                View
                                            </Link>

                                            <Link
                                                to={`/billing/edit/${bill.id}`}
                                                className="btn btn-warning btn-sm me-2"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                className="btn btn-danger btn-sm"
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default BillingList;