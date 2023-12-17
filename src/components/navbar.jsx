import React from "react";

const Navbar = () => {
    return (
        <div className="navbar flex items-center justify-between bg-emerald-800 h-24 px-4 py-4 text-slate-200">
            <span className="logo">Social Hop</span>
            <div className="user">
                <img src="" alt="pic" />
                <span>Keerthi</span>
                <button>Logout</button>
            </div>
        </div>
    );
}
 
export default Navbar;