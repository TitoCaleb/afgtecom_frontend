import { useEffect, useState } from "react";
import { User } from "../../domain/User";
import { useGet } from "../../hooks/useGet";
import Users from "../../view/users";

const index = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const {
    data: userData,
    isLoading: getUsersLoading,
    error,
    getData,
  } = useGet<User>();

  useEffect(() => {
    getData("/users");
  }, [refresh]);

  return (
    <Users
      userData={userData}
      loadingTable={getUsersLoading}
      refresh={refresh}
      setRefresh={setRefresh}
    />
  );
};

export default index;
