import "./BillingCard.css";

function BillingCard({ title, value, icon, color }) {

    return (

        <div className={`card billing-card border-start border-5 border-${color} shadow-sm`}>

            <div className="card-body d-flex justify-content-between align-items-center">

                <div>

                    <h6 className="text-muted mb-2">
                        {title}
                    </h6>

                    <h3 className="fw-bold">
                        {value}
                    </h3>

                </div>

                <div className={`billing-icon bg-${color}`}>

                    <i className={icon}></i>

                </div>

            </div>

        </div>

    );

}

export default BillingCard;