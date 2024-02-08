import React from "react";
import { Accordion } from "../../atoms";
import WAIcon from "../../../assets/whatsapp.svg";
const PriceFAQ = () => {
  return (
    <section className="section-break wrapper">
      <div className="container">
        <p className="text-center desc text-primary md:font-bold">
          Frequently Asked Questions (FAQ)
        </p>
        <h1 className="mt-3 main-heading-2 text-center">
          {" "}
          Apa Saja Paket harga yang tersedia untuk Caqap Omnichannel Chat?
        </h1>

        <p className="py-4 desc text-center text-[14px] md:text-[17px]">
          Kami menawarkan paket harga yang fleksibel untuk memenuhi berbagai
          kebutuhan bisnis, mulai dari paket Starter hingga paket Enterprise.
          Paket kami dikelompokkan berdasarkan skala operasi Anda dan
          fitur-fitur yang Anda perlukan.
        </p>
        <div className="flex justify-center">
          <button className="btn bg-primary text-white gap-2 font-bold mt-6 w-full md:w-auto">
            <img src={WAIcon} alt="whatsapp" />
            KONSULTASI GRATIS
          </button>
        </div>

        <div className="mt-[40px] md:mt-[80px]">
          <div className="py-[12px]">
            <Accordion
              title={
                <span className="font-bold text-[17px]">
                  Bagaimana aplikasi CRM Caqap dapat menguntungkan tim sales
                  perusahaan?
                </span>
              }
            >
              <p className="desc text-[14px] md:text-[17px]">
                {" "}
                Aplikasi CRM Caqap dapat memberdayakan tim sales Anda dengan
                menyediakan platform terpusat untuk mengelola prospek, melacak
                interaksi pelanggan, dan memantau sales pipeline. Ini membantu
                memprioritaskan tugas, otomatisasi tindak lanjut, dan pada
                akhirnya meningkatkan efisiensi, tingkat konversi prospek yang
                lebih baik, serta meningkatkan pendapatan.
              </p>
            </Accordion>
          </div>
          <div className="py-[12px]">
            <Accordion
              title={
                <span className="font-bold text-[17px]">
                  Apa fungsi CRM bagi perusahaan?
                </span>
              }
            >
              <p className="desc text-[14px] md:text-[17px]">
                {" "}
                Aplikasi CRM Caqap dapat memberdayakan tim sales Anda dengan
                menyediakan platform terpusat untuk mengelola prospek, melacak
                interaksi pelanggan, dan memantau sales pipeline. Ini membantu
                memprioritaskan tugas, otomatisasi tindak lanjut, dan pada
                akhirnya meningkatkan efisiensi, tingkat konversi prospek yang
                lebih baik, serta meningkatkan pendapatan.
              </p>
            </Accordion>
          </div>
          <div className="py-[12px]">
            <Accordion
              title={
                <span className="font-bold text-[17px]">
                  Apa itu CRM Omnichannel?
                </span>
              }
            >
              <p className="desc text-[14px] md:text-[17px]">
                {" "}
                Aplikasi CRM Caqap dapat memberdayakan tim sales Anda dengan
                menyediakan platform terpusat untuk mengelola prospek, melacak
                interaksi pelanggan, dan memantau sales pipeline. Ini membantu
                memprioritaskan tugas, otomatisasi tindak lanjut, dan pada
                akhirnya meningkatkan efisiensi, tingkat konversi prospek yang
                lebih baik, serta meningkatkan pendapatan.
              </p>
            </Accordion>
          </div>
          <div className="py-[12px]">
            <Accordion
              title={
                <span className="font-bold text-[17px]">
                  Bagaimana Cara Kerja CRM Omnichannel?
                </span>
              }
            >
              <p className="desc text-[14px] md:text-[17px]">
                {" "}
                Aplikasi CRM Caqap dapat memberdayakan tim sales Anda dengan
                menyediakan platform terpusat untuk mengelola prospek, melacak
                interaksi pelanggan, dan memantau sales pipeline. Ini membantu
                memprioritaskan tugas, otomatisasi tindak lanjut, dan pada
                akhirnya meningkatkan efisiensi, tingkat konversi prospek yang
                lebih baik, serta meningkatkan pendapatan.
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceFAQ;
