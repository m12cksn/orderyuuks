import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";
import { noto } from "@/app/fonts";

const Footer = () => {
  const medias = [
    { name: AiFillFacebook },
    { name: FaWhatsappSquare },
    { name: MdMarkEmailUnread },
    { name: TbWorldWww },
  ];
  return (
    <div className="bg-primary">
      <div className="max-w-xl md:max-w-4xl  lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl lg:container px-5 mx-auto pt-10 md:flex gap-16 justify-evenly items-start">
        <div className="basis-1/3">
          <h1
            className={`${noto.className} text-slate-900 text-3xl font-semibold`}
          >
            {" "}
            Order<span className="text-background">Yuuks,</span>
          </h1>

          <div className="flex gap-5 mt-5 items-start ">
            {medias.map((media, index) => (
              <div key={index}>
                <media.name className="text-third text-3xl bg-white shadow p-1 w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
        <div className=" basis-1/3">
          <h1 className="text-slate-800 font-semibold  text-xl mb-1">
            Get in Touch
          </h1>
          <p className="text-slate-700 md:text-justify">
            Cilacap - Jawa Tengah, Indonesia
          </p>
          <div className="mt-5">
            <p className="text-slate-700">orderyuuks@gmail.com</p>
            <p className="text-slate-700">+62857-2632-1786</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0 basis-1/3">
          <h1 className="text-slate-800 font-semibold  text-xl">Learn More</h1>
          <div className="flex flex-col gap-2 mt-1">
            <Link href="/" className="text-slate-700">
              Home
            </Link>
            <Link href="/" className="text-slate-700">
              Undangan
            </Link>
            <Link href="/" className="text-slate-700">
              Undangan Web
            </Link>
            <Link href="/" className="text-slate-700">
              Undangan Kertas
            </Link>
            <Link href="/" className="text-slate-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className=" max-w-xl md:max-w-4xl  lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl lg:container px-5 mx-auto pb-10 ">
        <h1 className="text-slate-800 font-semibold  text-xl mb-3">
          Our Newsletter
        </h1>
        <h2 className="text-slate-700">
          Subscribe to our newsletter to get our news & deals delivered to you.
        </h2>
        <div className="flex rounded-lg overflow-hidden drop-shadow-md mt-5">
          <input
            type="text"
            placeholder="E-mail Address"
            id="large-input"
            className="block w-full p-3 text-gray-900 bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500 "
          ></input>
          <button
            className="bg-third text-slate-50 font-semibold px-7"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      <hr className="my-6 container border-solid border-x-8 border-third sm:mx-auto  lg:my-8" />
      <span className="block pb-5 text-sm text-gray-700 text-center ">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          OrderYuuks
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
