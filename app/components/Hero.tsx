"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  //const [searchField, setSearchField] = useState("");
  return (
    <div className="lg:w-[80%]">
      <div className="text-center lg:max-w-[630px] lg:w-[100%] lg:m-auto">
        <div className="hidden lg:flex items-center bg-white w-[100%] h-[55px] rounded-full cursor-pointer shadow-lg shadow-gray-500/40">
          <MagnifyingGlassIcon className="size-6 ml-3" />
          <input
            type="text"
            placeholder="Search 2M+ Recipes"
            className="outline-none ml-3 w-[90%]"
          />
        </div>
        <div className="mt-10">
          <h4 className="uppercase text-[12px] text-gray">
            Personalize Your Experience
          </h4>
          <h2 className="text-[#4a4a4a] font-bold text-[1.3em] lg:text-[2em] md:text-[2em]">
            What are your favorite cuisines?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;