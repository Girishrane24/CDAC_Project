
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BillDetails.css";

function BillDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [bill, setBill] = useState(null);

  useEffect(() => {
    // Replace this with backend API later
    setTimeout(() => {
      setBill({
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

        billDate: "21-Jul-2026",
      });

      setLoading(false);
    }, 800);
  }, [id]);

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
          Invoice not found.
        </div>
      </div>
    );
  }

  const total =
    bill.consultationFee +
    bill.labCharges +
    bill.medicineCharges +
    bill.roomCharges;

  return (
    <div className="bill-details-container">

      <div className="card shadow-lg">

        <div className="card-header bg-primary text-white">

          <div className="invoice-header">

            <div>
              <h2>🏥 CarePoint Hospital</h2>
              <p className="mb-0">
                Hospital Management System
              </p>
            </div>

            <div className="text-end">
              <h4>Invoice</h4>

              <p className="mb-1">
                <strong>Invoice No:</strong> {bill.billId}
              </p>

              <p className="mb-0">
                <strong>Date:</strong> {bill.billDate}
              </p>
            </div>

          </div>

        </div>

        <div className="card-body">

          <div className="row g-4">

            <div className="col-lg-6">

              <div className="info-card">

                <h5 className="section-title">
                  Patient Information
                </h5>

                <div className="table-responsive">

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

              </div>

            </div>

            <div className="col-lg-6">

              <div className="info-card">

                <h5 className="section-title">
                  Doctor Information
                </h5>

                <div className="table-responsive">

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
                        <th>Status</th>

                        <td>

                          <span
                            className={`badge ${
                              bill.paymentStatus === "Paid"
                                ? "bg-success"
                                : bill.paymentStatus === "Pending"
                                ? "bg-warning text-dark"
                                : "bg-danger"
                            }`}
                          >
                            {bill.paymentStatus}
                          </span>

                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-5">

            <h5 className="section-title">
              Bill Summary
            </h5>

            <div className="table-responsive">

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
                      ₹ {bill.consultationFee.toLocaleString("en-IN")}
                    </td>
                  </tr>

                  <tr>
                    <td>Laboratory Charges</td>
                    <td className="text-end">
                      ₹ {bill.labCharges.toLocaleString("en-IN")}
                    </td>
                  </tr>

                  <tr>
                    <td>Medicine Charges</td>
                    <td className="text-end">
                      ₹ {bill.medicineCharges.toLocaleString("en-IN")}
                    </td>
                  </tr>

                  <tr>
                    <td>Room Charges</td>
                    <td className="text-end">
                      ₹ {bill.roomCharges.toLocaleString("en-IN")}
                    </td>
                  </tr>

                  <tr className="table-success">

                    <th>Total Amount</th>

                    <th className="text-end">
                      ₹ {total.toLocaleString("en-IN")}
                    </th>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          <div className="payment-box">

            <h5>

              Payment Mode :

              <span className="text-success">
                {" "}
                {bill.paymentMode}
              </span>

            </h5>

          </div>

          <div className="action-buttons mt-4">

            <button
              className="btn btn-success"
              onClick={() => window.print()}
            >
              🖨 Print Invoice
            </button>

            <button className="btn btn-info">
              ⬇ Download PDF
            </button>

            <Link
              to={`/billing/edit/${bill.billId}`}
              className="btn btn-warning"
            >
              ✏ Edit
            </Link>

            <Link
              to="/billing"
              className="btn btn-secondary"
            >
              ← Back
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BillDetails;