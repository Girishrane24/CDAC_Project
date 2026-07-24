import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'

//Authentication
import Home from "./pages/Authentication/Home.jsx";
import ForgotPassword from "./pages/Authentication/ForgotPassword.jsx";
import ResetPassword from "./pages/Authentication/ResetPassword.jsx";
import Logout from "./pages/Authentication/Logout.jsx";

//Dashboard
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

//Patient
import PatientRegistration from "./pages/Patient/PatientRegistration.jsx";
import PatientList from "./pages/Patient/PatientList.jsx";
import AddPatient from "./pages/Patient/AddPatient.jsx";
import EditPatient from "./pages/Patient/EditPatient.jsx";
import PatientDetails from "./pages/Patient/PatientDetails.jsx";
import MedicalHistory from "./pages/Patient/MedicalHistory.jsx";

//Doctor
import DoctorList from "./pages/Doctor/DoctorList.jsx";
import AddDoctor from "./pages/Doctor/AddDoctor.jsx";
import EditDoctor from "./pages/Doctor/EditDoctor.jsx";
// import DoctorDetails from "./pages/Doctor/DoctorDetails.jsx";
import DoctorDetails from "./pages/Doctor/DoctorDetails.jsx";
import DoctorSchedule from "./pages/Doctor/DoctorSchedule.jsx";

// Appointment
import AppointmentList from "./pages/Appointment/AppointmentList.jsx";
import BookAppointment from "./pages/Appointment/BookAppointment.jsx";
import EditAppointment from "./pages/Appointment/EditAppointment.jsx";
import AppointmentDetails from "./pages/Appointment/AppointmentDetails.jsx";

// Billing
import BillingList from "./pages/Billing/BillingList.jsx";
import CreateBill from "./pages/Billing/CreateBill.jsx";
import EditBill from "./pages/Billing/EditBill.jsx";
import BillDetails from "./pages/Billing/BillDetails.jsx";
import PaymentHistory from "./pages/Billing/PaymentHistory.jsx";

//Room
import RoomAllocation from "./pages/Room/RoomAllocation.jsx";
import RoomList from "./pages/Room/RoomList.jsx";
import AddRoom from "./pages/Room/AddRoom.jsx";
import EditRoom from "./pages/Room/EditRoom.jsx";
import RoomDetails from "./pages/Room/RoomDetails.jsx";
import RoomStatus from "./pages/Room/RoomStatus.jsx";
import BedManagement from "./pages/Room/BedManagement.jsx";

import LabList from "./pages/Laboratory/Lab/LabList";
import AddLab from "./pages/Laboratory/Lab/AddLab";
import EditLab from "./pages/Laboratory/Lab/EditLab";
import LabDetails from "./pages/Laboratory/Lab/LabDetails";

import LabTestList from "./pages/Laboratory/LabTest/LabTestList";
import AddLabTest from "./pages/Laboratory/LabTest/AddLabTest";
import EditLabTest from "./pages/Laboratory/LabTest/EditLabTest";
import LabTestDetails from "./pages/Laboratory/LabTest/LabTestDetails";
import TestReport from "./pages/Laboratory/LabTest/TestReport";

