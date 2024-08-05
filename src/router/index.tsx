import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  const user = false;

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
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
