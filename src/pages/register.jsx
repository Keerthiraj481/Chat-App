import React from "react";
import registerpic from "../assets/images/sign-in.avif";
import logo from "../assets/images/sh-logo.png";
import addprofile from "../assets/images/addprofile-img.png";

const Register = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-300 to-orange-100 ... w-[70%] h-auto mt-[5rem] rounded-3xl shadow-2xl">
        <div className="flex flex-col justify-center items-center py-[4rem]">
          <div className="flex flex-row ">
            <img
              src={registerpic}
              alt="register-pic"
              className="w-[35rem] h-[25rem] rounded-xl mt-[1.5rem] mr-12 "
            />
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="font-roboto font-extrabold text-2xl mb-2">
                  Welcome to,
                  <br />{" "}
                  <img src={logo} alt="logo" className="w-[14rem] h-[4.5rem]" />
                </p>
                <p className="register-name px-[3.8rem] py-[1rem] bg-gradient-to-r from-cyan-500 to-blue-500 ... text-white font-extrabold rounded-lg">
                  REGISTER
                </p>
              </div>
              <main className="flex flex-col justify-center items-center">
                <div>
                  <input
                    type="text"
                    name="name"
                    label="name"
                    className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    label="email"
                    className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    label="password"
                    className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input type="file" id="file" className="addprofile-img" />
                  <label
                    htmlFor="file"
                    className="flex gap-2 items-center cursor-pointer font-semibold mr-[7rem] pt-2"
                  >
                    <img
                      src={addprofile}
                      alt="add-profile"
                      className="w-8 h-8"
                    />
                    <span className="pl-3">Add a Profile</span>
                  </label>
                </div>
                <button
                  className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-sky-800 hover:to-rose-500 ... px-6 font-bold login-btn"
                  type="submit"
                  variant="gradient"
                >
                  REGISTER
                </button>
              </main>
              <div>
                <p className="flex flex-col justify-center items-center">
                  Already have an account?
                  <div className="text-fuchsia-950 font-bold register mx-2">
                    Login
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
