import React from "react";
import { noto } from "@/app/fonts";

const contents = [
  {
    img: "/image/product/website.webp",
    title: "Undangan Website",
  },
  {
    img: "/image/product/undangan.png",
    title: "Undangan Cetak",
  },
  {
    img: "/image/product/khitan.png",
    title: "Undangan Khitan",
  },
  {
    img: "/image/product/kertas.png",
    title: "Undangan Kertas",
  },
  {
    img: "/image/product/aqiqah.png",
    title: "Undangan Aqiqah",
  },
  {
    img: "/image/product/ultah.png",
    title: "Undangan Ultah",
  },
];

const products = () => {
  return (
    <div className="mt-5 md:grid grid-cols-2 gap-5 xl:grid-cols-3 ">
      {contents.map((content, index) => (
        <div
          key={index}
          className="card bg-white hover:-translate-y-2 hover:rotate-2 transition-all ease-in-out duration-300 mt-5 md:mt-0 bg-base-100 shadow-xl rounded-lg"
        >
          <figure className="flex justify-center p-5 h-72">
            <img
              src={content.img}
              alt="Shoes"
              className="max-w-xs drop-shadow-2xl"
            />
          </figure>
          <div className="card-body p-3 bg-primary">
            <h2
              className={`${noto.className} card-title text-center text-2xl font-bold text-background`}
            >
              {content.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default products;
