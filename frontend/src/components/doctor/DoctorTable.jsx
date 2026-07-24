import "./DoctorTable.css";

function DoctorTable({ doctors }) {
  return (
    <div className="doctor-table-container">
      <table className="doctor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>

              <td>{doctor.name}</td>

              <td>{doctor.specialization}</td>

              <td>{doctor.experience} Years</td>

              <td>{doctor.phone}</td>

              <td>{doctor.email}</td>

              <td>
                <span
                  className={
                    doctor.status === "Available"
                      ? "badge available"
                      : "badge unavailable"
                  }
                >
                  {doctor.status}
                </span>
              </td>

              <td>
                <button className="view-btn">View</button>

                <button className="edit-btn">Edit</button>

                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorTable;