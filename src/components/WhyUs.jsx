import React from "react";
import { noto } from "@/app/fonts";
import Content from "@/components/Card/content";

const WhyUs = () => {
  return (
    <div className="w-full bg-slate-100 pb-7">
      <div className="max-w-md  md:max-w-3xl lg:py-8 xl:py-16 lg:max-w-4xl xl:gap-0 items-center mx-auto sm:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl bg-slate-100 px-6 md:px-0 sm:px-10">
        <div className="">
          <h1 className="text-slate-800 text-center pt-10 lg:pt-0 xl:text-5xl leading-relaxed xl:leading-tight text-3xl font-semibold">
            Kenapa Memilih{" "}
            <span
              className={`${noto.className} text-slate-900  font-bold xl:text-5xl xl:leading-tight text-4xl `}
            >
              {" "}
              Order
              <span className="text-primary xl:text-5xl xl:leading-tight text-4xl font-bold">
                Yuuks!
              </span>
            </span>{" "}
          </h1>
          <h2 className="mt-3 text-slate-600 text-justify lg:text-lg lg:text-center">
            Berikut beberapa Fitur terbaik dan keuntungan ketika kamu memilih
            OrderYuuk untuk kebutuhan undanganmu
          </h2>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default WhyUs;
