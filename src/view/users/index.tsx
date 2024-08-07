import { Dispatch, SetStateAction, useState } from "react";
import ListUsers from "./list_users";
import CreateUser from "./create_users";
import { User } from "../../domain/User";
import { ApiResponse } from "../../hooks/useGet";

type Props<T> = {
  userData: ApiResponse<T>;
  loadingTable: boolean;
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
};

export enum StateUser {
  LIST_USERS = "LIST_USERS",
  CREATE_USER = "CREATE",
}

const Users = ({
  userData,
  loadingTable,
  refresh,
  setRefresh,
}: Props<User>) => {
  const [stateUser, setStateUser] = useState<StateUser>(StateUser.LIST_USERS);

  return (
    <>
      {stateUser === StateUser.LIST_USERS && (
        <ListUsers
          setStateUser={setStateUser}
          userData={userData}
          loadingTable={loadingTable}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      )}
      {stateUser === StateUser.CREATE_USER && <CreateUser />}
    </>
  );
};

export default Users;
