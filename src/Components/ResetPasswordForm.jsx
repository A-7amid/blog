import { useState } from "react";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export const ResetPasswordForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-1 h-full items-center justify-center font-sans bg-slate-50">
      {!isSuccess ? (
        <form className="border border-black/10 -translate-y-15 w-[26%] rounded-md px-6 py-4 bg-white">
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
                  className="font-semibold text-sm w-fit select-none"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  className="border border-black/10 transition-colors duration-1000 rounded-md px-3 py-2 text-sm font-semibold outline-offset-[5px] outline-black/35"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="old-password"
                    className="font-semibold text-sm select-none"
                  >
                    Old Password
                  </label>
                </div>

                <div className="border border-black/10 gap-1 flex rounded-md px-3 py-2 text-sm font-semibold focus-within:outline-[3px] outline-offset-[3px] outline-black/35">
                  <input
                    id="old-password"
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
              </div>
            </div>

            <div>
              <button className="mb-3 flex gap-1 items-center justify-center text-white bg-black/90 hover:bg-black/80 transition-colors duration-150 cursor-pointer rounded-md w-full py-2.5 text-sm font-semibold">
                Continue <ChevronRight size={16} />
              </button>

              <div className="w-full flex items-center justify-center font-[500] gap-1 text-sm">
                <span>Remember your password? </span>
                <Link to="/login" className="hover:underline ">
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form className="border -translate-y-15 border-black/10 w-[26%] rounded-md px-6 py-4 bg-white">
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
                    className="font-semibold text-sm select-none"
                  >
                    New Password
                  </label>
                </div>

                <div className="border border-black/10 gap-1 flex rounded-md px-3 py-2 text-sm font-semibold focus-within:outline-[3px] outline-offset-[3px] outline-black/35">
                  <input
                    id="new-password"
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
              </div>
            </div>

            <div>
              <button className="mb-3 flex gap-1 items-center justify-center text-white bg-black/90 hover:bg-black/80 transition-colors duration-150 cursor-pointer rounded-md w-full py-2.5 text-sm font-semibold">
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
