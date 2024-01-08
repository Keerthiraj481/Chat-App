import React from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Chats from "../components/chats";


const SideBar = () => {
    return (
        <div className="sidebar">
            <Navbar />
            <Search />
            <Chats />
        </div>
    );
}
 
export default SideBar;