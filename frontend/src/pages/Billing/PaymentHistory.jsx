import { Link } from "react-router-dom";
import "./PaymentHistory.css";

function PaymentHistory() {

    const payments = [

        {
            paymentId: "PAY001",
            billId: "BILL001",
            patient: "Rahul Sharma",
            amount: 3500,
            paymentMode: "Cash",
            status: "Paid",
            date: "21-Jul-2026"
        },

        {
            paymentId: "PAY002",
            billId: "BILL002",
            patient: "Priya Singh",
            amount: 4200,
            paymentMode: "UPI",
            status: "Paid",
            date: "22-Jul-2026"
        },

        {
            paymentId: "PAY003",
            billId: "BILL003",
            patient: "Amit Verma",
            amount: 2800,
            paymentMode: "Card",
            status: "Pending",
            date: "23-Jul-2026"
        }

    ];

    const getStatusColor = (status) => {

        switch (status) {

            case "Paid":
                return "success";

            case "Pending":
                return "warning";

            case "Failed":
                return "danger";

            default:
                return "secondary";
        }

    };

    return (

        <div className="payment-history-container">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Payment History</h2>

                <Link
                    to="/billing"
                    className="btn btn-primary"
                >
                    Back to Billing
                </Link>

            </div>

            <div className="card shadow">

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-4">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Payment..."
                            />

                        </div>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover">

                            <thead className="table-primary">

                                <tr>

                                    <th>Payment ID</th>
                                    <th>Bill ID</th>
                                    <th>Patient</th>
                                    <th>Amount</th>
                                    <th>Payment Mode</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    payments.map((payment) => (

                                        <tr key={payment.paymentId}>

                                            <td>{payment.paymentId}</td>

                                            <td>{payment.billId}</td>

                                            <td>{payment.patient}</td>

                                            <td>₹ {payment.amount}</td>

                                            <td>{payment.paymentMode}</td>

                                            <td>

                                                <span
                                                    className={`badge bg-${getStatusColor(payment.status)}`}
                                                >

                                                    {payment.status}

                                                </span>

                                            </td>

                                            <td>{payment.date}</td>

                                            <td>

                                                <button className="btn btn-info btn-sm">

                                                    View Receipt

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PaymentHistory;