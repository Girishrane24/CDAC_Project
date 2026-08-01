import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctorById } from "../../services/doctorService";
import "./DoctorDetails.css";

function DoctorDetails() {

    const { id } = useParams();

    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        loadDoctor();
    }, []);

    const loadDoctor = async () => {

        try {

            const response = await getDoctorById(id);

            setDoctor(response.data);


        } catch (error) {

            console.error(error);

            alert("Unable to load doctor details.");

        }

    };

    if (!doctor) {

        return <h2>Loading...</h2>;

    }


    return (
        <div className="doctor-details-page">

            <div className="doctor-profile-card">

                <img
                    src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
                    alt={doctor.name}
                />

                <div className="doctor-info">

                    <h2>{doctor.name}</h2>

                    <span className="status">
                        {doctor.status}
                    </span>

                    <div className="details-grid">

                        {/* <div>
                            <strong>Doctor ID</strong>
                            <p>{doctor.id}</p>
                        </div> */}

                        <div>
                            <strong>Specialization</strong>
                            <p>{doctor.specialization}</p>
                        </div>

                        <div>
                            <strong>Qualification</strong>
                            <p>{doctor.qualification}</p>
                        </div>

                        <div>
                            <strong>Experience</strong>
                            <p>{doctor.experience} Years</p>
                        </div>

                        <div>
                            <strong>Gender</strong>
                            <p>{doctor.gender}</p>
                        </div>

                        <div>
                            <strong>Phone</strong>
                            <p>{doctor.phone}</p>
                        </div>

                        <div>
                            <strong>Email</strong>
                            <p>{doctor.email}</p>
                        </div>

                        <div>
                            <strong>Consultation Fee</strong>
                            <p>₹ {doctor.consultationFee}</p>
                        </div>

                        <div className="full-width">
                            <strong>Address</strong>
                            <p>{doctor.address}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DoctorDetails;