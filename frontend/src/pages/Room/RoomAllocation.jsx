import { useEffect, useState } from "react";
import "./RoomAllocation.css";

import patientService from "../../services/patientServices";
import roomService from "../../services/roomService";
import roomAllocationService from "../../services/roomAllocationService";

function RoomAllocation() {

    const [patients, setPatients] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [allocations, setAllocations] = useState([]);

    const [formData, setFormData] = useState({
        patientId: "",
        patientName: "",
        roomId: "",
        roomNumber: "",
        roomType: "",
        admissionDate: "",
        dischargeDate: "",
    });

    useEffect(() => {
        loadPatients();
        loadRooms();
        loadAllocations();
    }, []);



    const loadPatients = async () => {

        try {

           const response = await patientService.getAllPatients();

            setPatients(response.data);

        } catch (error) {

            console.error("Error loading patients:", error);

        }

    };


    const loadRooms = async () => {

        try {

            const response = await roomService.getAllRooms();

            setRooms(
                response.data.filter(
                    room => room.status === "Available"
                )
            );

        } catch (error) {

            console.error("Error loading rooms:", error);

        }

    };

    // ===========================
    // Load Room Allocations
    // ===========================

    const loadAllocations = async () => {

        try {

            const response =
                await roomAllocationService.getAllAllocations();

            setAllocations(response.data);

        } catch (error) {

            console.error(
                "Error loading allocations:",
                error
            );

        }

    };


    const handleChange = (e) => {

        const { name, value } = e.target;

        // Patient Selection
        if (name === "patientId") {

            const patient = patients.find(

                p => p.id === value

            );

            setFormData({

                ...formData,

                patientId: value,

                patientName:
                    patient?.name ||
                    `${patient?.firstName ?? ""} ${patient?.lastName ?? ""}`.trim()

            });

            return;

        }

        // Room Selection
        if (name === "roomNumber") {

            const room = rooms.find(

                r => r.roomNumber === value

            );

            setFormData({

                ...formData,

                roomId: room?.id || "",

                roomNumber: value,

                roomType: room?.roomType || ""

            });

            return;

        }

        setFormData({

            ...formData,

            [name]: value

        });

    };
      

    const allocateRoom = async (e) => {

        e.preventDefault();

        if (
            formData.patientId === "" ||
            formData.roomNumber === "" ||
            formData.admissionDate === ""
        ) {

            alert("Please fill all required fields.");
            return;
        }

        try {

            await roomAllocationService.allocateRoom(formData);

            alert("Room Allocated Successfully.");

            loadAllocations();
            loadRooms();

            setFormData({

                patientId: "",
                patientName: "",
                roomId: "",
                roomNumber: "",
                roomType: "",
                admissionDate: "",
                dischargeDate: ""

            });

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to allocate room."
            );

        }

    };


    const dischargePatient = async (id) => {

        if (!window.confirm("Discharge this patient?"))
            return;

        try {

            await roomAllocationService.dischargePatient(id);

            alert("Patient discharged successfully.");

            loadAllocations();
            loadRooms();

        } catch (error) {

            console.error(error);

            alert("Failed to discharge patient.");

        }

    };

    return (

        <div className="allocation-container">

            <h2>Room Allocation</h2>

            <form
                className="allocation-form"
                onSubmit={allocateRoom}
            >

                <select
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                >

                    <option value="">
                        Select Patient
                    </option>

                    {

                        patients.map(patient => (

                            <option
                                key={patient.id}
                                value={patient.id}
                            >

                                {
                                    patient.name
                                        ? patient.name
                                        : `${patient.firstName} ${patient.lastName}`
                                }

                            </option>

                        ))

                    }

                </select>

                <select
                    name="roomNumber"
                    value={formData.roomNumber}
                    onChange={handleChange}
                >

                    <option value="">
                        Select Room
                    </option>

                    {

                        rooms
                            .filter(room => room.status === "Available")
                            .map(room => (

                                <option
                                    key={room.id}
                                    value={room.roomNumber}
                                >

                                    {room.roomNumber}
                                    {" - "}
                                    {room.roomType}

                                </option>

                            ))

                    }

                </select>

                <input
                    type="text"
                    placeholder="Room Type"
                    value={formData.roomType}
                    readOnly
                />

                <input
                    type="date"
                    name="admissionDate"
                    value={formData.admissionDate}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="dischargeDate"
                    value={formData.dischargeDate}
                    onChange={handleChange}
                />

                <button type="submit">

                    Allocate Room

                </button>

            </form>

            <table>

                <thead>

                    <tr>

                        <th>Patient</th>

                        <th>Room</th>

                        <th>Type</th>

                        <th>Admission</th>

                        <th>Discharge</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        allocations.length === 0 ?

                            (

                                <tr>

                                    <td colSpan="7">

                                        No Room Allocations

                                    </td>

                                </tr>

                            )

                            :

                            allocations.map(allocation => (

                                <tr key={allocation.id}>

                                    <td>

                                        {allocation.patientName}

                                    </td>

                                    <td>

                                        {allocation.roomNumber}

                                    </td>

                                    <td>

                                        {allocation.roomType}

                                    </td>

                                    <td>

                                        {allocation.admissionDate}

                                    </td>

                                    <td>

                                        {allocation.dischargeDate}

                                    </td>

                                    <td>

                                        {allocation.status}

                                    </td>

                                    <td>

                                        <button
                                            className="discharge-btn"
                                            onClick={() =>
                                                dischargePatient(
                                                    allocation.id
                                                )
                                            }
                                        >

                                            Discharge

                                        </button>

                                    </td>

                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RoomAllocation;