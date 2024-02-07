import React from "react";

const ProductTestimonial = () => {
  return (
    <section className="wrapper section-break">
      <div className="container">
        <p className="md:font-bold desc text-primary">Testimonial</p>
        <h1 className="mt-3 main-heading-2 ">
          Kata Mereka Yang Telah Menggunakan
          <span className="text-primary">Caqap CRM</span>
        </h1>
        <div className="md:hidden mt-4">
          <p className="desc font-bold text-primary">Trisno Sanjaya</p>
          <p className="text-[#959595]">CTO PT Wangsajaya Tech</p>
        </div>
        <div className="flex flex-col gap-[24px] md:gap-[40px] md:flex-row md:items-center lg:gap-[80px] mt-[24px] md:mt-[50px]">
          <div className="">
            <p className="desc text-[#375761] ">
              Fitur Caqap lengkap dan dapat memonitor lokasi sales dengan fitur
              GPS dan Check In Check Out. Jadi bisa menghitung KPI dengan baik
              dan sales merasa kinerjanya dihargai.
            </p>
            <div className="hidden md:block mt-8">
              <p className="desc font-bold text-primary">Trisno Sanjaya</p>
              <p className="text-[#959595]">CTO PT Wangsajaya Tech</p>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow-0 ">
            <img
              src="/images/home/testimonial.png"
              alt="testimonial"
              className="w-[500px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTestimonial;
