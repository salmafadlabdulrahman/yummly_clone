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
  const tabsContent:string[][] = [];

  for (const [key, val] of Object.entries(sidebarTabs)) {
    tabs.push(key);
    tabsContent.push(val);
  }

  return (
    <div className="bg-white w-[210px]">
      <div className="text-center flexCol pt-9">
        <Image src={"/yummly.svg"} alt="logo" width={80} height={80} />
        <CustomButton text="Sign Up / Log In" background="#3a9691" height={41} width={180} />

        <div className={`mt-3 h-[390px] overflow-auto`}>
          <ul className="text-left">
            {tabs.map((tab, index) => (
              <div className="border-b-[1px] border-[#e0e0e0]" key={tab}>
                <SidebarTab tab={tab} values={tabsContent[index]} />
              </div>
            ))}
          </ul>
        </div>

        <div className="bg-[#f5f5f5]">
          <ul className="text-left p-3">
            {footerTabs.map((item) => (
              <li
                key={item}
                className="text-[#707070] text-[11px] mt-[4px] cursor-pointer hover:text-green"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flexBetween px-3" style={{ color: "#707070" }}>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-[12px] hover:text-green"
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="w-[13px] hover:text-green"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[13px] hover:text-green"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-[19px] hover:text-green"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="w-[13px] hover:text-green"
            />
          </div>

          <span className="text-[10px] mt-2 text-gray">
            ®/™©2024 Yummly. All rights reserved.
          </span>
          <p className="flex items-center pl-3 text-gray text-[10px]">
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