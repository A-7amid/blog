import { createContext, useContext, useMemo, useState } from "react";
import { dummyUsers } from "../dummy-users";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(dummyUsers);

  const values = useMemo(() => ({ users }), [users]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
