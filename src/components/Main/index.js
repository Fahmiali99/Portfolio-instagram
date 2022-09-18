import React from "react";
import Up from "../Background/Up";
import Body from "../Body/Body";
import Profile from "../Profile/Profile";

function index() {
  return (
    <div className=" flex justify-center h-screen w-screen">
      <div className=" md:w-2/5 w-screen bg-slate-800 ">
        <Up />
        <div className="p-10">
          <Profile />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default index;
