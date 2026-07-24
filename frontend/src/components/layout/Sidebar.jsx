import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  const [roomMenuOpen, setRoomMenuOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>
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
            <NavLink
              to="/billing/payment-history"
              //   onClick={closeSidebar}
            >
              💰 Payment History
            </NavLink>
          </li>

          <li className="dropdown">
            <div
              className="dropdown-title"
              onClick={() => setRoomMenuOpen(!roomMenuOpen)}
            >
              <span>🛏 Rooms</span>

              <span>{roomMenuOpen ? "▲" : "▼"}</span>
            </div>

            {roomMenuOpen && (
              <ul className="submenu">
                <li>
                  <NavLink to="/rooms">Room List</NavLink>
                </li>

                <li>
                  <NavLink to="/rooms/allocation">Allocation</NavLink>
                </li>

                <li>
                  <NavLink to="/rooms/beds">Bed Management</NavLink>
                </li>

                <li>
                  <NavLink to="/rooms/status">Room Status</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/laboratory/labs">🧪 Laboratory</NavLink>
          </li>

         <li>
            <NavLink to="/laboratory/tests">📝 Lab Tests</NavLink>
          </li>

          <li>
            <NavLink to="/nurses">👤 Nurses</NavLink>
          </li>

          <li>
            <NavLink to="/logout">🚪 Logout</NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
