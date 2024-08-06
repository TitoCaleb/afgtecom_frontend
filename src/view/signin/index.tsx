/* eslint-disable react/prop-types */
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import StyledInput, { Container, FormContent, Label, Title } from "./style";

type Props = {
  onFinish: (values: any) => void;
  onFinishFailed: (errorInfo: any) => void;
  isLoading: boolean;
};

const validateMessages = {
  required: "Ingrese un ${name}",
  pattern: {
    mismatch: "El correo no cumple con el formato",
  },
};

export default function Signin({ onFinish, onFinishFailed, isLoading }: Props) {
  return (
    <Container>
      <Title>Iniciar Sesión</Title>
      <Form
        name="login"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        style={{ width: "100%" }}
      >
        <FormContent>
          <Label>Correo</Label>
          <StyledInput>
            <Form.Item
              validateStatus={isLoading ? "validating" : undefined}
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Debe ingresar un correo",
                },
              ]}
            >
              <Input
                placeholder="Email"
                style={{ height: 40, width: "100%" }}
                allowClear
                prefix={<UserOutlined />}
                type="email"
              />
            </Form.Item>
          </StyledInput>
        </FormContent>
        <FormContent>
          <Label>Contraseña</Label>
          <StyledInput>
            <Form.Item
              validateStatus={isLoading ? "validating" : undefined}
              hasFeedback
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingrese una contraseña",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Contraseña"
                style={{ height: 40 }}
                allowClear
              />
            </Form.Item>
          </StyledInput>
        </FormContent>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", height: 45, marginTop: 20 }}
            loading={isLoading}
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}
