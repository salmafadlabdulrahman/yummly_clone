"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [searchField, setSearchField] = useState("");
  return (
    <div className="">
      <div className="text-center lg:absolute left-[620px]">
        <div className="hidden lg:flex items-center absolute bottom-[110px] right-[-70px] bg-white w-[650px] h-[55px] rounded-full cursor-pointer shadow-lg shadow-gray-500/40">
          <MagnifyingGlassIcon className="size-6 ml-4" />
          <input
            type="text"
            placeholder="Search 2M+ Recipes"
            className="outline-none ml-3"
          />
        </div>
        <h4 className="uppercase text-[12px] text-gray">
          Personalize Your Experience
        </h4>
        <h2 className="text-[#4a4a4a] font-bold text-[1.3em] lg:text-[2em]">
          What are your favorite cuisines?
        </h2>
      </div>
    </div>
  );
};

export default Hero;
/*box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
