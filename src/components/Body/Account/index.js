import React from "react";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import web from "../../../assets/web.png";

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
    {
      id: 3,
      name: "Youtube",
      image: youtube,
      href: "https://www.youtube.com/channel/UCpuJBYMaQCZht85hw5N1CBw",
    },
    {
      id: 4,
      name: "Linkedin",
      image: linkedin,
      href: "https://www.linkedin.com/in/fahmialihusni/",
    },
    {
      id: 5,
      name: "GitHub",
      image: github,
      href: "https://github.com/Fahmiali99",
    },
    {
      id: 6,
      name: "Personal Website",
      image: web,
      href: "https://fahmiali.netlify.app/",
    },
  ];
  return (
    <div>
      <div>
        {menu.map((item) => (
          <a href={item.href} key={item.id}>
            <div className="p-1">
              <button class="btn btn-wide md:w-full sm:w-full flex justify-start">
                {/* <div className=" flex items-center"> */}
                <img src={item.image} alt="" width={21} />
                <h1
                  className="mx-3 text-white normal-case"
                  style={{ fontSize: "15px" }}
                >
                  {item.name}
                </h1>
                {/* </div> */}
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default index;
