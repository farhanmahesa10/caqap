import React, { useState } from "react";
import ChatbotImg from "../../../assets/chatbot-black.svg";
const PriceUMKM = () => {
  const [activeData, setActiveData] = useState("Fashion");
  const [data, setData] = useState([
    {
      type: "Fashion",
      title: "",
      desc: "",
      tags: [],
    },
    {
      type: "Logistik",
      title: "",
      desc: "",
      tags: [],
    },
    {
      type: "FnB",
      title: "",
      desc: "",
      tags: [],
    },
    {
      type: "Pariwisata",
      title: "",
      desc: "",
      tags: [],
    },
  ]);
  return (
    <div className="wrapper section-break">
      <div className="container">
        <h2 className="main-heading-2 text-center md:text-start">
          Caqap Membantu UMKM Dalam Mengembangkan Usaha Dari Berbagai Industri
        </h2>
        <div className="mt-[50px] flex justify-center">
          <div className="py-1 px-2 md:py-3 md:px-4 flex bg-[#F1F8FB] gap-[18px]">
            {data.map((r, i) => {
              return (
                <button
                  className={`btn py-3 px-4 ${
                    activeData === r.type && "bg-primary text-white "
                  } `}
                  key={"umkm-" + i}
                  onClick={() => {
                    setActiveData(r.type);
                  }}
                >
                  {r.type}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-[24px] md:mt-[50px] flex flex-col md:flex-row  justify-between gap-[40px] lg:gap-[80px]">
          <div className="w-full">
            <img
              src="/images/price/umkm.png"
              alt="product enhancement"
              className="w-full"
            />
          </div>
          <div className="max-w-[600px] w-full">
            <h2 className="seconds-heading md:text-[32px]">
              Hanum Fashion meningkatkan kualitas layanan pelanggan secara
              optimal
            </h2>
            <p className="desc mt-4 text-[#375761] md:text-[20px]">
              “Peningkatan 5% active user dalam Hanum Fashion setelah
              menjalankan campaign edukasi melalui Whatsapp dan channel
              lainnya.”
            </p>

            <div className="mt-[25px] md:mt-[50px]">
              <p className="text-[14px] md:text-[17px] text-[#7197AC]">
                Produk yang digunakan:
              </p>
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 mt-2 ">
                <button className="btn py-2 gap-2 px-4 text-[14px] md:text-[17px] text-primary md:font-bold border border-primary">
                  <img src={ChatbotImg} alt="icon" /> #WhatsApp Bisnis API
                </button>
                <button className="btn py-2 gap-2 px-4 text-[14px] md:text-[17px] text-primary md:font-bold border border-primary">
                  <img src={ChatbotImg} alt="icon" /> #CaqapOmnichannelChat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceUMKM;
