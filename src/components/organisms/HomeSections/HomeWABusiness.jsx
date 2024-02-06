import React from "react";

const HomeWABusiness = () => {
  return (
    <section className="section-break wrapper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[32px]">
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/home/wa-logo-with-text.png" alt="wa logo" />
            <h1 className="main-heading-2">WhatsApp Bisnis</h1>
            <p className="mt-[24px] desc text-center md:text-start">
              Dengan membuka pengalaman percakapan yang lancar di WhatsApp Anda
              untuk Memberikan Keterlibatan Pelanggan yang Dipersonalisasi &
              Menyederhanakan Perjalanan Transaksional.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 py-[16px] md:py-[32px]">
              <button className="btn border border-[#00B8F0]  text-[#00B8F0] py-[6px] px-3 desc-2">
                WhatsApp API
              </button>

              <button className="btn border border-[#00B8F0] text-[#00B8F0] py-[6px] px-3 desc-2">
                WhatsApp Blast
              </button>
              <button className="btn border border-[#00B8F0] text-[#00B8F0] py-[6px] px-3 desc-2">
                WhatsApp Broadcasting
              </button>
            </div>
            <p className="text-center md:text-start subtitle text-primary underline">
              Konsultasi Dengan Sales Kami
            </p>
          </div>
          <div>
            <img src="/images/home/wa-business.png" alt="wa business" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWABusiness;
