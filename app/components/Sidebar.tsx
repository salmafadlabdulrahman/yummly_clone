import Image from "next/image";
import CustomButton from "./CustomButton";
import { footerTabs, sidebarTabs } from "../data/index";
import SidebarTab from "./SidebarTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const tabs = [];
  const tabsContent = [];

  for (const [key, val] of Object.entries(sidebarTabs)) {
    tabs.push(key);
    tabsContent.push(val);
  }

  return (
    <div className="bg-white w-[210px] ">
      <div className="text-center flexCol pt-9">
        <Image src={"/yummly.svg"} alt="logo" width={80} height={80} />
        <CustomButton text="Sign Up / Log In" background="#3a9691" />

        <div className={`mt-3 h-[420px] overflow-auto`}>
          <ul className="text-left">
            {tabs.map((tab, index) => (
              <div className="border-b-[1px] border-[#e0e0e0]" key={tab}>
                <SidebarTab tab={tab} values={tabsContent[index]} />
              </div>
            ))}
          </ul>
        </div>

        <div className="bg-[#f5f5f5]">
          <ul className="text-left  p-3">
            {footerTabs.map((item) => (
              <li
                key={item}
                className="text-[#707070] text-[11px] mt-[4px] cursor-pointer hover:text-[#3a9691]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flexBetween px-3" style={{ color: "#707070" }}>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-[12px] hover:text-[#3a9691] "
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="w-[13px] hover:text-[#3a9691]"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[13px] hover:text-[#3a9691]"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-[19px] hover:text-[#3a9691]"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="w-[13px] hover:text-[#3a9691]"
            />
          </div>

          <span className="text-[10px] mt-2 text-[#707070]">
            ®/™©2024 Yummly. All rights reserved.
          </span>
          <p className="flex items-center pl-3 text-[#707070] text-[10px]">
            Part of{" "}
            <Image
              alt="partner logo"
              src={"/whirlpool-logo.webp"}
              width={75}
              height={75}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;