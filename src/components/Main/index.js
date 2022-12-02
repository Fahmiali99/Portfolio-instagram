import React from "react";
import Up from "../Background/Up";
import Body from "../Body/Body";
import Profile from "../Profile/Profile";

function index() {
  return (
    <div
      className=" flex justify-center h-auto w-full "
      style={{ background: "#2a303c" }}
    >
      <div className=" md:w-2/5 w-screen  ">
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
