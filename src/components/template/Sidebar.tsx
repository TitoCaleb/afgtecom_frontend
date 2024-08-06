import React from "react";
import { Layout, Menu } from "antd";
import { TruckFilled, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Logo } from "../styles";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export default function Sidebar() {
  const { Sider } = Layout;
  const items: ItemType<MenuItemType>[] = [
    {
      key: "1",
      icon: <TruckFilled />,
      label: <NavLink to={"providers"}>Proveedores</NavLink>,
    },
    {
      label: "Administrativo",
      type: "group",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Usuarios",
      children: [
        {
          key: "2.1",
          label: <NavLink to={"lista-usuarios"}>Lista de usuarios</NavLink>,
        },
        {
          key: "2.2",
          label: <NavLink to={"nuevos-usuarios"}>Crear Usuario</NavLink>,
        },
      ],
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: <NavLink to={"services"}>Configuración Servicios</NavLink>,
    },
  ];

  return (
    <Sider breakpoint="lg" collapsedWidth="0" width="265px">
      <Logo className="demo-logo-vertical"></Logo>
      <Menu theme="dark" mode="inline" items={items} />
    </Sider>
  );
}
