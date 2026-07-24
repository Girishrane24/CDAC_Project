import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "./BookAppointment.css";

function BookAppointment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        patientId: "",
        doctorId: "",
        appointmentDate: "",
        appointmentTime: "",
        reason: "",
        fee: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createAppointment(formData);
            alert("Appointment created successfully!");
            navigate("/appointments"); // Navigate back to appointment list page
        } catch (error) {
            console.error("Failed to save appointment:", error);
        }
    };

    return (
        <div className="book-appointment">
            <h2>Book New Appointment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="patientId"
                    placeholder="Patient ID"
                    value={formData.patientId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="doctorId"
                    placeholder="Doctor ID"
                    value={formData.doctorId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="reason"
                    placeholder="Reason for visit"
                    value={formData.reason}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="fee"
                    placeholder="Fee Amount"
                    value={formData.fee}
                    onChange={handleChange}
                />
                <button type="submit" className="submit-btn">Submit Appointment</button>
            </form>
        </div>
    );
}

export default BookAppointment;