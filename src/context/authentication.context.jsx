import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyUsers } from "../dummy-users";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(dummyUsers);
  const [err, setErr] = useState('')

  const handleAddUser = useCallback(
    (newUser) => {
      users.map((user) => {
        if (user.email === newUser.email) {
          setErr('email')
        }
      })
      if(newUser.password != )

      setUsers((prev) => [...prev, newUser]);
    },
    [setUsers]
  );

  const values = useMemo(
    () => ({ users, setUsers, handleAddUser }),
    [users, handleAddUser]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
