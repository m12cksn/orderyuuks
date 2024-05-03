"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import { noto } from "@/app/fonts";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const menus = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/undangan",
      title: " Cetak",
    },
    {
      link: "/web",
      title: "Web ",
    },
    {
      link: "/khitan",
      title: " Khitan",
    },
    {
      link: "/kertas",
      title: "Kertas ",
    },
    {
      link: "/blog",
      title: "About",
    },
  ];

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <div className=" w-full  md:shadow-none  bg-background     z-40 ">
      <header className="md:rounded-lg  top-5   w-full ease-in-out duration-500  z-50">
        <nav className="2xl:max-w-7xl lg:pt-14  xl:max-w-6xl xl:px-4 lg:max-w-4xl  md:rounded-lg container flex justify-between items-center py-3 md:py-6 lg:py-6 px-6  md:px-8 lg:px-0">
          {/* ==== Menu Desktop ==== */}
          <div className="flex items-center gap-1">
            <Link href="/" className="">
              <Image
                className=" w-8 h-8  object-cover  bg-cover bg-center"
                src={"/image/logo.png"}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />
            </Link>
            <h1
              className={`${noto.className} text mt-1 font-bold text-primary text-2xl`}
            >
              <span className="text-slate-800">Order</span>Yuuks
            </h1>
          </div>
          <div className="lg:flex gap-14">
            <div className="lg:flex gap-7 hidden items-center">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  className=" text-slate-600 xl:font-medium hover:text-slate-900 ease-in-out duration-150 transition-all text-xl  md:text-[1.1rem]"
                  href={menu.link}
                >
                  <h1>{menu.title}</h1>
                </Link>
              ))}
            </div>
          </div>
          {/* ==== Menu Mobile ====  */}
          <div
            className="flex lg:hidden"
            onClick={handleSmallerScreenNavigation}
          >
            {/* {openIndexes.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
            {menuIcon ? (
              <IoCloseOutline
                size={28}
                className="text-textBase w-8 h-8 text-primary transition-all duration-500 ease-in-out"
              />
            ) : (
              <HiMenuAlt3
                size={28}
                className="text-textBase w-8 h-8 text-primary transition-all duration-500 ease-in-out"
              />
            )}
          </div>
          <div
            className={
              menuIcon
                ? "lg:hidden absolute top-[60px] right-0 bottom-0 z-50 left-0 flex justify-center items-start  w-[70%] h-screen bg-background text-slate-800 ease-in-out duration-500"
                : "lg:hidden absolute top-[60px] right-0 z-50  -left-[65rem] flex justify-center items-start  w-[70%] h-screen  bg-background text-slate-800 ease-in-out duration-500"
            }
          >
            <div className="w-full">
              <ul className=" font-extralight text-lg flex flex-col justify-center   ">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    onClick={handleSmallerScreenNavigation}
                    className="font-semibold bg-primary text-background hover:bg-background border-b-4 hover:text-primary pl-16 py-4 ease-in-out duration-150 transition-all"
                  >
                    <Link
                      className="    transition-all duration-300 ease-in-out "
                      href={menu.link}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
