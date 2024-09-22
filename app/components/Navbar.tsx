import {
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";


const Navbar = () => {
  return (
    <header className="py-4 px-3 bg-white fixed w-full ">
      <nav className="flexBetween px-3">
        <div className="flex items-center gap-3">
          <Bars3Icon className="size-6 text-gray-400" />
          <Image src={"/yummly.svg"} alt="logo" width={65} height={65} />
        </div>
        <div className="flex items-center gap-5 pr-[10]">
          <Image src={"/cart.svg"} alt="cart" width={25} height={25} />
          <MagnifyingGlassIcon className="size-6" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