// Nurse Module Imports
import NurseList from "./pages/Nurse/NurseList";
import AddNurse from "./pages/Nurse/AddNurse";
import EditNurse from "./pages/Nurse/EditNurse";
import NurseDetails from "./pages/Nurse/NurseDetails";
import AssignNurse from "./pages/Nurse/AssignNurse";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />

          <Route
            path="/patients"
            element={
              <DashboardLayout>
                <PatientList />
              </DashboardLayout>
            }
          />

          <Route
            path="/patients/add"
            element={
              <DashboardLayout>
                <AddPatient />
              </DashboardLayout>
            }
          />

          <Route
            path="/patients/edit"
            element={
              <DashboardLayout>
                <EditPatient />
              </DashboardLayout>
            }
          />

          <Route
            path="/patients/details"
            element={
              <DashboardLayout>
                <PatientDetails />
              </DashboardLayout>
            }
          />

          <Route
            path="/patients/history"
            element={
              <DashboardLayout>
                <MedicalHistory />
              </DashboardLayout>
            }
          />

          <Route
            path="/doctors"
            element={
              <DashboardLayout>
                <DoctorList />
              </DashboardLayout>
            }
          />
          <Route
            path="/doctors/add"
            element={
              <DashboardLayout>
                <AddDoctor />
              </DashboardLayout>
            }
          />
          <Route
            path="/doctors/edit/:id"
            element={
              <DashboardLayout>
                <EditDoctor />
              </DashboardLayout>
            }
          />
          <Route
            path="/doctors/:id"
            element={
              <DashboardLayout>
                <DoctorDetails />
              </DashboardLayout>
            }
          />
          <Route
            path="/doctors/schedule"
            element={
              <DashboardLayout>
                <DoctorSchedule />
              </DashboardLayout>
            }
          />

          <Route
            path="/appointments"
            element={
              <DashboardLayout>
                <AppointmentList />
              </DashboardLayout>
            }
          />

          <Route
            path="/appointments/book"
            element={
              <DashboardLayout>
                <BookAppointment />
              </DashboardLayout>
            }
          />

          <Route
            path="/appointments/edit/:id"
            element={
              <DashboardLayout>
                <EditAppointment />
              </DashboardLayout>
            }
          />

          <Route
            path="/appointments/details/:id"
            element={
              <DashboardLayout>
                <AppointmentDetails />
              </DashboardLayout>
            }
          />

          {/* Billing Module */}

          <Route
            path="/billing"
            element={
              <DashboardLayout>
                <BillingList />
              </DashboardLayout>
            }
          />

          <Route
            path="/billing/create"
            element={
              <DashboardLayout>
                <CreateBill />
              </DashboardLayout>
            }
          />

          <Route
            path="/billing/edit/:id"
            element={
              <DashboardLayout>
                <EditBill />
              </DashboardLayout>
            }
          />

          <Route
            path="/billing/details/:id"
            element={
              <DashboardLayout>
                <BillDetails />
              </DashboardLayout>
            }
          />

          <Route
            path="/billing/payment-history"
            element={
              <DashboardLayout>
                <PaymentHistory />
              </DashboardLayout>
            }
          />

          {/* Room Module */}

          <Route
            path="/rooms"
            element={
              <DashboardLayout>
                <RoomList />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms/add"
            element={
              <DashboardLayout>
                <AddRoom />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms/edit/:id"
            element={
              <DashboardLayout>
                <EditRoom />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms/details/:id"
            element={
              <DashboardLayout>
                <RoomDetails />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms/allocation"
            element={
              <DashboardLayout>
                <RoomAllocation />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms/beds"
            element={
              <DashboardLayout>
                <BedManagement />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms/status"
            element={
              <DashboardLayout>
                <RoomStatus />
              </DashboardLayout>
            }
          />

          {/* Laboratory Module */}

          <Route
            path="laboratory/labs"
            element={
              <DashboardLayout>
                <LabList />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/labs/add"
            element={
              <DashboardLayout>
                <AddLab />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/labs/edit/:id"
            element={
              <DashboardLayout>
                <EditLab />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/labs/details/:id"
            element={
              <DashboardLayout>
                <LabDetails />
              </DashboardLayout>
            }
          />

          {/* Lab Test Module */}

          <Route
            path="laboratory/tests"
            element={
              <DashboardLayout>
                <LabTestList />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/tests/add"
            element={
              <DashboardLayout>
                <AddLabTest />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/tests/edit/:id"
            element={
              <DashboardLayout>
                <EditLabTest />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/tests/details/:id"
            element={
              <DashboardLayout>
                <LabTestDetails />
              </DashboardLayout>
            }
          />

          <Route
            path="laboratory/tests/report/:id"
            element={
              <DashboardLayout>
                <TestReport />
              </DashboardLayout>
            }
          />


{/* Nurse Module Routes */}


          <Route
            path="nurses"
            element={
              
              <DashboardLayout>
               
                <NurseList />
              </DashboardLayout>
          }
          />



          <Route
            path="nurses/add"
            element={
              <DashboardLayout>
    <AddNurse />
              
              </DashboardLayout>
            }
          />



          <Route
            path="nurses/edit/:id"
            element={
                <DashboardLayout>
               
                  <EditNurse />
              </DashboardLayout>
          }
          />



          <Route
            path="nurses/:id"
            element={
                <DashboardLayout>
         
                  <NurseDetails />
              </DashboardLayout>
          }
          />



          <Route
            path="nurses/assign"
            element={
              <DashboardLayout>
            
                <AssignNurse />
              </DashboardLayout>
          }
          />



        </Routes>
      </Router>
    </>
  );
}

export default App;
