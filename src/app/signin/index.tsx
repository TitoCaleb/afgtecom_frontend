import React, { useContext, useEffect } from "react";
import Signin from "../../view/signin";
import { useToken } from "../../hooks/useToken";
import { usePost } from "../../hooks/usePost";
import { Auth } from "../../domain/Auth";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { getAuth, setAuth } from "../../utils/AuthHelpers";
import { App } from "antd";
import { User } from "../../domain/User";

const index = () => {
  const { getToken } = useToken();
  const { data, isLoading, error, postData } = usePost<User>();
  const { notification } = App.useApp();
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = async (values: Auth) => {
    await postData("/security/login", values);
  };

  const onFinishFailed = (errorInfo: string) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (error) {
      notification.error({
        message: `${error.message}`,
        description: "Error al iniciar sesión, intente de nuevo",
      });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setUserContext(data);
      setAuth<User>(data, "user");
      navigate("/dashboard");
    }
  }, [data]);

  useEffect(() => {
    const user = getAuth("user");
    if (user) {
      setUserContext(user);
      navigate("/dashboard");
      return;
    }
    getToken();
  }, []);

  return (
    <Signin
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      isLoading={isLoading}
    />
  );
};

export default index;
