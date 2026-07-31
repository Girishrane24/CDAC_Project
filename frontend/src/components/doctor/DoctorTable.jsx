// import { Link } from "react-router-dom";
import "./DoctorTable.css";
import { useNavigate } from "react-router-dom";
import { deleteDoctor } from "../../services/doctorService";

function DoctorTable({ doctors }) {

  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/doctors/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/doctors/edit/${id}`);
  };

const handleDelete = async (id) => {

    if (!window.confirm("Delete doctor?"))
        return;

    await deleteDoctor(id);

    window.location.reload();

};

  return (
    <div className="doctor-table-container">
      <table className="doctor-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
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
              {/* <td>{doctor.id}</td> */}

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
             

                  <button
                  className="view-btn"
                  onClick={() => handleView(doctor.id)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(doctor.id)}
                >
                  Edit
                </button>

         <button
className="delete-btn"
onClick={() => handleDelete(doctor.id)}
>
Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorTable;
