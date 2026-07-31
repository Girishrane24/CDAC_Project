import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBill.css";
import api from "../../api/axios";

function CreateBill() {

  const navigate = useNavigate();

  const [bill, setBill] = useState({
    patientName: "",
    doctorName: "",
    consultationFee: 0,
    labCharges: 0,
    roomCharges: 0,
    totalAmount: 0,
    paymentMode: "Cash",
    status: "Paid",
    generatedDate: "",
  });


  const [errors, setErrors] = useState({});

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [labTests, setLabTests] = useState([]);
  const [roomAllocations, setRoomAllocations] = useState([]);
  const [rooms, setRooms] = useState([]);



  useEffect(() => {

    loadPatients();
    loadDoctors();
    loadAppointments();
    loadLabTests();
    loadRoomAllocations();
    loadRooms();

  }, []);



  const loadPatients = async () => {

    try {

      const response = await api.get("/patients");
      setPatients(response.data);

    } catch(error){

      console.error(error);

    }

  };



  const loadDoctors = async () => {

    try {

      const response = await api.get("/doctors");
      setDoctors(response.data);

    }catch(error){

      console.error(error);

    }

  };



  // NEW - Load appointments

  const loadAppointments = async () => {

    try{

      const response = await api.get("/appointments");
      setAppointments(response.data);

    }catch(error){

      console.error("Appointment loading error",error);

    }

  };




  const loadLabTests = async () => {

    try{

      const response = await api.get("/labtests");
      setLabTests(response.data);

    }catch(error){

      console.error(error);

    }

  };



  const loadRoomAllocations = async () => {

    try{

      const response = await api.get("/room-allocations");
      setRoomAllocations(response.data);

    }catch(error){

      console.error(error);

    }

  };



  const loadRooms = async () => {

    try{

      const response = await api.get("/rooms");
      setRooms(response.data);

    }catch(error){

      console.error(error);

    }

  };





  const handleChange = (e)=>{

    const {name,value}=e.target;


    let updatedBill={
      ...bill,
      [name]:value
    };




    // Doctor selection removed
    // Doctor will come automatically from appointment



    if(name==="patientName"){


      // FIND APPOINTMENT

      const appointment = appointments.find(
        app => app.patientName === value
      );



      if(appointment){


        // AUTO SELECT DOCTOR

        updatedBill.doctorName =
        appointment.doctorName;



        // AUTO CONSULTATION FEE

        const doctor = doctors.find(
          doc => doc.name === appointment.doctorName
        );


        if(doctor){

          updatedBill.consultationFee =
          doctor.consultationFee || 0;

        }


      }





      // LAB CHARGES


      const patientLabTests = labTests.filter(
        test=>test.patientName===value
      );


      updatedBill.labCharges =
      patientLabTests.reduce(
        (sum,test)=>
        sum+(test.price || 0),
        0
      );





      // ROOM CHARGES


      updatedBill.roomCharges=0;


      const allocation =
      roomAllocations.find(
        room=>room.patientName===value
      );



      if(allocation){


        const room =
        rooms.find(
          r=>r.id===allocation.roomId
        );



        if(room){


          const admission =
          new Date(allocation.admissionDate);


          const discharge =
          new Date(allocation.dischargeDate);



          let days =
          Math.ceil(
            (discharge-admission) /
            (1000*60*60*24)
          );


          if(days<=0)
            days=1;



          updatedBill.roomCharges =
          room.dailyCharge * days;


        }


      }



    }





    setBill(updatedBill);



    setErrors({
      ...errors,
      [name]:""
    });


  };





  const totalAmount =
    Number(bill.consultationFee || 0)+
    Number(bill.labCharges || 0)+
    Number(bill.roomCharges || 0);


  const validate=()=>{

    let newErrors={};


    if(!bill.patientName){

      newErrors.patientName=
      "Patient name is required";

    }



    if(!bill.doctorName){

      newErrors.doctorName=
      "Doctor not found for this patient";

    }


    if(totalAmount<=0){

      newErrors.totalAmount=
      "Total amount should be greater than zero";

    }



    return newErrors;

  };





  const handleSubmit=async(e)=>{

    e.preventDefault();



    const validationErrors=validate();


    if(Object.keys(validationErrors).length>0){

      setErrors(validationErrors);
      return;

    }




    const generatedBill={

      ...bill,

      consultationFee:
      Number(bill.consultationFee),


      labCharges:
      Number(bill.labCharges),


      roomCharges:
      Number(bill.roomCharges),


      totalAmount,


      paymentMode:
      bill.paymentMode || "Cash",


      status:
      bill.status || "Pending",



      generatedDate:
      new Date().toLocaleDateString("en-IN")

    };





    try{


      await api.post(
        "/billing",
        generatedBill
      );


      alert("Bill Generated Successfully");


      navigate("/billing");


    }catch(error){

      console.error(error);

      alert("Failed to generate bill");

    }


  };


  return (

<div className="create-bill-container">

<div className="card billing-card">


<div className="card-header">

<h3>Generate Patient Bill</h3>

<p>Create and calculate hospital bill instantly</p>

</div>



<div className="card-body">


<form onSubmit={handleSubmit}>


<h5 className="section-title">
Patient Information
</h5>



<div className="row">



<div className="col-lg-6 mb-3">


<label className="form-label">
Patient Name
</label>


<select

className="form-select"

name="patientName"

value={bill.patientName}

onChange={handleChange}

>


<option value="">
Select Patient
</option>



{
patients.map(patient=>(

<option

key={patient.id}

value={`${patient.firstName} ${patient.lastName}`}

>

{patient.firstName} {patient.lastName}

</option>

))
}


</select>


</div>





<div className="col-lg-6 mb-3">


<label className="form-label">
Doctor Name
</label>


<select

className="form-select"

name="doctorName"

value={bill.doctorName}

disabled

>


<option>
Select Doctor
</option>


<option value={bill.doctorName}>
{bill.doctorName}
</option>


</select>


</div>


</div>





<h5 className="section-title">
Charges
</h5>


<div className="row">


<div className="col-md-4 mb-3">

<label>
Consultation Fee
</label>

<input

className="form-control"

value={bill.consultationFee}

readOnly

/>

</div>



<div className="col-md-4 mb-3">

<label>
Lab Charges
</label>

<input

className="form-control"

value={bill.labCharges}

readOnly

/>

</div>



<div className="col-md-4 mb-3">

<label>
Room Charges
</label>

<input

className="form-control"

value={bill.roomCharges}

readOnly

/>

</div>


</div>





<h5 className="section-title">
Payment Details
</h5>



<div className="row">


<div className="col-md-6 mb-3">

<label>
Payment Mode
</label>


<select

className="form-select"

name="paymentMode"

value={bill.paymentMode}

onChange={handleChange}

>

<option>Cash</option>
<option>Card</option>
<option>UPI</option>
<option>Net Banking</option>


</select>


</div>




<div className="col-md-6 mb-3">

<label>
Status
</label>


<select

className="form-select"

name="status"

value={bill.status}

onChange={handleChange}

>


<option>Paid</option>
<option>Pending</option>


</select>


</div>


</div>




<div className="total-card">

  <span>Total Amount</span>

  <h2>
    ₹ {totalAmount.toLocaleString("en-IN")}
  </h2>

  {errors.totalAmount && (
    <div className="text-warning mt-2 fw-semibold">
      {errors.totalAmount}
    </div>
  )}

</div>


<div className="button-group mt-4">

  <button
    type="button"
    className="btn btn-secondary"
    onClick={() => navigate("/billing")}
  >
    Cancel
  </button>


  <button
    type="submit"
    className="btn btn-primary"
  >
    Generate Bill
  </button>

</div>


</form>


</div>


</div>


</div>

  );

}


export default CreateBill;