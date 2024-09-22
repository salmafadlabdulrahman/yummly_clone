import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
      <section>
        <div
          style={{
            backgroundImage: "url('/banner-marble-bkg.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
            width: "100vw",
          }}
          className="flex items-center justify-between"
        >
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
      </section>
  );
}
