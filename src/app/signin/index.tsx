import React, { useEffect } from "react";
import Signin from "../../view/signin";
import { UseToken } from "../../hooks/useToken";

const index = () => {
  const { getToken } = UseToken();

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Signin
      onFinish={() => {}}
      onFinishFailed={() => {}}
      navigate={() => {}}
      errorLogin={false}
      isLoading={false}
    />
  );
};

export default index;
