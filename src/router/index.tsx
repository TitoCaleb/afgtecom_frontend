import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Router() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        {true ? (
          <>
            <Route path="dashboard/*" element={<PrivateRoute />} />
            <Route index element={<Navigate to={"/dashboard/inicio"} />} />
          </>
        ) : (
          <>
            <Route path="signin/*" element={<AuthRoute />} />
            <Route path="*" element={<Navigate to={"/signin"} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
