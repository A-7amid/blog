import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyUsers } from "../dummy-users";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(dummyUsers);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const navigate = "fdas";

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
      const foundUser = users.find((user) => user.email === loginUser.email);
      if (!foundUser) {
        setIsInvalidEmail(true);
        return;
      } else if (foundUser.password !== loginUser.password) {
        setIsInvalidEmail(true);
        return;
      }
      setIsInvalidEmail(false);
      console.log("login seccessfull");
      navigate("");
    },
    [users, navigate]
  );

  const handleResetPassword = useCallback(
    ({ email, password, newPassword }) => {
      const foundUser = users.find((user) => user.email === email);
      console.log(foundUser);
      if (!foundUser) {
        console.log("Not Found");
        setIsSuccess(false);
        return;
      } else if (foundUser.password !== password) {
        setIsInvalidEmail(true);
        return;
      }
      setIsSuccess(true);
      setIsInvalidEmail(false);
      console.log("login seccessfull");

      users.find((user) => {
        user.email === email ? (user.password = newPassword) : "";

        console.log(user);
      });

      // console.log(email);
      // setIsSuccess(true);
    },
    [users]
  );

  const values = useMemo(
    () => ({
      users,
      setUsers,
      handleAddUser,
      isInvalidEmail,
      handleLogin,
      handleResetPassword,
      isSuccess,
    }),
    [
      users,
      handleAddUser,
      isInvalidEmail,
      handleLogin,
      handleResetPassword,
      isSuccess,
    ]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
