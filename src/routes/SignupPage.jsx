import Navbar from "../Components/Navbar";
import SignupForm from "../Components/SignupForm";

export const SignupPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <SignupForm />
    </div>
  );
};
