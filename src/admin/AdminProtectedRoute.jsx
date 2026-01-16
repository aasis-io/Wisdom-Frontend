import { Navigate, Outlet } from "react-router-dom";

export default function AdminProtectedRoute() {
  // Example: check auth token or admin flag
  const isAdminLoggedIn = Boolean(localStorage.getItem("adminToken"));
  // OR use context / redux:
  // const { isAdminLoggedIn } = useAuth();

  if (!isAdminLoggedIn) {
    return <Navigate to="/waarcadmin/signin" replace />;
  }

  return <Outlet />;
}
