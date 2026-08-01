// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import './App.css'

// //Authentication
// import Home from "./pages/Authentication/Home.jsx";
// import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
// import ForgotPassword from "./pages/Authentication/ForgotPassword.jsx";
// import ResetPassword from "./pages/Authentication/ResetPassword.jsx";
// import Logout from "./pages/Authentication/Logout.jsx";

// //Dashboard
// // import DashboardLayout from "./layouts/DashboardLayout.jsx";
// import DashboardRoute from "./layouts/DashboardRoute";
// import Dashboard from "./pages/Dashboard/Dashboard.jsx";

// //Patient
// import PatientRegistration from "./pages/Patient/PatientRegistration.jsx";
// import PatientList from "./pages/Patient/PatientList.jsx";
// import AddPatient from "./pages/Patient/AddPatient.jsx";
// import EditPatient from "./pages/Patient/EditPatient.jsx";
// import PatientDetails from "./pages/Patient/PatientDetails.jsx";
// import MedicalHistory from "./pages/Patient/MedicalHistory.jsx";

// //Doctor
// import DoctorList from "./pages/Doctor/DoctorList.jsx";
// import AddDoctor from "./pages/Doctor/AddDoctor.jsx";
// import EditDoctor from "./pages/Doctor/EditDoctor.jsx";
// import DoctorDetails from "./pages/Doctor/DoctorDetails.jsx";

// // Appointment
// import AppointmentList from "./pages/Appointment/AppointmentList.jsx";
// import BookAppointment from "./pages/Appointment/BookAppointment.jsx";
// import EditAppointment from "./pages/Appointment/EditAppointment.jsx";
// import AppointmentDetails from "./pages/Appointment/AppointmentDetails.jsx";

// // Billing
// import BillingList from "./pages/Billing/BillingList.jsx";
// import CreateBill from "./pages/Billing/CreateBill.jsx";
// import EditBill from "./pages/Billing/EditBill.jsx";
// import BillDetails from "./pages/Billing/BillDetails.jsx";
// import PaymentHistory from "./pages/Billing/PaymentHistory.jsx";

// //Room
// import RoomAllocation from "./pages/Room/RoomAllocation.jsx";
// import RoomList from "./pages/Room/RoomList.jsx";
// import AddRoom from "./pages/Room/AddRoom.jsx";
// import EditRoom from "./pages/Room/EditRoom.jsx";
// import RoomDetails from "./pages/Room/RoomDetails.jsx";
// import RoomStatus from "./pages/Room/RoomStatus.jsx";
// import BedManagement from "./pages/Room/BedManagement.jsx";

// import LabList from "./pages/Laboratory/Lab/LabList";
// import AddLab from "./pages/Laboratory/Lab/AddLab";
// import EditLab from "./pages/Laboratory/Lab/EditLab";
// import LabDetails from "./pages/Laboratory/Lab/LabDetails";

// import LabTestList from "./pages/Laboratory/LabTest/LabTestList";
// import AddLabTest from "./pages/Laboratory/LabTest/AddLabTest";
// import EditLabTest from "./pages/Laboratory/LabTest/EditLabTest";
// import LabTestDetails from "./pages/Laboratory/LabTest/LabTestDetails";

// // Nurse Module Imports
// import NurseList from "./pages/Nurse/NurseList";
// import AddNurse from "./pages/Nurse/AddNurse";
// import EditNurse from "./pages/Nurse/EditNurse";
// import NurseDetails from "./pages/Nurse/NurseDetails";
// import AssignNurse from "./pages/Nurse/AssignNurse";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/patients/add" element={<AddPatient />} />
//            <Route path="/appointments/book" element={<BookAppointment />} /> */}
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password" element={<ResetPassword />} />
//           <Route path="/logout" element={<Logout />} />

//           <Route
//     path="/dashboard"
//     element={
//        <DashboardRoute>
//             <Dashboard />
//         </DashboardRoute>
//     }
// />

