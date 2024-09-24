"use client";

import Image from "next/image";
import { CuisineProps } from "../types";

const Cuisines = ({ img, title }: CuisineProps) => {
  return (
    <div className="">
      <div className="text-center w-[130px]">
        {" "}
        <div className="relative">
          <Image
            src={`/cuisines/${img}`}
            alt="cuisine image"
            height={200}
            width={200}
            className="object-cover rounded-full aspect-square"
          />
          <div className="overlay bg-[#000000] bg-opacity-35 absolute bottom-0 w-[130px] h-[130px] object-cover rounded-full aspect-square"></div>
          <div className="flex justify-center">
            <span className="absolute text-center top-[57px] text-white uppercase text-[12px] font-semibold tracking-wider">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cuisines;
