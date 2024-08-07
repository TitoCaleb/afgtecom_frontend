import React from "react";
import { GridForm, Title } from "../style";
import { UserOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Input, Select } from "antd";

type Props = {};

const CreateUsers = (props: Props) => {
  return (
    <div>
      <Title>
        <UserOutlined />
        Nuevo Usuario
      </Title>
      <Form layout="vertical" autoComplete="off" name="formUser">
        <Card
          type="inner"
          title={<p>Datos personales</p>}
          style={{ margin: 5 }}
          extra={
            <>
              <Button type="primary" style={{ width: 150 }}>
                Crear Usuario
              </Button>
              <Button
                danger
                type="primary"
                style={{ width: 150, marginLeft: 20 }}
                /* onClick={onCancelEdit} */
              >
                Cancelar
              </Button>
            </>
          }
        >
          <GridForm>
            <Form.Item
              hasFeedback
              name="name"
              label="Nombre"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Nombre obligatorio",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="middleName"
              label="Segundo nombre"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="lastName"
              label="Apellido Paterno"
              /* validateStatus={newUserLoading ? "validating" : undefined} */
              rules={[
                {
                  required: true,
                  message: "Apellido paterno obligatorio",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="motherLastName"
              label="Apellido Materno"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Apellido materno obligatorio",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="documentType"
              label="Tipo de Documento"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Tipo de documento obligatorio",
                },
              ]}
            >
              <Select
                placeholder="Seleccionar"
                /* loading={document_typesLoading} */
              >
                {/* {document_types &&
                  document_types.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))} */}
              </Select>
            </Form.Item>
            <Form.Item
              hasFeedback
              name="documentNumber"
              label="Doc. Identidad"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Documento identidad obligatorio",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="birthdate"
              label="Fecha de nacimiento"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Fecha de nacimiento obligatoria",
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="1999-01-01" />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="phone"
              label="Celular"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Número celular obligatorio",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="address"
              label="Dirección"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Dirección obligatoria",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="civil_status_id"
              label="Estado Civil"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Estado civil obligatorio",
                },
              ]}
            >
              <Select
                placeholder="Seleccione"
                /* loading={civil_statusLoading} */
              >
                {/* {civil_status &&
                  civil_status.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))} */}
              </Select>
            </Form.Item>
          </GridForm>
        </Card>
        <Card
          type="inner"
          title={<p>Datos Usuario</p>}
          style={{ margin: "8px 5px 0 5px" }}
        >
          <GridForm>
            <Form.Item
              hasFeedback
              name="email"
              label="Correo Electronico"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Correo obligatorio",
                  type: "email",
                },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="password"
              label="Contraseña"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  /* required: !editMode, */
                  message: "Contraseña obligatoria",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="profile_id"
              label="Rol de usuario"
              /* validateStatus={newUserLoading ? 'validating' : undefined} */
              rules={[
                {
                  required: true,
                  message: "Rol de usuario obligatorio",
                },
              ]}
            >
              <Select
                placeholder="Seleccione"
                /* loading={profileLoading} */
              >
                {/* {profile &&
                  profile.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))} */}
              </Select>
            </Form.Item>
          </GridForm>
        </Card>
      </Form>
    </div>
  );
};

export default CreateUsers;