//           <Route
//             path="/patients"
//             element={
//               <DashboardRoute>
//                 <PatientList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/patients/add"
//             element={
//               <DashboardRoute>
//                 <AddPatient />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/patients/edit"
//             element={
//               <DashboardRoute>
//                 <EditPatient />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/patients/details"
//             element={
//               <DashboardRoute>
//                 <PatientDetails />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/patients/history"
//             element={
//               <DashboardRoute>
//                 <MedicalHistory />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/doctors"
//             element={
//               <DashboardRoute>
//                 <DoctorList />
//               </DashboardRoute>
//             }
//           />
//           <Route
//             path="/doctors/add"
//             element={
//               <DashboardRoute>
//                 <AddDoctor />
//               </DashboardRoute>
//             }
//           />
//           <Route
//             path="/doctors/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditDoctor />
//               </DashboardRoute>
//             }
//           />
//           <Route
//             path="/doctors/:id"
//             element={
//               <DashboardRoute>
//                 <DoctorDetails />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/appointments"
//             element={
//               <DashboardRoute>
//                 <AppointmentList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/appointments/book"
//             element={
//               <DashboardRoute>
//                 <BookAppointment />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/appointments/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditAppointment />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/appointments/details/:id"
//             element={
//               <DashboardRoute>
//                 <AppointmentDetails />
//               </DashboardRoute>
//             }
//           />

//           {/* Billing Module */}

//           <Route
//             path="/billing"
//             element={
//               <DashboardRoute>
//                 <BillingList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/billing/create"
//             element={
//               <DashboardRoute>
//                 <CreateBill />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/billing/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditBill />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/billing/details/:id"
//             element={
//               <DashboardRoute>
//                 <BillDetails />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/billing/payment-history"
//             element={
//               <DashboardRoute>
//                 <PaymentHistory />
//               </DashboardRoute>
//             }
//           />

//           {/* Room Module */}

//           <Route
//             path="/rooms"
//             element={
//               <DashboardRoute>
//                 <RoomList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/rooms/add"
//             element={
//               <DashboardRoute>
//                 <AddRoom />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/rooms/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditRoom />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/rooms/details/:id"
//             element={
//               <DashboardRoute>
//                 <RoomDetails />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/rooms/room-allocations"
//             element={
//               <DashboardRoute>
//                 <RoomAllocation />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/rooms/beds"
//             element={
//               <DashboardRoute>
//                 <BedManagement />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/rooms/status"
//             element={
//               <DashboardRoute>
//                 <RoomStatus />
//               </DashboardRoute>
//             }
//           />

//           {/* Laboratory Module */}

//           <Route
//             path="/laboratory/labs"
//             element={
//               <DashboardRoute>
//                 <LabList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/laboratory/labs/add"
//             element={
//               <DashboardRoute>
//                 <AddLab />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/laboratory/labs/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditLab />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/laboratory/labs/details/:id"
//             element={
//               <DashboardRoute>
//                 <LabDetails />
//               </DashboardRoute>
//             }
//           />

//           {/* Lab Test Module */}

//           <Route
//             path="/laboratory/tests"
//             element={
//               <DashboardRoute>
//                 <LabTestList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/laboratory/tests/add"
//             element={
//               <DashboardRoute>
//                 <AddLabTest />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/laboratory/tests/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditLabTest />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/laboratory/tests/details/:id"
//             element={
//               <DashboardRoute>
//                 <LabTestDetails />
//               </DashboardRoute>
//             }
//           />

//           {/* Nurse Module Routes */}

//           <Route
//             path="/nurses"
//             element={
//               <DashboardRoute>
//                 <NurseList />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/nurses/add"
//             element={
//               <DashboardRoute>
//                 <AddNurse />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/nurses/edit/:id"
//             element={
//               <DashboardRoute>
//                 <EditNurse />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/nurses/:id"
//             element={
//               <DashboardRoute>
//                 <NurseDetails />
//               </DashboardRoute>
//             }
//           />

//           <Route
//             path="/nurses/assign"
//             element={
//               <DashboardRoute>
//                 <AssignNurse />
//               </DashboardRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'

//Authentication
import Home from "./pages/Authentication/Home.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import ForgotPassword from "./pages/Authentication/ForgotPassword.jsx";
import ResetPassword from "./pages/Authentication/ResetPassword.jsx";
import Logout from "./pages/Authentication/Logout.jsx";

