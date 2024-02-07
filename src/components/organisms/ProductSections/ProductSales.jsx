import React from "react";

const ProductSales = () => {
  return (
    <div className="wrapper section-break">
      <div className="container ">
        <div className="bg-[url('/images/home/penjualan-bg.png')] bg-cover py-[50px] px-[24px] rounded-[16px]">
          <h1 className="main-heading-2 text-white text-center">
            Tingkatkan Penjualan dan Pelayanan Bisnis Anda Sekarang
          </h1>
          <p className="mt-4 text-white font-medium text-center">
            Satu aplikasi untuk semua kebutuhan bisnis Anda
          </p>
          <div className="flex justify-center w-full">
            <button className="mt-6 btn text-primary font-bold bg-white">
              Hubungi Sales Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSales;
