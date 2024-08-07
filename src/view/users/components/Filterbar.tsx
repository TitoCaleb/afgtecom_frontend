import { ReloadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import "../style/index.css";
import { Dispatch, SetStateAction } from "react";
import { StateUser } from "..";

type Props = {
  setStateUser: Dispatch<SetStateAction<StateUser>>;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  refresh: boolean;
};

const Filterbar = ({ setStateUser, setRefresh, refresh }: Props) => {
  const onCreateUser = () => {
    setStateUser(StateUser.CREATE_USER);
  };

  const onRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <Form
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: 20,
        width: "100%",
      }}
      layout="vertical"
    >
      <Form.Item label="Buscador: ">
        <Input
          name="search"
          placeholder="Nombre, Apellidos, Doc. Identidad"
          style={{ width: 250 }}
        />
      </Form.Item>
      <Form.Item label="Escoger rol:">
        <Select
          placeholder="Escoger"
          className="filtros_select"
          allowClear
        ></Select>
      </Form.Item>
      <Form.Item style={{ display: "flex", alignItems: "end" }}>
        <Button type="primary" onClick={onCreateUser}>
          Nuevo Usuario
        </Button>
      </Form.Item>
      <Form.Item style={{ display: "flex", alignItems: "end" }}>
        <Button
          style={{
            width: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onRefresh}
        >
          <ReloadOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Filterbar;