//Dashboard
// import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardRoute from "./layouts/DashboardRoute";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

//Patient
import PatientRegistration from "./pages/Patient/PatientRegistration.jsx";
import PatientList from "./pages/Patient/PatientList.jsx";
import AddPatient from "./pages/Patient/AddPatient.jsx";
import EditPatient from "./pages/Patient/EditPatient.jsx";
import PatientDetails from "./pages/Patient/PatientDetails.jsx";
// import MedicalHistory from "./pages/Patient/MedicalHistory.jsx";

//Doctor
import DoctorList from "./pages/Doctor/DoctorList.jsx";
import AddDoctor from "./pages/Doctor/AddDoctor.jsx";
import EditDoctor from "./pages/Doctor/EditDoctor.jsx";
import DoctorDetails from "./pages/Doctor/DoctorDetails.jsx";

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

// Nurse Module Imports
import NurseList from "./pages/Nurse/NurseList";
import AddNurse from "./pages/Nurse/AddNurse";
import EditNurse from "./pages/Nurse/EditNurse";
import NurseDetails from "./pages/Nurse/NurseDetails";
//import AssignNurse from "./pages/Nurse/AssignNurse";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/patients/add" element={<AddPatient />} />
           <Route path="/appointments/book" element={<BookAppointment />} /> */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />

          {/* <Route
            path="/dashboard"
            element={
              
              <DashboardRoute>
                <Dashboard />
              </DashboardRoute>
            }
          /> */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN"]}
              >
                <DashboardRoute>
                  <Dashboard />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <PatientList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients/add"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <AddPatient />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients/edit"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <EditPatient />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients/details"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <PatientDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/patients/history"
            element={
              
              <DashboardRoute>
                <MedicalHistory />
              </DashboardRoute>
            }
          /> */}

          <Route
            path="/doctors"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "DOCTOR"]}>
                <DashboardRoute>
                  <DoctorList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctors/add"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "DOCTOR"]}>
                <DashboardRoute>
                  <AddDoctor />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "DOCTOR"]}>
                <DashboardRoute>
                  <EditDoctor />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "DOCTOR"]}>
                <DashboardRoute>
                  <DoctorDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <AppointmentList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments/book"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <BookAppointment />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments/edit/:id"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <EditAppointment />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments/details/:id"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN", "DOCTOR", "RECEPTIONIST"]}
              >
                <DashboardRoute>
                  <AppointmentDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* Billing Module */}

          <Route
            path="/billing"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <BillingList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/billing/create"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <CreateBill />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/billing/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <EditBill />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/billing/details/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <BillDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/billing/payment-history"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <PaymentHistory />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* Room Module */}

          <Route
            path="/rooms"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <RoomList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rooms/add"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <AddRoom />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rooms/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <EditRoom />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rooms/details/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <RoomDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rooms/room-allocations"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <RoomAllocation />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rooms/beds"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <BedManagement />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rooms/status"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "RECEPTIONIST"]}>
                <DashboardRoute>
                  <RoomStatus />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* Laboratory Module */}

          <Route
            path="/laboratory/labs"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <LabList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/laboratory/labs/add"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <AddLab />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/laboratory/labs/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <EditLab />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/laboratory/labs/details/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <LabDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* Lab Test Module */}

          <Route
            path="/laboratory/tests"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <LabTestList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/laboratory/tests/add"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <AddLabTest />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/laboratory/tests/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <EditLabTest />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/laboratory/tests/details/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "LAB_TECHNICIAN"]}>
                <DashboardRoute>
                  <LabTestDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* Nurse Module Routes */}

          <Route
            path="/nurses"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <DashboardRoute>
                  <NurseList />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/nurses/add"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <DashboardRoute>
                  <AddNurse />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/nurses/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <DashboardRoute>
                  <EditNurse />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/nurses/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <DashboardRoute>
                  <NurseDetails />
                </DashboardRoute>
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/nurses/assign"
            element={
              <DashboardRoute>
                <AssignNurse />
              </DashboardRoute>
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
