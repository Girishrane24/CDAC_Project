// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (!token) {
//         return <Navigate to="/" replace />;
//     }

//     if (role !== "ADMIN") {
//         return <Navigate to="/" replace />;
//     }

//     return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // User not logged in
    if (!token) {
        return <Navigate to="/" replace />;
    }

    // User logged in but doesn't have permission
    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default ProtectedRoute;