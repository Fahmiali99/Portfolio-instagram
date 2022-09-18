import React from "react";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";

function index() {
  const menu = [
    {
      id: 1,
      name: "Instagram",
      image: instagram,
      href: "https://www.instagram.com/fahmi_ali13/",
    },
    {
      id: 2,
      name: "Facebook",
      image: facebook,
      href: "https://www.facebook.com/LARE.USING.13/",
    },
  ];
  return (
    <div>
      <div>
        {menu.map((item) => (
          <a href={item.href} key={item.id}>
            <div className="p-1">
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full ">
                <div className=" flex items-center">
                  <img src={item.image} alt="" width={30} />
                  <h1 className="mx-3 " style={{ fontSize: "18px" }}>
                    {item.name}
                  </h1>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default index;
