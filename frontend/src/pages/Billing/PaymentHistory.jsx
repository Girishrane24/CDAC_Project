import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import "./PaymentHistory.css";


function PaymentHistory() {

    const navigate = useNavigate();

    const [payments, setPayments] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        loadPayments();

    }, []);



    const loadPayments = async () => {

        try {

            const response = await api.get("/billing");

            setPayments(response.data);

        }
        catch (error) {

            console.error(
                "Payment history error",
                error
            );

        }
        finally {

            setLoading(false);

        }

    };




    const filteredPayments = payments.filter((payment) =>

        (payment.patientName || "")
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        (payment.paymentMode || "")
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        (payment.status || "")
            .toLowerCase()
            .includes(search.toLowerCase())

    );





    const getStatusClass = (status) => {

        if (status === "Paid")
            return "paid";

        if (status === "Pending")
            return "pending";

        return "cancelled";

    };





    return (

        <div className="payment-container">


            <div className="payment-header">


                <h2>
                    Payment History
                </h2>


                <button

                    className="btn btn-primary"

                    onClick={() => navigate("/billing")}

                >

                    Back to Billing

                </button>


            </div>





            <div className="card shadow">

                <div className="card-body">


                    <input

                        type="text"

                        className="form-control search-box"

                        placeholder="Search Payment..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />



                    <hr />




                    {
                        loading ?

                            (
                                <div className="text-center">
                                    Loading...
                                </div>
                            )

                            :

                            filteredPayments.length === 0 ?

                                (
                                    <div className="alert alert-warning">
                                        No Payment Found
                                    </div>
                                )

                                :

                                (

                                    <div className="table-responsive">


                                        <table className="table table-hover">


                                            <thead>


                                                <tr>

                                                    <th>
                                                        Payment ID
                                                    </th>

                                                    <th>
                                                        Bill ID
                                                    </th>

                                                    <th>
                                                        Patient
                                                    </th>

                                                    <th>
                                                        Amount
                                                    </th>

                                                    <th>
                                                        Payment Mode
                                                    </th>

                                                    <th>
                                                        Status
                                                    </th>

                                                    <th>
                                                        Date
                                                    </th>

                                                    <th>
                                                        Action
                                                    </th>


                                                </tr>


                                            </thead>




                                            <tbody>


                                                {
                                                    filteredPayments.map((payment, index) => (


                                                        <tr key={payment.id}>


                                                            <td>
                                                                PAY{String(index + 1).padStart(3, "0")}
                                                            </td>



                                                            <td>
                                                                BILL{String(index + 1).padStart(3, "0")}
                                                            </td>



                                                            <td>
                                                                {payment.patientName}
                                                            </td>



                                                            <td>

                                                                ₹ {Number(
                                                                    payment.totalAmount || 0
                                                                ).toLocaleString("en-IN")}

                                                            </td>



                                                            <td>
                                                                {payment.paymentMode || "N/A"}
                                                            </td>




                                                            <td>

                                                                <span

                                                                    className={`status ${getStatusClass(payment.status)}`}

                                                                >

                                                                    {payment.status || "Pending"}

                                                                </span>


                                                            </td>




                                                            <td>

                                                                {payment.generatedDate}

                                                            </td>




                                                            <td>


                                                                <button

                                                                    className="btn btn-info btn-sm"

                                                                    onClick={() =>
                                                                        navigate(`/billing/details/${payment.id}`)
                                                                    }

                                                                >

                                                                    View Receipt

                                                                </button>


                                                            </td>



                                                        </tr>


                                                    ))
                                                }



                                            </tbody>



                                        </table>



                                    </div>

                                )

                    }


                </div>

            </div>



        </div>

    )

}


export default PaymentHistory;