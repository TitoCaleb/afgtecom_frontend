import { Route, Routes } from "react-router-dom";

export default function PrivateRoute() {
  return (
    <Routes>
      <Route element={<div>Layout</div>}>
        <Route path="inicio" element={<div>inicio</div>} />
        <Route path="usuarios" element={<div>usuarios</div>} />
        <Route index element={<div>inicio</div>} />
      </Route>
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}
