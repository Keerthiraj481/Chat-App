import React from "react";
import SideBar from "../components/sidebar";
import Chat from "../components/chat";

const Home = () => {
    return (
        <div className="bg-sky-400 h-screen flex items-center justify-center">
            <div className="rounded-xl container-home">
                <SideBar />
                <Chat />
            </div>
        </div>
    );
}
 
export default Home;