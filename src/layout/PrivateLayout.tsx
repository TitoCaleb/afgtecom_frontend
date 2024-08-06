import { Layout } from "antd";
import React from "react";
import Sidebar from "../components/template/Sidebar";
import Header from "../components/template/Header";
import Content from "../components/template/Content";
import { BreadcrumbContainer } from "../components/styles";
import Breadcrumbs from "../components/template/Breadcrumbs";

type Props = {};

function PrivateLayout({}: Props) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout style={{ background: "#E2E6E7" }}>
        <Header />
        <BreadcrumbContainer>
          <Breadcrumbs />
        </BreadcrumbContainer>
        <Content />
      </Layout>
    </Layout>
  );
}

export default PrivateLayout;
