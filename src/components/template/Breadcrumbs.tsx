import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const breadcrumbNameMap = {
  "/dashboard": <HomeOutlined />,
  "/dashboard/services": "Servicios",
  "/dashboard/servicios/linea": "Linea",
  "/dashboard/servicios/marca": "Marca",
  "/dashboard/nuevos-usuarios": "Nuevo Usuario",
  "/dashboard/editar-usuarios": "Editar Usuario",
  "/dashboard/lista-usuarios": "Lista Usuarios",
  "/dashboard/productos": "Productos",
};

function Breadcrumbs() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  return <Breadcrumb items={extraBreadcrumbItems} />;
}

export default Breadcrumbs;
