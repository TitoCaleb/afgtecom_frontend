import { createContext, useState } from "react";
import { User } from "../domain/User";

type UserContextType = {
  user: User | null;
  setUserContext: (userData: User) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const setUserContext = (userData: User) => {
    setUser(userData);
  };

  const utilities = { user, setUserContext };

  return (
    <UserContext.Provider value={utilities}>{children}</UserContext.Provider>
  );
}
