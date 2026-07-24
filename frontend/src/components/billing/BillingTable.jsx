// import { Link } from "react-router-dom";
// import "./BillingTable.css";

// function BillingTable({ bills }) {

//     const getStatusColor = (status) => {

//         switch (status) {

//             case "Paid":
//                 return "success";

//             case "Pending":
//                 return "warning";

//             case "Cancelled":
//                 return "danger";

//             default:
//                 return "secondary";

//         }

//     };

//     return (

//         <div className="table-responsive">

//             <table className="table table-bordered table-hover align-middle">

//                 <thead className="table-primary">

//                     <tr>

//                         <th>Bill ID</th>
//                         <th>Patient</th>
//                         <th>Doctor</th>
//                         <th>Total Amount</th>
//                         <th>Payment Mode</th>
//                         <th>Status</th>
//                         <th>Date</th>
//                         <th>Actions</th>

//                     </tr>

//                 </thead>

//                 <tbody>

//                     {

//                         bills.length > 0 ? (

//                             bills.map((bill) => (

//                                 <tr key={bill.id}>

//                                     <td>{bill.id}</td>

//                                     <td>{bill.patient}</td>

//                                     <td>{bill.doctor}</td>

//                                     <td>₹ {bill.amount}</td>

//                                     <td>{bill.paymentMode}</td>

//                                     <td>

//                                         <span
//                                             className={`badge bg-${getStatusColor(bill.status)}`}
//                                         >

//                                             {bill.status}

//                                         </span>

//                                     </td>

//                                     <td>{bill.date}</td>

//                                     <td>

//                                         <Link
//                                             to={`/billing/details/${bill.id}`}
//                                             className="btn btn-info btn-sm me-2"
//                                         >
//                                             View
//                                         </Link>

//                                         <Link
//                                             to={`/billing/edit/${bill.id}`}
//                                             className="btn btn-warning btn-sm me-2"
//                                         >
//                                             Edit
//                                         </Link>

//                                         <button
//                                             className="btn btn-danger btn-sm"
//                                             onClick={() => alert(`Delete ${bill.id}`)}
//                                         >
//                                             Delete
//                                         </button>

//                                     </td>

//                                 </tr>

//                             ))

//                         ) : (

//                             <tr>

//                                 <td colSpan="8" className="text-center">

//                                     No Billing Records Found

//                                 </td>

//                             </tr>

//                         )

//                     }

//                 </tbody>

//             </table>

//         </div>

//     );

// }

// export default BillingTable;


import { Link } from "react-router-dom";
import "./BillingTable.css";

function BillingTable({ bills = [] }) {

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

    const handleDelete = (billId) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete Bill ${billId}?`
        );

        if (confirmDelete) {
            alert(`Bill ${billId} deleted successfully.`);
            // TODO:
            // Call API here
            // or pass delete function through props
        }
    };

    return (

        <div className="billing-table-card">

            <div className="table-responsive">

                <table className="table table-hover align-middle">

                    <thead>

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

                                        <td className="fw-semibold">
                                            {bill.id}
                                        </td>

                                        <td>
                                            {bill.patient || "N/A"}
                                        </td>

                                        <td>
                                            {bill.doctor || "N/A"}
                                        </td>

                                        <td className="fw-bold text-success">
                                            ₹ {Number(bill.amount || 0).toLocaleString("en-IN")}
                                        </td>

                                        <td>
                                            {bill.paymentMode || "N/A"}
                                        </td>

                                        <td>

                                            <span
                                                className={`badge rounded-pill bg-${getStatusColor(
                                                    bill.status
                                                )}`}
                                            >
                                                {bill.status}
                                            </span>

                                        </td>

                                        <td>
                                            {bill.date || "N/A"}
                                        </td>

                                        <td>

                                            <div className="action-buttons">

                                                <Link
                                                    to={`/billing/details/${bill.id}`}
                                                    className="btn btn-info btn-sm"
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
                                                    onClick={() => handleDelete(bill.id)}
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="text-center py-5"
                                    >

                                        <h5 className="text-muted mb-2">
                                            No Billing Records Found
                                        </h5>

                                        <p className="text-secondary">
                                            Generate your first bill to display records.
                                        </p>

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default BillingTable;