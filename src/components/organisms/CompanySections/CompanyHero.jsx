import React from "react";
import WAIcon from "../../../assets/whatsapp.svg";

const CompanyHero = () => {
  return (
    <section className="wrapper pt-[50px] md:pt-[100px] mb-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] md:gap-[100px]">
          <div className="w-full flex-shrink-0 flex-grow-0 order-1 md:order-2">
            <img
              src="/images/company/hero.png"
              alt="company hero"
              className="w-full"
            />
          </div>
          <div className="h-full  flex flex-col justify-between order-2 md:order-1">
            <div className="">
              <h1 className="main-heading-2 lg:text-[48px]">
                Tentang Caqap CRM
              </h1>
              <p className="mt-3 desc text-primary-dark">
                Didirikan tahun 2016, PT Caqap Teknologi Indonesia atau Caqap
                adalah perusahaan penyedia aplikasi CRM Omnichannel berbasis
                cloud canggih untuk memberikan solusi bisnis dalam mempercepat
                penjualan sales dan layanan pelanggan menjadi lebih efektif
              </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-2 md:gap-[27px]">
              <button className="btn bg-primary text-white gap-2 font-bold mt-6 w-full md:w-auto whitespace-nowrap">
                <img src={WAIcon} alt="whatsapp" />
                Hubungi Kami
              </button>
              <button className="btn border border-primary text-primary gap-2 font-bold mt-6 w-full md:w-auto  whitespace-nowrap">
                Omnichannel Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
