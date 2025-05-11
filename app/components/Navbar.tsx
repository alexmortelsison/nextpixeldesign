"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-[75%] bg-gray-500/20 backdrop-blur-sm rounded-full border border-gray-400">
        <div className="flex justify-between items-center px-16 py-4">
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              <p className="text-xl font-semibold text-[#28acff]">
                NextPixel Design
              </p>
            </div>
          </Link>
          <div className="lg:inline-flex space-x-6 hidden">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathName === link.href
                      ? "text-[#28acff] font-semibold"
                      : "text-gray-300 hover:underline underline-offset-8"
                  }
                >
                  <p>{link.name}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden md:inline-flex">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
