import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function HeroImage() {
  return (
    <div>
      <div className="flex flex-col space-x-4">
        <div className="bg-gray-500/20 backdrop-blur-sm rounded-xl border border-gray-400 mt-16 w-[5%] lg:hidden">
          A
        </div>
        <div className="bg-gray-500/20 backdrop-blur-sm rounded-xl border border-gray-400 mt-16 w-[75%] h-[75%] mx-auto py-4 px-16">
          <div className="flex max-w-4xl mx-auto justify-between items-center">
            <p className="text-3xl font-semibold">Design at its best.</p>
            <div>
              <p className="text-lg">
                <Link href={"/"}>Learn More.</Link>
              </p>
            </div>
          </div>
          <div className="pt-4">
            <Image
              src={"/house.png"}
              alt="heroimage"
              width={400}
              height={400}
              className="object-cover rounded-2xl w-full pb-8"
            />
          </div>
        </div>
        <div className="bg-gray-500/20 backdrop-blur-sm rounded-xl border border-gray-400 mt-8 w-[75%] h-[75%] mx-auto py-4 px-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl">See more</p>
            </div>
            <div>
              <BsArrowUpRightCircle size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
