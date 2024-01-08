import React from "react";
import Addimage from "../assets/images/add-image.png";
import Attach from "../assets/images/clip.png";

const Input = () => {
    return (
      <div className="input bg-white p-2 h-[4rem] flex items-center justify-between">
        <input
          type="text"
          placeholder="Type Something..."
          className="w-full type-message"
        />
        <div className="send flex items-center gap-3">
          <img src={Attach} alt="attach-file" className="w-6 h-5 cursor-pointer" />
          <input type="text" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={Addimage} alt="add-image" className="w-12 cursor-pointer" id="file" />
          </label>
          <button className="px-4 py-2 text-white bg-emerald-600 cursor-pointer rounded-md">Send</button>
        </div>
      </div>
    );
}
 
export default Input;