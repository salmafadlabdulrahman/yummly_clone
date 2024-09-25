import Image from "next/image";
import "./globals.css";
import Cuisines from "./components/Cuisines";
import { cuisinesData } from "./data";

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
        className=""
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
            className="lg:absolute right-0 top-0"
          />
        </div>
        <div className="mt-[3em] flex flex-col">
          {" "}
          <div className="text-center lg:absolute left-[620px]">
            <h4 className="uppercase text-[12px] text-[#707070]">
              Personalize Your Experience
            </h4>
            <h2 className="text-[#4a4a4a] font-bold text-[1.3em] lg:text-[2em]">
              What are your favorite cuisines?
            </h2>
          </div>
          <section className="flex items-center gap-4 mt-10 lg:mt-[7em] pl-5 overflow-x-scroll hide-scrollbar relative">
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
