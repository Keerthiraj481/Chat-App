import React from "react";
import loginpic from "../assets/images/sign-in.avif";

const Login = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-row justify-center items-center w-full">
            <img src={loginpic} alt="log-in" className="" />
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="font-roboto font-extrabold text-3xl mb-2">
                  Hello, <br /> <span>Welcome Back</span>
                </div>
                <div className="login-name px-[6rem] py-[2rem] bg-violet-600 text-white font-extrabold rounded-lg">
                  LOGIN
                </div>
              </div>
              <main className="flex flex-col justify-center items-center">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      label="email"
                      className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      label="password"
                      className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </div>
                  <button
                    className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... px-6 font-bold login-btn ml-[5rem]"
                    type="submit"
                    variant="gradient"
                  >
                    LOGIN
                  </button>
              </main>
              <div className="-my-4">
                <div className="flex flex-col justify-center items-center">
                  Don't have an account?
                    <div className="font-bold register mx-2">Register</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
