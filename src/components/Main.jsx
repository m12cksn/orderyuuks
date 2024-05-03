import React from "react";
import Image from "next/image";
import { noto } from "@/app/fonts";

const Main = () => {
  return (
    <div className="max-w-md  md:max-w-3xl lg:py-8 xl:py-16 lg:max-w-4xl lg:flex gap-5 xl:gap-0 items-center mx-auto sm:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl bg-background px-6 md:px-0 sm:px-10">
      <div className="md:px-10  lg:px-0 md:max-w-2xl mx-auto basis-[45%]">
        <h1 className="text-slate-800 pt-10 lg:pt-0 xl:text-5xl xl:leading-tight text-3xl font-semibold">
          Berbagi Momen Sakral ngga harus{" "}
          <span className="text-primary">Mahal !!</span>
        </h1>
        <h3 className=" pt-5 xl:text-lg text-justify leading-relaxed">
          Ingat
          <span
            className={`${noto.className} text-slate-900 text-lg font-semibold`}
          >
            {" "}
            Order<span className="text-primary">Yuuks,</span>
          </span>{" "}
          menerima pembuatan undangan website maupun undangan cetak, cocok untuk
          anda yang ingin berbagi kebahagiaan tanpa takut mahal.
        </h3>
        <div className="md:flex gap-6 mt-4 xl:mt-7">
          <div className="w-full group hover:bg-pink-500 bg-primary  flex justify-center py-3 md:py-5 rounded-md shadow-md ease-in-out transition-all duration-300">
            <button className=" font-semibold lg:text-sm">Buat Undangan</button>
          </div>
          <div className="w-full mt-5 md:mt-0 lg:mt-0 group hover:bg-pink-500 bg-slate-100 text-slate-900 flex justify-center py-3 md:py-5 rounded-md shadow-md ease-in-out transition-all duration-300">
            <button className=" font-semibold lg:text-sm">
              Konsultasi dengan kami
            </button>
          </div>
        </div>
      </div>
      <Image
        className="mt-10   xl:pl-3 pb-10 drop-shadow-lg w-full lg:max-w-md xl:max-w-xl 2xl:max-w-3xl basis-[45%] object-cover object-top mx-auto "
        src={"/image/hero.webp"}
        alt="..."
        width={500}
        height={500}
        priority={true}
      />
    </div>
  );
};

export default Main;
