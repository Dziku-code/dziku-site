"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links = [
  { url: "/", title: "HOME" },
  { url: "/about", title: "ABOUT" },
  { url: "/portfolio", title: "PORTFOLIO" },
  { url: "/contact", title: "CONTACT" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    /*LINKS*/
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <a
            href={link.url}
            key={link.title}
            className="text-white no-underline hover:underline"
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 items-center justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-mono font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Dzik</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* Socials */}
      <div className="hidden lg:flex gap-4 w-1/3 justify-end">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/twitch.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex items-center flex-col justify-center gap-8 text-4xl ">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.title}
                className="text-white no-underline hover:underline"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
