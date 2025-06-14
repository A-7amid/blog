import { useForm } from "react-hook-form";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";
import { useAuth } from "../context/authentication.context";

export const SignupForm = () => {
  const { handleAddUser } = useAuth();
  const [passwordType, setPasswordType] = useState("password");

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchAllFields = watch();

  return (
    <div className="flex flex-1 h-full items-center justify-center font-sans bg-slate-50">
      <form
        className="border -translate-y-15 border-black/10 w-[26%] rounded-md px-6 py-4 bg-white"
        onSubmit={handleSubmit(async (data) => {
          await handleAddUser(data);
        })}
      >
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-bold text-2xl">Create your account</h3>
            <p className="text-gray-500 text-sm">
              Enter your details to get started
            </p>
          </div>

          <div className="gap-y-3 flex flex-col">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className="font-semibold text-sm select-none w-fit"
              >
                Full Name
              </label>
              <input
                id="username"
                type="text"
                {...register("username", { required: true })}
                // placeholder="Enter email address"
                className="border border-black/10 transition-colors duration-1000 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[5px] outline-black/35"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div>
                <label
                  htmlFor="email"
                  className="font-semibold text-sm select-none w-fit"
                >
                  Email
                </label>
                {errors.email && <span></span>}
              </div>

              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter email address"
                className="border border-black/10 transition-colors duration-1000 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[5px] outline-black/35"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div>
                <label
                  htmlFor="password"
                  className="font-semibold text-sm select-none w-fit"
                >
                  Password
                </label>

                {/* {errors.password && <span>fdsfsdf</span>} */}
              </div>

              <div className="border border-black/10 gap-1 flex rounded-md px-3 py-2 text-sm font-semibold focus-within:outline-[3px] outline-offset-[3px] outline-black/35">
                <input
                  id="password"
                  {...register("password", { required: true })}
                  type={passwordType}
                  placeholder="Enter your password"
                  className="outline-0 w-full "
                />

                {passwordType === "password" ? (
                  <EyeOff
                    size={19}
                    onClick={() => setPasswordType("text")}
                    className="stroke-black/60 cursor-pointer hover:stroke-black transition duration-150"
                  />
                ) : (
                  <Eye
                    size={19}
                    onClick={() => setPasswordType("password")}
                    className="stroke-black/60 cursor-pointer hover:stroke-black transition duration-150"
                  />
                )}
              </div>

              <span className="text-gray-500 text-xs">
                Must be at least 8 characters long
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirm-password"
                className="font-semibold text-sm select-none w-fit"
              >
                Confirm Passowrd
              </label>

              <div className="border border-black/10 gap-1 flex rounded-md px-3 py-2 text-sm font-semibold focus-within:outline-[3px] outline-offset-[3px] outline-black/35">
                <input
                  id="confirm-password"
                  type={passwordType}
                  {...register("confirmPassword", { required: true })}
                  placeholder="Enter your password"
                  className="outline-0 w-full "
                />

                {passwordType === "password" ? (
                  <EyeOff
                    size={19}
                    onClick={() => setPasswordType("text")}
                    className="stroke-black/60 cursor-pointer hover:stroke-black transition duration-150"
                  />
                ) : (
                  <Eye
                    size={19}
                    onClick={() => setPasswordType("password")}
                    className="stroke-black/60 cursor-pointer hover:stroke-black transition duration-150"
                  />
                )}
              </div>
            </div>

            {watchAllFields.password !== watchAllFields.confirmPassword ? (
              <span>
                <CircleAlert /> Those passwords didn’t match. Try again.
              </span>
            ) : (
              ""
            )}
          </div>

          <Checkbox
            label="
I agree to the Terms of Service and Privacy Policy"
          />

          <div>
            <button
              type="submit"
              className="mb-3 text-white bg-black/90 hover:bg-black/80 transition-colors duration-150 cursor-pointer rounded-md w-full py-2.5 text-sm font-semibold"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
