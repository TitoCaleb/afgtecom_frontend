import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { App } from "antd";
import "./styles/App.css";
import { UserProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <App>
      <Router />
    </App>
  </UserProvider>
);
