import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LabList.css";
import { getLabs, deleteLab } from "../../../services/labService";

function LabList() {
  const navigate = useNavigate();

  const [labs, setLabs] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadLabs();
  }, []);

  const loadLabs = async () => {
    try {
      const res = await getLabs();

      setLabs(res.data);
    } catch (error) {
      console.error("Error loading laboratories:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this laboratory?")) {
      return;
    }

    try {
      await deleteLab(id);

      alert("Laboratory deleted successfully.");

      loadLabs();
    } catch (error) {
      console.error(error);

      alert("Unable to delete laboratory.");
    }
  };

  const filteredLabs = labs.filter((lab) => {
    const keyword = search.toLowerCase();

    return (
      lab.labId?.toLowerCase().includes(keyword) ||
      lab.labName?.toLowerCase().includes(keyword) ||
      lab.location?.toLowerCase().includes(keyword) ||
      lab.phone?.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="lab-container">
      <div className="lab-header">
        <h2>Laboratory List</h2>

        <button onClick={() => navigate("/laboratory/labs/add")}>
          + Add Laboratory
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Laboratory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Lab ID</th>
            <th>Laboratory Name</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredLabs.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Laboratories Found
              </td>
            </tr>
          ) : (
            filteredLabs.map((lab) => (
              <tr key={lab.labId}>
                <td>{lab.labId}</td>

                <td>{lab.labName}</td>

                <td>{lab.location}</td>

                <td>{lab.phone}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/laboratory/labs/details/${lab.labId}`)
                    }
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/laboratory/labs/edit/${lab.labId}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(lab.labId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LabList;
