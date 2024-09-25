import Image from "next/image";
import "./globals.css";
import Cuisines from "./components/Cuisines";
import { cuisinesData } from "./data";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/banner-marble-bkg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
          width: "100vw",
        }}
      >
        {" "}
        <div className="flex items-center justify-between">
          <Image
            alt="strawberries bowl"
            src={"/strawberry-grain.webp"}
            width={170}
            height={100}
          />
          <Image
            alt="blue berries bowl"
            src={"/img-fruit-bowl.webp"}
            width={210}
            height={200}
            className="absolute right-0 lg:top-0"
          />
          <Image src={"/img-strawberry.webp"} alt="strawberry" width={100} height={100} className="absolute right-[50px] top-[150px]" />
        </div>
        <div className="mt-[3em] md:mt-0 lg:mt-0 flex flex-col">
          <Hero />
          <section className="flex items-center gap-4 mt-10 md:mt-[2em] lg:mt-3 pl-5 overflow-x-scroll hide-scrollbar relative">
            {" "}
            {cuisinesData.map((cuisine) => (
              <div key={cuisine[0]}>
                <Cuisines img={cuisine[0]} title={cuisine[1]} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
