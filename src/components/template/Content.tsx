import { Layout } from "antd";
import { BackgroundContent } from "../styles";
import { Outlet } from "react-router-dom";

const Content = () => {
  const { Content } = Layout;

  return (
    <Content
      style={{
        margin: "24px 16px 0",
      }}
    >
      <BackgroundContent>
        <Outlet />
      </BackgroundContent>
    </Content>
  );
};

export default Content;
