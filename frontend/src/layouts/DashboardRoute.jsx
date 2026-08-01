import ProtectedRoute from "../components/auth/ProtectedRoute";
import DashboardLayout from "./DashboardLayout";

function DashboardRoute({ children }) {
    return (
        <ProtectedRoute>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </ProtectedRoute>
    );
}

export default DashboardRoute;