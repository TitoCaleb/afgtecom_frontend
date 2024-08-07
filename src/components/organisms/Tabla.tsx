import { Table } from "antd";

type Props = {
  isLoading: boolean;
  columns: any;
  data: any;
};

const Tabla = ({ isLoading, columns, data }: Props) => {
  return (
    <Table
      rowKey="id"
      scroll={{ x: 1500 }}
      loading={isLoading}
      columns={columns}
      dataSource={data}
    />
  );
};

export default Tabla;
