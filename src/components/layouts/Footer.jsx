import React from "react";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-[50px] wrapper bg-[#1283C2]">
      <div className=" container py-[50px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] lg:gap-[200px]">
          <div>
            <h2 className="seconds-heading text-center text-white md:text-start lg:text-[32px]">
              Kami membantu bisnis anda berkembang
            </h2>
            <p className="desc-2  text-center text-white mt-4 md:text-start">
              PT. Caqap CRM Jalan Joglo Raya No.52, Jakarta, Indonesia 11640.
              Lihat Map
            </p>

            <div className="mt-4 flex gap-4">
              <button className="bg-white flex rounded-[4px]">
                <p className="p-3 border-r font-medium border-neutral-400">
                  <FiPhone />
                </p>
                <p className="p-3 font-medium">(+62) 0210123123</p>
              </button>
              <button className="bg-white flex rounded-[4px]">
                <p className="p-3 border-r font-medium border-neutral-400">
                  <BsEnvelope />
                </p>
                <p className="p-3 font-medium">sales@caqap.id</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="desc text-white lg:text-[17px]">Hubungi Kami</p>
            <p className="desc text-white lg:text-[17px]">Kebijakan Privasi</p>
            <p className="desc text-white lg:text-[17px]">Konsultasi Gratis</p>
          </div>
        </div>
        <hr className="my-8 text-[#7DD1FF]" />

        <p className="desc text-white lg:text-[17px]">
          Copyright ©2024 PT Caqap Teknologi Indonesia
        </p>
      </div>
    </div>
  );
};

export default Footer;
