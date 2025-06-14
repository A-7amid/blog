import { ResetPasswordForm } from "../Components/ResetPasswordForm";
import Navbar from "../Components/Navbar";

export const ResetPassowrdPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <ResetPasswordForm />
    </div>
  );
};
