import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

function DashboardLayout({ children }) {

    return (

        <>
            <Sidebar />

            <Topbar />

            <main
                style={{
                    marginLeft: "260px",
                    padding: "30px",
                    minHeight: "calc(100vh - 130px)",
                    background: "#f5f7fb"
                }}
            >
                {children}
            </main>

            <div style={{ marginLeft: "260px" }}>
                <Footer />
            </div>
        </>

    );
}

export default DashboardLayout;