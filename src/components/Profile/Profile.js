import React from "react";
import { GoLocation } from "react-icons/go";
import founder from "../../assets/founder.png";

const Profile = () => {
  const menu = [
    {
      id: 1,
      name: "Fahmi Ali Husni",
      address: "Malang, Indonesia",
      Icons: GoLocation,
      image: founder,
    },
  ];

  return (
    <div>
      {menu.map((item) => {
        const Icon = item.Icons;
        return (
          <div key={item.id}>
            <div className="avatar hero w-auto ">
              <div className=" w-28 rounded-full relative bottom-32">
                <img src={item.image} alt="" width={100} />
              </div>

              <div className=" pt-14">
                <h1 className=" text-2xl font-bold text-center pb-3 text-white">
                  {item.name}
                </h1>
                <div className="flex items-center justify-center text-white">
                  <Icon />
                  <h2 className="mx-1 ">{item.address}</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
