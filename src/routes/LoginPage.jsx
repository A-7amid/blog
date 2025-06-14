import { LoginForm } from "../Components/LoginForm";
import Navbar from "../Components/Navbar";

export const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <LoginForm />
    </div>
  );
};
