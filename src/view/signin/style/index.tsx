import { ConfigProvider, theme } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 200px;
  padding: 50px;
  width: 90%;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: white;
  font-family: Inter, sans-serif;
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Label = styled.p`
  color: white;
  font-weight: bold;
  font-family: Inter, sans-serif;
  font-size: 13px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-top: 5px;
`;

export const ErrorMessage = styled.p`
  letter-spacing: 1px;
  font-size: 11px;
  text-align: left;
  font-family: Inter, sans-serif;
`;

export const ForgotPassword = styled.p`
  color: #1079f7;
  margin-top: -20px;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: #3f90f3;
  }
  &:active {
    color: #1079f7;
  }
`;

export const FormContent = styled.div`
  margin-top: 10px;
  flex-basis: 1;
  flex-shrink: 1;
`;

export const InfoMessage = styled.p`
  letter-spacing: 1px;
  font-size: 11px;
  text-align: left;
  font-family: Inter, sans-serif;
`;

export default function StyledInput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "rgb(256,0,0,0)",
            colorText: "white",
            colorTextSecondary: "#ffffff",
            colorTextQuaternary: "#ffffff",
            colorTextPlaceholder: "#ffffff",
          },
        },
        token: {
          colorPrimary: "#009EF7",
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
