import React from "react";
import WAIcon from "../../../assets/whatsapp.svg";
const ProductHero = () => {
  return (
    <>
      <section className="wrapper  ">
        <div className="container">
          <div className=" bg-[url('/images/line-vector.png')] bg-no-repeat pb-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[32px] lg:gap-[60px] items-center">
              <div className="order-1 md:order-2">
                <img
                  src="/images/product/hero.png"
                  alt="product hero"
                  className="w-full"
                />
              </div>
              <div className="order-2 md:order-1">
                <h1 className="main-heading">
                  Revolusikan layanan pelanggan dengan{" "}
                  <span className="text-primary">Caqap Omnichannel</span> chat
                </h1>
                <p className="mt-3 desc">
                  Hubungkan setiap touchpoints bisnis dan tingkatkan engagement
                  untuk pengalaman bisnis yang lebih kokoh.
                </p>
                <button className="btn bg-primary text-white gap-2 font-bold mt-3">
                  <img src={WAIcon} alt="" />
                  KONSULTASI GRATIS
                </button>
              </div>
            </div>
            <div className=" ">
              <p className="desc">
                Perusahaan yang telah menggunakan Produk Kami:
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:gap-1 max-w-[870px]">
                <img src="/images/product/p1.png" alt="pengguna produk" />
                <img src="/images/product/p2.png" alt="pengguna produk" />
                <img src="/images/product/p3.png" alt="pengguna produk" />
                <img src="/images/product/p4.png" alt="pengguna produk" />
                <img src="/images/product/p5.png" alt="pengguna produk" />
                <img src="/images/product/p6.png" alt="pengguna produk" />
                <img src="/images/product/p7.png" alt="pengguna produk" />
                <img src="/images/product/p8.png" alt="pengguna produk" />
                <img src="/images/product/p9.png" alt="pengguna produk" />
                <img src="/images/product/p10.png" alt="pengguna produk" />
                <img src="/images/product/p11.png" alt="pengguna produk" />
                <img src="/images/product/p12.png" alt="pengguna produk" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHero;
