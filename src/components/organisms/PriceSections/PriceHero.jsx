import React from "react";

const PriceHero = () => {
  return (
    <section className="wrapper">
      <div className="container bg-[url('/images/line-vector.png')]">
        <div className=" flex justify-center">
          <img src="/images/price/hero.png" alt="home-hero" />
        </div>
        <div className="relative -top-[30px] md:-top-[70px]">
          <h5 className=" text-primary subtitle text-center">
            Penawaran Menarik
          </h5>
          <div className="flex justify-center">
            <h1 className="main-heading-2 lg:text-[42px] text-center w-full mt-[12px] max-w-[960px]">
              Temukan Solusi terpadu untuk layanan pelanggan bisnis Anda
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceHero;
