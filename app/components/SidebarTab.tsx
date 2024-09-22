"use client";

import { useState } from "react";
import { SidebarTabProps } from "../types";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const SidebarTab = ({ tab, values }: SidebarTabProps) => {
  const [open, setOpen] = useState(false);
  const openTab = (): void => {
    setOpen((val) => !val);
  };
  return (
    <div>
      <li
        className="flexBetween pt-4 border-b-[1px] border-[#e0e0e0] pb-3"
        key={tab}
      >
        <span className="text-[13px] font-bold text-[#242424]">{tab}</span>
        {values.length > 0 ? (
          !open ? (
            <ChevronRightIcon
              className="size-4 text-[#3a9691] font-bold "
              onClick={openTab}
            />
          ) : (
            <ChevronDownIcon
              className="size-4 text-[#3a9691] font-bold"
              onClick={openTab}
            />
          )
        ) : (
          ""
        )}
      </li>

      {open && (
        <div>
          {values.map((item) => (
            <p
              className="text-[#707070] text-[13px] pt-3 font-medium"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarTab;
