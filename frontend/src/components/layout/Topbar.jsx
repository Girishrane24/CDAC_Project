import "./Topbar.css";

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

            <h4>Hospital Management System</h4>

            <div className="topbar-right">

                <span>{today}</span>

                <img
                    src="https://i.pravatar.cc/40"
                    alt="Admin"
                    className="profile-image"
                />

            </div>

        </header>
    );
}

export default Topbar;