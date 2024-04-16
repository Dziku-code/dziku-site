"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLinks";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "HOME" },
  { url: "/about", title: "ABOUT" },
  { url: "/portfolio", title: "PORTFOLIO" },
  { url: "/contact", title: "CONTACT" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const linksVariants = {
    closed:{
      x:"100vw",
      transition: {
        duration: 0.5, // adjust the timing to suit your needs
        ease: "easeInOut",
      }
    },
    opened:{
      x:"0",
      transition: {
        duration: 0.5, // adjust the timing to suit your needs
        ease: "easeInOut",
      }
    }
  };


  return (
    /*LINKS*/
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 items-center xl:justify-center">
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
          <motion.div
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {/* Menu List */}
          <motion.div variants={linksVariants} initial="closed" animate={open ? "opened" : "closed"} className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex items-center flex-col justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.title}
                className="text-white no-underline hover:underline"
              >
                {link.title}
              </a>
            ))}
          </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
