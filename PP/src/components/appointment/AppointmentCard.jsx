import "./AppointmentCard.css";

function AppointmentCard({ title, count, color, icon }) {
  return (
    <div className={`card appointment-card border-${color} shadow-sm`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-muted">{title}</h6>
          <h3 className="fw-bold">{count}</h3>
        </div>

        <div className={`icon-box bg-${color}`}>
          <i className={`bi ${icon}`}></i>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;