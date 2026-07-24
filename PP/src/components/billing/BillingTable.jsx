import { Link } from "react-router-dom";
import "./BillingTable.css";

function BillingTable({ bills }) {

    const getStatusColor = (status) => {

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

        <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

                <thead className="table-primary">

                    <tr>

                        <th>Bill ID</th>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Total Amount</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        bills.length > 0 ? (

                            bills.map((bill) => (

                                <tr key={bill.id}>

                                    <td>{bill.id}</td>

                                    <td>{bill.patient}</td>

                                    <td>{bill.doctor}</td>

                                    <td>₹ {bill.amount}</td>

                                    <td>{bill.paymentMode}</td>

                                    <td>

                                        <span
                                            className={`badge bg-${getStatusColor(bill.status)}`}
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
                                            onClick={() => alert(`Delete ${bill.id}`)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="8" className="text-center">

                                    No Billing Records Found

                                </td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default BillingTable;