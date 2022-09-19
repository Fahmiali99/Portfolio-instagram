import React from "react";
import About from "./About";
import Account from "./Account";

function Body() {
  const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full justify-center ">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? " bg-slate-600 text-white"
                      : "border bg-transparent")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> Sosmed
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? " bg-slate-600 text-white"
                      : "border bg-transparent")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <i className="fas fa-cog text-base mr-1"></i> About
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space ">
                  <div className=" w-full">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <Account />
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <About />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="">
      <Tabs color="pink" className=" bg-slate-500" />
    </div>
  );
}

export default Body;
