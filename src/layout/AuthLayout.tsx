import { Outlet } from "react-router-dom";
import { ContainerLayout } from "./styles";

const AuthLayout = () => {
  return (
    <ContainerLayout>
      <Outlet />
    </ContainerLayout>
  );
};

export default AuthLayout;
