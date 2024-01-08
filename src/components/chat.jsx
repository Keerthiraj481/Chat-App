import React from "react";
import cam from "../assets/images/videocam.png";
import add from "../assets/images/add-user.png";
import more from "../assets/images/more.png";
import Messages from "./messages";
import Input from "./input";

const Chat = () => {
    return (
      <div className="chat">
        <div className="chat-info flex items-center justify-between h-[5rem] bg-emerald-400 px-4 py-4">
          <span className="user-name">Jack</span>
          <div className="chat-icons flex justify-center items-center gap-2">
            <img src={cam} alt="" className="w-6" />
            <img src={add} alt="" className="w-6" />
            <img src={more} alt="" className="w-6" />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    );
}
 
export default Chat;