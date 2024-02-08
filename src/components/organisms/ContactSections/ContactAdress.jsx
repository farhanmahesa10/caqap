import React from "react";

const ContactAdress = () => {
  return (
    <section className="wrapper section-break pb-[100px] md:pb-[50px]">
      <div className="container">
        <h1 className="main-heading-2 text-center">Alamat Kantor Kami</h1>
        <p className="text-[17px] text-primary-dark text-center mt-1 md:mt-4">
          Terletak dengan strategis di pusat Jakarta untuk akses yang mudah.
        </p>
        <div className="mt-[24px] md:mt-[40px] lg:mt-[50px] flex items-center flex-col relative">
          <div className="w-full max-w-[800px]">
            <img src="/images/contact/map.png" alt="map" className="w-full " />
          </div>
          <div
            className="absolute -bottom-[100px] sm:-bottom-[20px] md:-bottom-[20px] rounded-[4px] bg-primary  text-center p-4 max-w-[752px] w-full"
            style={{
              boxShadow: "0px 12px 22px 0px #37576140",
            }}
          >
            <p className="desc text-white font-bold">
              PT Caqap Teknologi Indonesia
            </p>
            <p className="mt-4 md:mt-3 text-[17px] text-white">
              District 8 - Prosperity Tower, SCBDJl. Jenderal Sudirman No.52-53,
              RT.5/RW.3Senayan, Kebayoran Baru, Jakarta Selatan 12190 Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAdress;
