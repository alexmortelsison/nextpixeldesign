import Image from "next/image";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          className="object-cover h-full brightness-60 -z-50"
        />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroImage />
      </div>
    </div>
  );
}
