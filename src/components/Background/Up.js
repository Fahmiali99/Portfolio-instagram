import React from "react";
import up from "../../assets/up.png";

const Up = () => {
  return (
    <div
      className=" w-full bg-cover h-32 relative rounded-b-3xl ... "
      style={{ backgroundImage: `url(${up})` }}
    >
      <div className="w-full h-32 bg-black opacity-10 relative rounded-b-3xl ... "></div>
    </div>
  );
};

export default Up;
