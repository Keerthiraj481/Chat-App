import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between bg-emerald-800 h-[5rem] px-4 py-4 text-slate-200">
      <span className="logo">Chat Hop</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pic"
          className="user-image bg-white h-[2rem] w-[2rem] rounded-full object-cover"
        />
        <span className="user">Keerthi</span>
        <button className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
