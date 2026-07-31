import "./DashboardCard.css";

function DashboardCard({ title, value, subtitle, icon, color }) {
  return (
    <div className="dashboard-card">
      <div
        className="dashboard-card-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="dashboard-card-content">
        <h3>{value}</h3>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
