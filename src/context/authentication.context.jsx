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
  const [isInvalidEmail, setIsInvalidEmail] = useState("");

  const handleAddUser = useCallback(
    (newUser) => {
      users.map(
        (user) => user.email === newUser.email && setIsInvalidEmail("email")
      );

      setUsers((prev) => [...prev, newUser]);
      console.log(users);
    },
    [users, setUsers]
  );

  const handleLogin = useCallback(
    (loginUser) => {
      users.map((user) => {
        if (user.email !== loginUser.email) {
          setIsInvalidEmail(true);
          console.log("not done");
          return;
        } else if (
          user.email === loginUser.email &&
          user.password === loginUser.password
        ) {
          console.log("done");
          return;
        }
      });
    },
    [users]
  );

  const values = useMemo(
    () => ({ users, setUsers, handleAddUser, isInvalidEmail, handleLogin }),
    [users, handleAddUser, isInvalidEmail, handleLogin]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
