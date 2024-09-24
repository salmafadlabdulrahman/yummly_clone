"use client";

import Image from "next/image";
import { CuisineProps } from "../types";

const Cuisines = ({ img, title }: CuisineProps) => {
  return (
    <div className="">
      <div className="text-center w-[130px]">
        {" "}
        <Image
          src={`/cuisines/${img}`}
          alt="cuisine image"
          height={200}
          width={200}
          className="object-cover rounded-full aspect-square"
        />
        <span>{title}</span>
      </div>
    </div>
  );
};
export default Cuisines;