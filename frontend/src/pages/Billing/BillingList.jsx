import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios"; // Change the path if your axios file is in a different folder
import "./BillingList.css";

function BillingList() {

    const [search, setSearch] = useState("");
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBills();
    }, []);

    const loadBills = async () => {
        try {
            const response = await api.get("/billing");
            setBills(response.data);
        } catch (error) {
            console.error("Error loading bills:", error);
            alert("Failed to load bills.");
        } finally {
            setLoading(false);
        }
    };

    const filteredBills = useMemo(() => {
        return bills.filter((bill) =>
            (bill.id || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            (bill.patientName || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            (bill.doctorName || "")
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search, bills]);

    const deleteBill = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this bill?"
        );

        if (!confirmDelete) return;

        try {
            await api.delete(`/billing/${id}`);

            alert("Bill deleted successfully.");

            loadBills();

        } catch (error) {
            console.error("Error deleting bill:", error);
            alert("Failed to delete bill.");
        }
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
                                type="text"
                                className="form-control"
                                placeholder="Search Bill, Patient or Doctor"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {loading ? (

                        <div className="text-center py-4">
                            <div className="spinner-border text-primary"></div>
                        </div>

                    ) : filteredBills.length === 0 ? (

                        <div className="alert alert-warning text-center">
                            No Bills Found
                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead className="table-primary">

                                    <tr>

                                        {/* <th>Bill ID</th> */}

                                        <th>Patient</th>

                                        <th>Doctor</th>

                                        <th>Total Amount</th>

                                        <th>Payment Mode</th>

                                        <th>Status</th>

                                        <th>Generated Date</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredBills.map((bill) => (

                                        <tr key={bill.id}>

                                            {/* <td>{bill.id}</td> */}

                                            <td>{bill.patientName}</td>

                                            <td>{bill.doctorName}</td>

                                            <td>
                                                ₹{" "}
                                                {Number(
                                                    bill.totalAmount || 0
                                                ).toLocaleString("en-IN")}
                                            </td>

                                            {/* <td>{bill.paymentMode}</td> */}

                                            <td>
                                                {bill.paymentMode ? bill.paymentMode : "N/A"}
                                            </td>

                                            <td>
                                                {bill.status ? (
                                                    <span className={`status ${bill.status.toLowerCase()}`}>
                                                        {bill.status}
                                                    </span>
                                                ) : (
                                                    "N/A"
                                                )}
                                            </td>

                                            <td>{bill.generatedDate}</td>

                                            <td>

                                                <div className="action-buttons d-flex gap-2">

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