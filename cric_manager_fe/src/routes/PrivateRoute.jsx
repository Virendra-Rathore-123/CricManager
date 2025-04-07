import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // or your auth check

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;