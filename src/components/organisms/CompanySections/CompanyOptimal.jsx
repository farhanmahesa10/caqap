import React from "react";
import WAIcon from "../../../assets/whatsapp.svg";
const CompanyOptimal = () => {
  return (
    <div className="section-break w-full">
      <section
        className={`wrapper  bg-[#31AD5F] py-[74px] 
    md:py-[66px] bg-[url('/images/company/bg-c1.png'),_url('/images/company/bg-c2.png')] 
    bg-no-repeat bg-[position:10px_50%,90%_100%] md:bg-[position:10px_50%,90%_50%] `}
      >
        <div className="container  ">
          <h1 className="main-heading text-white">
            Optimalkan Bisnis Anda dengan WhatsApp Business API
          </h1>
          <p className="mt-3 md:mt-8 desc text-white font-normal">
            Solusi terbaik untuk untuk bisnis Anda menjangkau dan menjalin
            komunikasi dengan customer Anda. Dengan Official WhatsApp Business
            API, anda dapat dengan mudah menjangkau customer Anda melalui
            WhatsApp dari dashboard kita.
          </p>
          <div className="mt-[24px] md:mt-[50px] flex justify-center">
            <button className="btn py-[14px] bg-[#003025] text-[15px] md:text-[20px] text-white gap-3 font-bold mt-6 w-full md:w-auto whitespace-nowrap">
              <img
                src={WAIcon}
                alt="whatsapp"
                className="flex-shrink-0 flex-grow-0 w-[32px]"
              />
              KONSULTASI GRATIS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyOptimal;
