import { useEffect, useState } from "react";
import "./BedManagement.css";

function BedManagement() {
  const [beds, setBeds] = useState([]);
  const [search, setSearch] = useState("");

  const [newBed, setNewBed] = useState({
    bedNumber: "",
    roomNumber: "",
    status: "Available",
  });

  useEffect(() => {
    loadBeds();
  }, []);

  const loadBeds = () => {
    // Replace this with API call later
    const sampleBeds = [
      {
        id: 1,
        bedNumber: "B101",
        roomNumber: "101",
        status: "Available",
      },
      {
        id: 2,
        bedNumber: "B102",
        roomNumber: "101",
        status: "Occupied",
      },
      {
        id: 3,
        bedNumber: "B201",
        roomNumber: "201",
        status: "Maintenance",
      },
    ];

    setBeds(sampleBeds);
  };

  const handleChange = (e) => {
    setNewBed({
      ...newBed,
      [e.target.name]: e.target.value,
    });
  };

  const addBed = () => {
    if (
      newBed.bedNumber === "" ||
      newBed.roomNumber === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const bed = {
      id: Date.now(),
      ...newBed,
    };

    setBeds([...beds, bed]);

    setNewBed({
      bedNumber: "",
      roomNumber: "",
      status: "Available",
    });
  };

  const deleteBed = (id) => {
    if (window.confirm("Delete this bed?")) {
      setBeds(beds.filter((bed) => bed.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setBeds(
      beds.map((bed) => {
        if (bed.id === id) {
          let nextStatus = "Available";

          if (bed.status === "Available") {
            nextStatus = "Occupied";
          } else if (bed.status === "Occupied") {
            nextStatus = "Maintenance";
          }

          return {
            ...bed,
            status: nextStatus,
          };
        }

        return bed;
      })
    );
  };

  const filteredBeds = beds.filter(
    (bed) =>
      bed.bedNumber
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      bed.roomNumber
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="bed-management">

      <div className="header">

        <h2>Bed Management</h2>

        <input
          type="text"
          placeholder="Search Bed..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="bed-form">

        <input
          type="text"
          name="bedNumber"
          placeholder="Bed Number"
          value={newBed.bedNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={newBed.roomNumber}
          onChange={handleChange}
        />

        <select
          name="status"
          value={newBed.status}
          onChange={handleChange}
        >
          <option>Available</option>
          <option>Occupied</option>
          <option>Maintenance</option>
        </select>

        <button onClick={addBed}>
          Add Bed
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Bed No</th>
            <th>Room</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredBeds.length === 0 ? (
            <tr>
              <td colSpan="4">
                No Beds Found
              </td>
            </tr>
          ) : (
            filteredBeds.map((bed) => (
              <tr key={bed.id}>

                <td>{bed.bedNumber}</td>

                <td>{bed.roomNumber}</td>

                <td>
                  <span
                    className={`status ${bed.status.toLowerCase()}`}
                  >
                    {bed.status}
                  </span>
                </td>

                <td>

                  <button
                    className="statusBtn"
                    onClick={() =>
                      toggleStatus(bed.id)
                    }
                  >
                    Change Status
                  </button>

                  <button
                    className="deleteBtn"
                    onClick={() =>
                      deleteBed(bed.id)
                    }
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

export default BedManagement;