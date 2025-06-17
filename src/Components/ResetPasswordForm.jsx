import { useState } from "react";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authentication.context";
import { useForm } from "react-hook-form";
import { cn } from "../utils/clsx";

export const ResetPasswordForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      newPassword: "",
    },
  });

  const { handleResetPassword, isInvalidEmail, isSuccess } = useAuth();
  const [passwordType, setPasswordType] = useState("password");

  const watchAllFields = watch();

  return (
    <div className="flex flex-1 h-full items-center justify-center font-sans bg-slate-50">
      {!isSuccess ? (
        <form
          onSubmit={handleSubmit((data) => {
            handleResetPassword(data);
            console.log(data);
          })}
          className="border border-black/10 -translate-y-15 w-[450px] rounded-md px-6 py-4 bg-white"
        >
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <h3 className="font-bold text-2xl">Reset your password</h3>
              <p className="text-gray-500 text-sm">
                Enter your email address and old password.
              </p>
            </div>

            <div className="gap-y-6 flex flex-col">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className={cn(
                    "font-semibold text-sm select-none w-fit text-black",
                    { "text-red-400": errors?.email?.type === "required" }
                  )}
                >
                  Email
                </label>

                {isInvalidEmail && (
                  <div className="text-red-500 text-sm -mt-1">
                    This email is not registered. Please sign up first.
                  </div>
                )}
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
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="password"
                    className={cn(
                      "font-semibold text-sm select-none w-fit text-black",
                      {
                        "text-red-400": errors?.password?.type === "required",
                      }
                    )}
                  >
                    Old Password
                  </label>
                </div>

                <div
                  className={cn(
                    "focus-within:outline-[3px] flex selece-none border border-black/10 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[2px] outline-black/70",
                    {
                      "border-red-400": errors?.password?.type === "required",
                    }
                  )}
                >
                  <input
                    id="old-password"
                    type={passwordType}
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 24,
                    })}
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

                {watchAllFields.password.length > 24 && (
                  <span className="text-gray-500 text-xs">
                    Must be at most 24 characters long
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mb-3 flex gap-1 items-center justify-center text-white bg-black/90 hover:bg-black/80 transition-colors duration-150 cursor-pointer rounded-md w-full py-2.5 text-sm font-semibold"
              >
                Continue <ChevronRight size={16} />
              </button>

              <div className="w-full flex items-center justify-center font-[500] gap-1 text-sm">
                <span>Remember your password? </span>
                <Link
                  to="/login"
                  className="text-blue-600 underline cursor-pointer hover:text-blue-700 transition duration-150"
                >
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit((data) => {
            handleResetPassword(data);
            console.log(data);
          })}
          className="border -translate-y-15 border-black/10 w-[450px]  rounded-md px-6 py-4 bg-white"
        >
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col items-center justify-center gap-1">
              <h3 className="font-bold text-2xl">Change your password</h3>
              <p className="text-gray-500 text-sm">Enter your new password.</p>
            </div>

            <div className="gap-y-3 flex flex-col">
              <div className="flex flex-col gap-1.5">
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="new-password"
                    className={cn(
                      "font-semibold text-sm select-none w-fit text-black",
                      {
                        "text-red-400":
                          errors?.newPassword?.type === "required",
                      }
                    )}
                  >
                    New Password
                  </label>
                </div>

                <div
                  className={cn(
                    "focus-within:outline-[3px] flex selece-none border border-black/10 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[2px] outline-black/70",
                    {
                      "border-red-400":
                        errors?.newPassword?.type === "required",
                    }
                  )}
                >
                  <input
                    id="new-password"
                    type={passwordType}
                    {...register("newPassword", {
                      required: true,
                      minLength: 8,
                      maxLength: 24,
                    })}
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
                {watchAllFields.newPassword.length < 8 &&
                  watchAllFields.newPassword.length != 0 && (
                    <span className="text-gray-500 text-xs">
                      Must be at least 8 characters long
                    </span>
                  )}
                {watchAllFields.newPassword.length > 24 && (
                  <span className="text-gray-500 text-xs">
                    Must be at most 24 characters long
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mb-3 flex gap-1 items-center justify-center text-white bg-black/90 hover:bg-black/80 transition-colors duration-150 cursor-pointer rounded-md w-full py-2.5 text-sm font-semibold"
              >
                Reset Password
              </button>

              {/* <div className="w-full flex items-center justify-center font-[500] gap-1 text-sm">
                <span>Remember your password? </span>
                <Link to="/login" className="hover:underline ">
                  Back to login
                </Link>
              </div> */}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
