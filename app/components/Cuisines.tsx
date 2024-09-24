"use client";

import Image from "next/image";
import { CuisineProps } from "../types";

const Cuisines = ({ img, title }: CuisineProps) => {
  return (
    <div className="">
      <div className="border w-[130px]">
        <Image src={`/cuisines/${img}`} alt="cuisine image" height={100} width={120} className="m-auto" />
        <span>{title}</span>
      </div>
    </div>
  );
};
export default Cuisines;