import React from "react";
import { Accordion } from "../../atoms";
import WAIcon from "../../../assets/whatsapp.svg";
const ProductFAQ = () => {
  return (
    <section className="section-break wrapper">
      <div className="container">
        <p className="text-center desc text-primary md:font-bold">
          Frequently Asked Questions (FAQ)
        </p>
        <h1 className="mt-3 main-heading-2 text-center">
          {" "}
          Apa itu Cakap Omnichannel Chat?
        </h1>

        <p className="py-4 desc text-center text-[14px] md:text-[17px]">
          CRM (Customer Relationship Management) Caqap adalah sistem yang
          membantu Anda mengelola interaksi dengan pelanggan, menyederhanakan
          proses penjualan dan pemasaran, serta meningkatkan layanan pelanggan.
          Ini sangat penting bagi bisnis yang ingin meningkatkan hubungan
          pelanggan, meningkatkan penjualan, dan mengoptimalkan operasional
          secara keseluruhan.
        </p>
        <div className="flex justify-center">
          <button className="btn bg-primary text-white gap-2 font-bold mt-6 w-full md:w-auto">
            <img src={WAIcon} alt="whatsapp" />
            KONSULTASI GRATIS
          </button>
        </div>

        <div className="mt-[40px] md:mt-[80px]">
          <div className="">
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
          <div className="">
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
          <div className="">
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
          <div className="">
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

export default ProductFAQ;
