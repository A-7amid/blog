import { useForm } from "react-hook-form";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { CustomCheckbox } from "./CustomCheckbox";
import { useState } from "react";
import { useAuth } from "../context/authentication.context";
import { ErrorMessage } from "@hookform/error-message";
import { cn } from "../utils/clsx";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const { isInvalidEmail, handleAddUser } = useAuth();
  const [passwordType, setPasswordType] = useState("password");

  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const watchAllFields = watch();

  return (
    <div className="flex flex-1 h-full items-center justify-center font-sans bg-slate-50">
      <form
        className="border shadow-xl -translate-y-10 border-black/10 w-[26%] rounded-md px-6 py-4 bg-white"
        onSubmit={handleSubmit((data) => {
          handleAddUser(data);
        })}
      >
        <div className="flex flex-col gap-y-5">
          <header className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-bold text-2xl">Create your account</h3>
            <p className="text-gray-500 text-sm">
              Enter your details to get started
            </p>
          </header>

          <body className="gap-y-3 flex flex-col">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className={cn(
                  "font-semibold text-sm select-none w-fit text-black",
                  { "text-red-400": errors?.username?.type === "required" }
                )}
              >
                Full Name
              </label>

              {isInvalidEmail && (
                <div className="text-red-500 text-sm">
                  Email is already signed in
                </div>
              )}

              <input
                id="username"
                type="text"
                {...register("username", { required: true })}
                // placeholder="Enter email address"
                className={cn(
                  "border border-black/10 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[4px] outline-black/70",
                  { "border-red-400": errors?.username?.type === "required" }
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div>
                <label
                  htmlFor="email"
                  className={cn(
                    "font-semibold text-sm select-none w-fit text-black",
                    { "text-red-400": errors?.email?.type === "required" }
                  )}
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
                className={cn(
                  "border border-black/10 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[4px] outline-black/70",
                  { "border-red-400": errors?.email?.type === "required" }
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div>
                <label
                  htmlFor="password"
                  className={cn(
                    "font-semibold text-sm select-none w-fit text-black",
                    { "text-red-400": errors?.password?.type === "required" }
                  )}
                >
                  Password
                </label>

                {/* {errors.password && <span>fdsfsdf</span>} */}
              </div>

              <div
                className={cn(
                  "focus-within:outline-[3px] flex selece-none border border-black/10 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[2px] outline-black/70",
                  { "border-red-400": errors?.password?.type === "required" }
                )}
              >
                <input
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 24,
                  })}
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

              {watchAllFields.password.length < 8 &&
                watchAllFields.password.length != 0 && (
                  <span className="text-gray-500 text-xs">
                    Must be at least 8 characters long
                  </span>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirm-password"
                className={cn(
                  "font-semibold text-sm select-none w-fit text-black",
                  {
                    "text-red-400":
                      errors?.confirmPassword?.type === "required",
                  }
                )}
              >
                Confirm Passowrd
              </label>

              <div
                className={cn(
                  "focus-within:outline-[3px] border border-black/10 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[2px] outline-black/70",
                  {
                    "border-red-400":
                      errors?.confirmPassword?.type === "required",
                  }
                )}
              >
                <input
                  id="confirm-password"
                  type="password"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Enter your password"
                  className="outline-0 w-full "
                />
                {/* {passwordType === "password" ? (
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
                )} */}
              </div>
            </div>

            {watchAllFields.password !== watchAllFields.confirmPassword ? (
              <span className="text-red-500 flex items-center gap-1 text-sm -mb-2.5 -mt-2">
                <CircleAlert size={16} /> Those passwords didn’t match. Try
                again.
              </span>
            ) : (
              ""
            )}
          </body>

          <CustomCheckbox
            control={control}
            name="terms"
            label={
              <div>
                I agree to the{" "}
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-700 transition duration-150">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-700 transition duration-150">
                  Privacy Policy
                </span>
              </div>
            }
          />

          <footer className="flex flex-col items-center">
            <button
              type="submit"
              className="mb-3 text-white bg-black/90 hover:bg-black/80 transition-colors duration-150 cursor-pointer rounded-md w-full py-2.5 text-sm font-semibold"
            >
              Create Account
            </button>

            <div className="flex items-center gap-1 text-sm my-2">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 underline cursor-pointer hover:text-blue-700 transition duration-150"
              >
                Sign in
              </Link>
            </div>
          </footer>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
