import React from "react";

const Search = () => {
    return (
      <div className="search">
        <div className="search-form py-[10px] px-[10px]">
          <input type="text" placeholder="Search users..." className="search-input" />
        </div>
        <div className="user-chat">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic" className="w-[3rem] h-[3rem] rounded-full object-cover friend-img"
          />
          <div className="user-info">
            <span className="user-name">Jack</span>
          </div>
        </div>
      </div>
    );
}
 
export default Search;