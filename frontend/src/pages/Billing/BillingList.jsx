import React, { useEffect, useState } from 'react';
import { billingService } from '../../services/billingService';
import './BillingList.css';

const BillingList = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBills();
  }, []);

  const loadBills = async () => {
    try {
      const response = await billingService.getAll();
      setBills(response.data);
    } catch (error) {
      console.error('Error fetching bills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      try {
        await billingService.delete(id);
        setBills(bills.filter((bill) => bill.id !== id));
      } catch (error) {
        console.error('Error deleting invoice:', error);
      }
    }
  };

  if (loading) return <div className="loading">Loading billing records...</div>;

  return (
    <div className="billing-list-container">
      <h2>Billing & Invoices</h2>
      <table className="billing-table">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Patient ID</th>
            <th>Amount ($)</th>
            <th>Payment Status</th>
            <th>Payment Method</th>
            <th>Bill Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.length > 0 ? (
            bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.id}</td>
                <td>{bill.patientId}</td>
                <td>${bill.amount?.toFixed(2)}</td>
                <td>
                  <span className={`status ${bill.paymentStatus?.toLowerCase()}`}>
                    {bill.paymentStatus}
                  </span>
                </td>
                <td>{bill.paymentMethod || 'N/A'}</td>
                <td>{bill.billDate}</td>
                <td>
                  <button onClick={() => handleDelete(bill.id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No billing records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BillingList;