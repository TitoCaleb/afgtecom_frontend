import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Signin from "../app/signin";

export default function AuthRoute() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signin" element={<Signin />} />
        <Route index element={<Signin />} />
      </Route>
    </Routes>
  );
}
