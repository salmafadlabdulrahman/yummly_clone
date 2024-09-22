import Image from "next/image";
import CustomButton from "./CustomButton";
import { sidebarTabs } from "../data/index";
import SidebarTab from "./SidebarTab";

const Sidebar = () => {
  const tabs = [];
  const tabsContent = [];
  for (const [key, val] of Object.entries(sidebarTabs)) {
    tabs.push(key);
    tabsContent.push(val)
  }

  return (
    <div className="bg-white w-[210px] ">
      <div className="text-center flexCol pt-9">
        <Image src={"/yummly.svg"} alt="logo" width={80} height={80} />
        <CustomButton text="Sign Up / Log In" background="#3a9691" />

        <div className="mt-3">
          <ul className="text-left">
            {tabs.map((tab, index) => (
              <SidebarTab key={tab} tab={tab} values={tabsContent[index]} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;