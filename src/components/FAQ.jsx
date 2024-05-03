"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { noto } from "@/app/fonts";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const accordionData = [
    {
      id: 1,
      question: "Apa saja yang perlu di siapkan ?",
      answer:
        "Anda perlu menyiapkan data yang diperlukan, semisal nama, nama orang tua, tanggal acara dan sebagainya. ",
    },
    {
      id: 2,
      question: "bagaimana cara pemesanannya ?",
      answer:
        "Cukup mengklik tombol whatsapp yang ada di kanan bawah, kemudian isi form yang muncul.",
    },
    {
      id: 3,
      question: "Apakah refrensi untuk memilih undangan yang cocok?",
      answer:
        "Diwebsite ini anda bisa melihat thema yang cocok dengan selera dan kebutuhan anda.",
    },
    {
      id: 4,
      question: "Apakah saya bisa memesan paket sekaligus ?",
      answer:
        "sangat bisa, dan akan ada diskon ketika anda memesan semua sekaligus",
    },
    {
      id: 5,
      question: "Berapa lama undangan website saya bisa  online ?",
      answer: "Undangan anda akan online 1 x 24 jam dari waktu pembayaran",
    },
    {
      id: 6,
      question: "Sampe berapa lama undangan saya akan tersedia secara online?",
      answer:
        "Undangan anda akan tersedia secara online minimal 1 tahun kedepan",
    },
    {
      id: 7,
      question:
        "apakah saya bisa mengganti data setelah undangan saya online ?",
      answer:
        "Sangat bisa, anda bisa mengganti data undangan anda sampe 24 jam sebelum resepsi",
    },
    {
      id: 8,
      question: "Apakah saya bisa konsultasi dulu sebelum membeli ?",
      answer:
        "Sangat bisa, kita siap melayani anda walaupun belum tentu membeli ke kami",
    },
    {
      id: 9,
      question: "Apakah ada minimal order untuk undangan cetak ?",
      answer:
        "untuk undangan dengan foto kami memiliki minimal order yakni 100pcs, untuk undangan tanpa foto tidak ada minimal order",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };
  return (
    <section className="bg-white w-full pb-10 ">
      <div className="max-w-md  md:max-w-3xl lg:py-8 xl:py-16 lg:max-w-4xl xl:gap-0 items-center mx-auto sm:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl  px-6 md:px-0 sm:px-10">
        <div className="xl:mb-7">
          <h1 className="text-slate-800 text-center pt-10 lg:pt-0 xl:text-5xl leading-relaxed xl:leading-tight text-3xl font-semibold">
            Pertanyaan Umum di{" "}
            <span
              className={`${noto.className} text-slate-900  font-bold xl:text-5xl xl:leading-tight text-4xl `}
            >
              {" "}
              Order
              <span className="text-primary xl:text-5xl xl:leading-tight text-4xl font-bold">
                Yuuk!
              </span>
            </span>{" "}
          </h1>
        </div>
        <div className=" md:px-10 md:max-w-3xl xl:max-w-6xl xl:py-2 lg:grid  gap-5  mx-auto">
          {accordionData.map((data, index) => (
            <div className="pt-3 lg:pt-0 shadow mt-2" key={index}>
              <div
                className="bg-white  py-3 lg:pt-3 lg:pb-5 px-2 lg:px-3 xl:px-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <p className="text-sm lg:text-base font-medium xl:text-xl">
                  {data.question}
                </p>
                <div className="">
                  {openIndexes.includes(index) ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </div>
              </div>
              <Collapse isOpened={openIndexes.includes(index)}>
                <div className="bg-slate-50 py-3 text-slate-600 lg:px-3 xl:px-5 lg:text-lg shadow-lg px-2 tracking-wide pb-5 text-xs leading-normal text-justify">
                  {data.answer}
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
