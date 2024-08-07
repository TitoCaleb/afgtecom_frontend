import React, { Dispatch, SetStateAction } from "react";
import { Title } from "../style";
import Filterbar from "../components/Filterbar";
import Tabla from "../../../components/organisms/Tabla";
import { userColumns } from "../components/Columns";
import { StateUser } from "..";
import { Button, Dropdown, Space, Switch } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { User } from "../../../domain/User";
import { ApiResponse } from "../../../hooks/useGet";

type Props<T> = {
  setStateUser: Dispatch<SetStateAction<StateUser>>;
  userData: ApiResponse<T>;
  loadingTable: boolean;
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
};

const columnsTable = [
  ...userColumns,
  {
    title: "Estado",
    key: "user_status",
    dataIndex: "user_status",
    width: 140,
    fixed: "center",
    render: (text, record) => (
      <Space size="middle">
        <Switch
        /* loading={statusLoading} */
        /* defaultChecked={text === 'ACT' ? true : false} */
        /* onClick={() => updateStatus(record.id)} */
        />
      </Space>
    ),
  },
  {
    title: "Acciones",
    key: "usuarioDisplayName",
    fixed: "right",
    className: "row_botones",
    render: (text, record) => (
      <Space size="small">
        {/* <Dropdown.Button
          type="default"
          className="dropdown_btn"
          menu={{
            items: items,
            onClick: (e) => handleMenuClick(e, record),
          }}
          onClick={() => onSee(record)}
        >
          <EyeOutlined />
        </Dropdown.Button> */}
        <Button
          type="default"
          className="button_table action_btn"
          /* onClick={() => onSee(record)} */
        >
          <EyeOutlined />
        </Button>
        <Button
          type="primary"
          className="button_table action_btn"
          /* onClick={() => onEdit(record.id)} */
        >
          <EditOutlined />
        </Button>
        <Button
          danger
          type="primary"
          className="button_table action_btn"
          /* onClick={() => onDelete(record.id, record.full_name)} */
        >
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

const ListUsers = ({
  setStateUser,
  setRefresh,
  loadingTable,
  userData,
  refresh,
}: Props<User>) => {
  return (
    <div>
      <Title>Lista de Usuarios</Title>
      <Filterbar
        setStateUser={setStateUser}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <Tabla
        columns={columnsTable}
        data={userData?.data}
        isLoading={loadingTable}
      />
    </div>
  );
};

export default ListUsers;
