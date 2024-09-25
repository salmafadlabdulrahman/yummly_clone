"use client";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [mobileOpenSidebar, setMobileOpenSidebar] = useState(false);
  const sidebarToggle = () => {
    setMobileOpenSidebar(!mobileOpenSidebar);
  };

  const closeSidebar = () => {
    setMobileOpenSidebar(false);
  };
  return (
    <div className="relative">
      <header
        className={`py-4 px-3 bg-white ${
          mobileOpenSidebar ? "absolute " : "fixed"
        } w-full `}
      >
        <nav className="flexBetween px-3">
          <div className="flex items-center gap-3">
            <Bars3Icon
              className="size-6 text-gray-400 cursor-pointer"
              onClick={sidebarToggle}
            />
            <Image src={"/yummly.svg"} alt="logo" width={65} height={65} />
          </div>
          <div className="flex items-center gap-5 pr-[10]">
            <Image src={"/cart.svg"} alt="cart" width={25} height={25} />
            <MagnifyingGlassIcon className="size-6" />
          </div>
        </nav>

        <div
          className={`${mobileOpenSidebar ? "fixed inset-0 bg-black bg-opacity-50 z-[40]" : ""}`}
          onClick={closeSidebar}
        ></div>
      </header>
      {mobileOpenSidebar && (
        <div className="relative">
          <div className="absolute z-[50] top-0">
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
/*border-solid border-2 border-indigo-600 */
