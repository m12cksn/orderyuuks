import React from "react";
import { noto } from "@/app/fonts";

const contents = [
  {
    img: "/image/whyus/guest.svg",
    title: "Custom Nama Tamu",
    desc: "Selayaknya undangan fisik, satu tamu akan mendapatkan satu undangan",
  },
  {
    img: "/image/whyus/content.svg",
    title: "Konten Lengkap",
    desc: "Terdapata Link, gambar, Musik Map yang membuat undangan menarik",
  },
  {
    img: "/image/whyus/payment.svg",
    title: "Harga Terjangkau",
    desc: "OrderYuuk !!Menawarkan harga menarik untuk kualitas yang terbaik",
  },
  {
    img: "/image/whyus/story.svg",
    title: "Story & Quotes",
    desc: "Ceritakan perjalanan percintaan anda sampai akhirnya anda menikah",
  },
  {
    img: "/image/whyus/print.svg",
    title: "Kualitas Cetak",
    desc: "Kami menggunakan mesin terbaik sehingga kualitas undngan terjamin",
  },
  {
    img: "/image/whyus/order.svg",
    title: "Minimal Order",
    desc: "Tidak ada minimal order pembuatan undangan web maupun cetak",
  },
];

const whyUs = () => {
  return (
    <div className="mt-5 md:grid grid-cols-2 gap-5 2xl:grid-cols-3 ">
      {contents.map((content, index) => (
        <div
          key={index}
          className="card bg-white mt-5 md:mt-0 bg-base-100 shadow-xl rounded-lg"
        >
          <figure className="flex justify-center p-5 h-72">
            <img src={content.img} alt="Shoes" className="max-w-xs" />
          </figure>
          <div className="card-body p-3 bg-secondary">
            <h2
              className={`${noto.className} card-title text-2xl font-bold text-slate-900`}
            >
              {content.title}
            </h2>
            <div className="card-actions justify-end py-2">
              <h1 className="badge badge-outline text-slate-800 leading-relaxed">
                {content.desc}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default whyUs;
