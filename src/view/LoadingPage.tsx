import { Spin } from "antd";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const LoadingPage = ({ children }: Props) => {
  return (
    <Suspense
      fallback={
        <Spin
          spinning
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        />
      }
    >
      {children}
    </Suspense>
  );
};

export default LoadingPage;
