import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img
        src={
          doctor.image ||
          "https://cdn-icons-png.flaticon.com/512/387/387561.png"
        }
        alt={doctor.name}
      />

      <h3>{doctor.name}</h3>

      <p>
        <strong>Specialization:</strong> {doctor.specialization}
      </p>

      <p>
        <strong>Experience:</strong> {doctor.experience} Years
      </p>

      <p>
        <strong>Phone:</strong> {doctor.phone}
      </p>

      <p>
        <strong>Email:</strong> {doctor.email}
      </p>

      <span
        className={
          doctor.status === "Available"
            ? "status available"
            : "status unavailable"
        }
      >
        {doctor.status}
      </span>
    </div>
  );
}

export default DoctorCard;