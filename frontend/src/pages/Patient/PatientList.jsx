import { useEffect, useState } from "react";
import { api } from "../../services/api";

function PatientList() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = () => {
        api.getPatients()
            .then((data) => {
                setPatients(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            await api.deletePatient(id);
            loadPatients(); // Refresh list after deletion
        }
    };

    if (loading) return <div>Loading Patients...</div>;

    return (
        <div className="patient-list">
            <h2>Patients Directory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Blood Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.bloodGroup}</td>
                            <td>
                                <button onClick={() => handleDelete(patient.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PatientList;