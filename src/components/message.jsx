import React from "react";

const Message = () => {
    return (
      <div className="message owner flex gap-3 mb-[20px]">
        <div className="message-info flex flex-col text-gray-50">
          <img
            src="src\assets\images\dp.avif"
            alt="dp"
            className="w-[40px] h-[40px] rounded-full object-cover dp-img"
          />
          <span>Just Now</span>
        </div>
        <div className="message-content flex flex-col gap-2">
          <p className="bg-white py-2 px-4 hello-msg">hello</p>
          <img src="src\assets\images\dp.avif" alt="dp" />
        </div>
      </div>
    );
}
 
export default Message;