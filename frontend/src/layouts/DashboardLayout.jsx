import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Sidebar
                isOpen={sidebarOpen}
                closeSidebar={() => setSidebarOpen(false)}
            />

            <div className="content-wrapper">

                <Topbar
                    openSidebar={() => setSidebarOpen(true)}
                />

                <main className="main-content">
                    {children}
                </main>

                {/* Remove this if you don't want footer */}
                {/* <Footer /> */}

            </div>
        </>
    );
}

export default DashboardLayout;