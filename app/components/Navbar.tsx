"use client";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="relative">
      <header
        className={`py-4 px-3 bg-white ${
          openSidebar ? "absolute " : "fixed"
        } w-full `}
      >
        <nav className="flexBetween px-3">
          <div className="flex items-center gap-3">
            <Bars3Icon
              className="size-6 text-gray-400 cursor-pointer"
              onClick={() => setOpenSidebar((val) => !val)}
            />
            <Image src={"/yummly.svg"} alt="logo" width={65} height={65} />
          </div>
          <div className="flex items-center gap-5 pr-[10]">
            <Image src={"/cart.svg"} alt="cart" width={25} height={25} />
            <MagnifyingGlassIcon className="size-6" />
          </div>
        </nav>
      </header>
      {openSidebar && (
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