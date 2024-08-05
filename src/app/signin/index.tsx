import React, { useContext, useEffect } from "react";
import Signin from "../../view/signin";
import { useToken } from "../../hooks/useToken";
import { useFetch } from "../../hooks/useFetch";
import { Auth } from "../../domain/Auth";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { getAuth, setAuth } from "../../utils/AuthHelpers";

const index = () => {
  const { getToken } = useToken();
  const { data, isLoading, error, postData } = useFetch();
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = async (values: Auth) => {
    await postData("/security/login", values);
  };

  const onFinishFailed = (errorInfo: string) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (data) {
      setUserContext(data);
      setAuth(data, "user");
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
      errorLogin={false}
      isLoading={isLoading}
    />
  );
};

export default index;
