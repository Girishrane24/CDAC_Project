// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h3>🏥 CarePoint</h3>
//       </div>

//       <ul className="sidebar-menu">
//         <li>
//           <NavLink to="/dashboard">📊 Dashboard</NavLink>
//         </li>

//         <li>
//           <NavLink to="/patients">👨‍⚕️ Patients</NavLink>
//         </li>

//         <li>
//           <NavLink to="/doctors">🩺 Doctors</NavLink>
//         </li>

//         <li>
//           <NavLink to="/appointments">📅 Appointments</NavLink>
//         </li>

//         <li>
//           <NavLink to="/billing">💳 Billing</NavLink>
//         </li>

//         <li>
//           <NavLink to="/billing/payment-history">💰 Payment History</NavLink>
//         </li>

// {/* Rooms Dropdown */}

//         <li className="dropdown">

//           <div
//             className="dropdown-title"
//             onClick={() => setRoomMenuOpen(!roomMenuOpen)}
//           >
//             🛏️ Rooms
//             <span>{roomMenuOpen ? "▲" : "▼"}</span>
//           </div>

//           {roomMenuOpen && (

//             <ul className="submenu">

//               <li>
//                 <NavLink to="/rooms">
//                   Room List
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/rooms/allocation">
//                   Room Allocation
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/rooms/beds">
//                   Bed Management
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/rooms/status">
//                   Room Status
//                 </NavLink>
//               </li>

//             </ul>

//           )}

//         </li>

//         <li>
//           <NavLink to="/laboratory">🧪 Laboratory</NavLink>
//         </li>

//         <li>
//           <NavLink to="/pharmacy">💊 Pharmacy</NavLink>
//         </li>

//         <li>
//           <NavLink to="/reports">📈 Reports</NavLink>
//         </li>

//         <li>
//           <NavLink to="/profile">👤 Profile</NavLink>
//         </li>

//         <li>
//           <NavLink to="/logout">🚪 Logout</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [roomMenuOpen, setRoomMenuOpen] = useState(false);

  return (
    <div className="sidebar">
     
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard">📊 Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/patients">👨‍⚕️ Patients</NavLink>
        </li>

        <li>
          <NavLink to="/doctors">🩺 Doctors</NavLink>
        </li>

        <li>
          <NavLink to="/appointments">📅 Appointments</NavLink>
        </li>

        <li>
          <NavLink to="/billing">💳 Billing</NavLink>
        </li>

        <li>
          <NavLink to="/billing/payment-history">
            💰 Payment History
          </NavLink>
        </li>

        {/* Rooms Dropdown */}
        <li className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => setRoomMenuOpen(!roomMenuOpen)}
          >
            <span>🛏️ Rooms</span>
            <span>{roomMenuOpen ? "▲" : "▼"}</span>
          </div>

          {roomMenuOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/rooms">Room List</NavLink>
              </li>

              <li>
                <NavLink to="/rooms/allocation">
                  Room Allocation
                </NavLink>
              </li>

              <li>
                <NavLink to="/rooms/beds">
                  Bed Management
                </NavLink>
              </li>

              <li>
                <NavLink to="/rooms/status">
                  Room Status
                </NavLink>
              </li>
            </ul>
          )}
        </li>

      

        <li>
    <NavLink to="/laboratory/labs">
        🧪 Laboratory
    </NavLink>
</li>


<li>
    <NavLink to="/laboratory/tests">
        📝 Lab Tests
    </NavLink>
</li>

        {/* <li>
          <NavLink to="/pharmacy">💊 Pharmacy</NavLink>
        </li>

        <li>
          <NavLink to="/reports">📈 Reports</NavLink>
          </li> */}

        <li>
          <NavLink to="/nurses">👤 Nurses</NavLink>
          </li>

        <li>
          <NavLink to="/logout">🚪 Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
