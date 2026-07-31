import "./DoctorForm.css";
import { useEffect, useState } from "react";

function DoctorForm({
    onSubmit,
    initialData,
    buttonText = "Save Doctor"
}) {
 const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    qualification: "",
    experience: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    consultationFee: "",
    status: "Available",
});

useEffect(() => {
    if (!initialData?.id) return;

    setDoctor({
        name: initialData.name || "",
        specialization: initialData.specialization || "",
        qualification: initialData.qualification || "",
        experience: initialData.experience || "",
        gender: initialData.gender || "",
        phone: initialData.phone || "",
        email: initialData.email || "",
        address: initialData.address || "",
        consultationFee: initialData.consultationFee || "",
        status: initialData.status || "Available",
    });
}, [initialData?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDoctor({
      ...doctor,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(doctor);
    } else {
      console.log("Doctor Data :", doctor);
      alert("Doctor Saved Successfully");
    }
  };

  return (
    <div className="doctor-form-container">
      <h2 className="form-title">Doctor Information</h2>

      <form className="doctor-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Doctor Name</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            placeholder="Enter Doctor Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Specialization</label>
          <select
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>ENT</option>
            <option>General Physician</option>
            <option>Gynecology</option>
          </select>
        </div>

        <div className="form-group">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            value={doctor.qualification}
            onChange={handleChange}
            placeholder="MBBS, MD"
          />
        </div>

        <div className="form-group">
          <label>Experience (Years)</label>
          <input
            type="number"
            name="experience"
            value={doctor.experience}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={doctor.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={doctor.phone}
            onChange={handleChange}
            placeholder="9876543210"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            placeholder="doctor@gmail.com"
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <textarea
            rows="3"
            name="address"
            value={doctor.address}
            onChange={handleChange}
            placeholder="Enter Address"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Consultation Fee (₹)</label>
          <input
            type="number"
            name="consultationFee"
            value={doctor.consultationFee}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={doctor.status}
            onChange={handleChange}
          >
            <option>Available</option>
            <option>Unavailable</option>
            <option>On Leave</option>
          </select>
        </div>

        <div className="full-width">
          <button type="submit" className="save-btn">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorForm;