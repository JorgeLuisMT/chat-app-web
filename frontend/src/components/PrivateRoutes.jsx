import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ auth }) => {
  return <>{auth ? <Outlet /> : <Navigate to={"/login"} />}</>;
};
