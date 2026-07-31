
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaUserMd,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaHistory,
  FaHospital,
  FaFlask,
  FaVial,
  FaUserNurse,
  FaBed,
  FaChevronDown,
  FaChevronUp,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  const [roomMenuOpen, setRoomMenuOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>
       

        {/* Menu */}
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/dashboard" onClick={closeSidebar}>
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/patients" onClick={closeSidebar}>
              <FaUserInjured />
              <span>Patients</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/doctors" onClick={closeSidebar}>
              <FaUserMd />
              <span>Doctors</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/appointments" onClick={closeSidebar}>
              <FaCalendarAlt />
              <span>Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/billing" onClick={closeSidebar}>
              <FaMoneyBillWave />
              <span>Billing</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/billing/payment-history"
              onClick={closeSidebar}
            >
              <FaHistory />
              <span>Payment History</span>
            </NavLink>
          </li>

          {/* Rooms */}
          <li className="dropdown">
            <div
              className="dropdown-title"
              onClick={() => setRoomMenuOpen(!roomMenuOpen)}
            >
              <div className="dropdown-left">
                <FaBed />
                <span>Rooms</span>
              </div>

              {roomMenuOpen ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>

            {roomMenuOpen && (
              <ul className="submenu">
                <li>
                  <NavLink
                    to="/rooms"
                    onClick={closeSidebar}
                  >
                    Room List
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/rooms/room-allocations"
                    onClick={closeSidebar}
                  >
                    Allocation
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/rooms/beds"
                    onClick={closeSidebar}
                  >
                    Bed Management
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/rooms/status"
                    onClick={closeSidebar}
                  >
                    Room Status
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/laboratory/labs"
              onClick={closeSidebar}
            >
              <FaFlask />
              <span>Laboratory</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/laboratory/tests"
              onClick={closeSidebar}
            >
              <FaVial />
              <span>Lab Tests</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/nurses"
              onClick={closeSidebar}
            >
              <FaUserNurse />
              <span>Nurses</span>
            </NavLink>
          </li>
        </ul>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="admin-card">
            <div className="admin-avatar">A</div>

            <div className="admin-details">
              <h4>Administrator</h4>
              <span>CarePoint Admin</span>
            </div>
          </div>

          <NavLink
            to="/logout"
            className="logout-btn"
            onClick={closeSidebar}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
