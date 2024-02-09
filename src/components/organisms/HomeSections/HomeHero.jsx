import React from "react";
import WAIcon from "../../../assets/whatsapp.svg";
const HomeHero = () => {
  return (
    <section className="wrapper pt-[40px] lg:pt-[50px]">
      <div className="container">
        <div className="bg-[url('/images/line-vector.png')] flex justify-center">
          <img src="/images/home/hero.png" alt="home-hero" />
        </div>
        <h5 className=" text-primary subtitle text-center">
          Multi-saluran, satu platform untuk komunikasi
        </h5>
        <h1 className="main-heading text-center w-full mt-[12px]">
          Solusi Omnichannel{" "}
          <span className="text-primary md:border-2 relative md:border-primary md:bg-[#E5F9FF] md:whitespace-nowrap md:px-2">
            <span className="hidden md:block absolute -top-[2px] left-[45%] h-1 w-[25px] bg-white"></span>
            CRM Terbaik
            <span className="hidden md:block absolute -bottom-[2px] left-[45%] h-1 w-[25px] bg-white"></span>
          </span>
        </h1>
        <p className="mt-[10px] lg:mt-[24px] text-center desc">
          Dengan <span className="text-primary ">Caqap CRM</span>,
          sentralisasikan data pelanggan dan prospek untuk strategi peningkatan
          penjualan, pemasaran, dan layanan pelanggan yang lebih efisien dan
          inovatif hingga 75%.
        </p>
        <div className="mt-[22px] flex flex-col sm:flex-row justify-center w-full  gap-3">
          <button className="btn bg-primary text-white gap-2 font-bold">
            <img src={WAIcon} alt="icon" />
            KONSULTASI GRATIS
          </button>
          <button className="btn border borde-primary text-primary font-bold">
            PRODUK KAMI
          </button>
        </div>
        <div className="py-[50px]">
          <h2 className="seconds-heading text-center">
            Dipercaya Oleh Berbagai Industri
          </h2>
          <div className="flex flex-wrap justify-center gap-[12px] md:gap-[24px] lg:gap-[40px] mt-[16px] lg:mt-[32px]">
            <img
              src="/images/home/bebeclub.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/telkomsel.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/nutricia.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/samsung.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/nutriclub.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/unilever.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/bayer.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
