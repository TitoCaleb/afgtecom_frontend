import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Signin from "../app/signin";

export default function AuthRoute() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Signin />} />
        <Route path="forgot-password" element={<div>forgot-password</div>} />
        <Route index element={<Signin />} />
      </Route>
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}
