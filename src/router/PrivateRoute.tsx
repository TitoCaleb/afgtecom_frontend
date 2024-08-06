import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import Init from "../app/inicio";
import LoadingPage from "../view/LoadingPage";
import { lazy } from "react";

export default function PrivateRoute() {
  const Services = lazy(() => import("../app/services"));

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<Init />} />
        <Route
          path="services"
          element={
            <LoadingPage>
              <Services />
            </LoadingPage>
          }
        />
        <Route index element={<Init />} />
      </Route>
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}
