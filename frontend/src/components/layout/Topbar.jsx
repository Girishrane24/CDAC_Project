import "./Topbar.css";
import { FaHospital } from "react-icons/fa";

function Topbar({ openSidebar }) {

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <header className="topbar">

            <button
                className="menu-btn"
                onClick={openSidebar}
            >
                ☰
            </button>

             {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <FaHospital />
          </div>

          <div className="sidebar-title">
            <h3>CarePoint Hospital System</h3>
          </div>
        </div>

            <div className="topbar-right">

                <span>{today}</span>

                <div className="profile">
                    <span>Admin </span>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profile"
                        className="profile-img"

                        width="40"
                        height="40"

                    />
                </div>

            </div>

        </header>
    );
}

export default Topbar;