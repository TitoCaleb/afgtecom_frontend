import { Avatar, Dropdown, Layout } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { AvatarName, Avatarcontainer } from "../styles";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/interface";
import { useFetch } from "../../hooks/useFetch";
import { removeAuth } from "../../utils/AuthHelpers";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const { user, setUserContext } = useContext(UserContext);
  const { getData } = useFetch();

  const items: ItemType[] = [
    {
      label: "Configuración",
      icon: <SettingOutlined />,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "Cerrar Sesión",
      icon: <LogoutOutlined />,
      danger: true,
      key: "1",
    },
  ];

  const onCloseSession = async () => {
    await getData("/security/logout").then(() => {
      removeAuth("user");
      removeAuth("token");
      setUserContext(null);
      navigate("/");
    });
  };

  const onClick = ({ key }) => {
    switch (key) {
      case "0":
        break;
      case "1":
        onCloseSession();
        break;
    }
  };

  return (
    <Header
      style={{
        padding: "0 30px",
        background: "white",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        trigger={["click"]}
      >
        <Avatarcontainer>
          <AvatarName>
            Bienvenido, {user?.name} {user?.lastName}
          </AvatarName>
          <Avatar shape="square" size={40} style={{ cursor: "pointer" }}>
            {user?.name}
            {user?.lastName}
          </Avatar>{" "}
        </Avatarcontainer>
      </Dropdown>
    </Header>
  );
};

export default Header;
