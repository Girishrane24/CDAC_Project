import { useEffect, useState } from "react";
import "./RoomAllocation.css";

function RoomAllocation() {

    const [patients, setPatients] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [allocations, setAllocations] = useState([]);

    const [formData, setFormData] = useState({
        patientId: "",
        patientName: "",
        roomNumber: "",
        roomType: "",
        admissionDate: "",
        dischargeDate: "",
    });

    useEffect(() => {
        loadPatients();
        loadRooms();
    }, []);

    const loadPatients = () => {

        setPatients([
            {
                id: 1,
                name: "Rahul Sharma"
            },
            {
                id: 2,
                name: "Priya Patel"
            },
            {
                id: 3,
                name: "Amit Kumar"
            }
        ]);
    };

    const loadRooms = () => {

        setRooms([
            {
                id: 1,
                roomNumber: "101",
                roomType: "General",
                status: "Available"
            },
            {
                id: 2,
                roomNumber: "102",
                roomType: "Private",
                status: "Available"
            },
            {
                id: 3,
                roomNumber: "201",
                roomType: "ICU",
                status: "Occupied"
            }
        ]);
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "patientId") {

            const patient = patients.find(
                p => p.id === Number(value)
            );

            setFormData({
                ...formData,
                patientId: value,
                patientName: patient ? patient.name : ""
            });

            return;
        }

        if (name === "roomNumber") {

            const room = rooms.find(
                r => r.roomNumber === value
            );

            setFormData({
                ...formData,
                roomNumber: value,
                roomType: room ? room.roomType : ""
            });

            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const allocateRoom = (e) => {

        e.preventDefault();

        if (
            formData.patientId === "" ||
            formData.roomNumber === "" ||
            formData.admissionDate === ""
        ) {

            alert("Please fill all required fields.");
            return;
        }

        const allocation = {

            id: Date.now(),

            ...formData,

            status: "Allocated"

        };

        setAllocations([
            ...allocations,
            allocation
        ]);

        alert("Room Allocated Successfully.");

        setFormData({

            patientId: "",
            patientName: "",
            roomNumber: "",
            roomType: "",
            admissionDate: "",
            dischargeDate: ""

        });

    };

    const dischargePatient = (id) => {

        if (window.confirm("Discharge this patient?")) {

            setAllocations(
                allocations.filter(
                    allocation => allocation.id !== id
                )
            );

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

                                {patient.name}

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