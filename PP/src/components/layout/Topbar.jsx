import "./Topbar.css";

function Topbar() {

    const today = new Date().toLocaleDateString();

    return (

        <nav className="topbar">

            <div>

                <h4>Hospital Management System</h4>

            </div>

            <div className="topbar-right">

                <span>{today}</span>

                <img
                    src="https://i.pravatar.cc/40"
                    alt="Admin"
                    className="profile-image"
                />

            </div>

        </nav>

    );
}

export default Topbar;