import React, { useState } from "react";
import ChatbotImg from "../../../assets/chatbot.svg";
import WAAPIImg from "../../../assets/wa-api.svg";
import OpenAPIImg from "../../../assets/api.svg";
import LiveChatImg from "../../../assets/live-chat.svg";
import WABlastImg from "../../../assets/wa-blast.svg";
import ManagementImg from "../../../assets/management.svg";
const ProductSuperiorFeature = () => {
  const [data, setData] = useState([
    {
      icon: ChatbotImg,
      title: "Chatbot AI",
      desc: "Dukungan otomatisasi percakapan prospek dan pelanggan di omnichannel",
    },
    {
      icon: WAAPIImg,
      title: "WhatsApp API",
      desc: "Kemudahan integrasi untuk tingkatkan pengelolaan akun WhatsApp bisnis",
    },

    {
      icon: OpenAPIImg,
      title: "Open API",
      desc: "Kemudahan integrasi modul omnichannel dengan platform lain",
    },
    {
      icon: LiveChatImg,
      title: "Embeded Livechat",
      desc: "Kemudahan integrasi layanan live chat 24/7 ke dalam aplikasi Anda",
    },
    {
      icon: WABlastImg,
      title: "WhatsApp Blast",
      desc: "Kemudahan integrasi layanan live chat 24/7 ke dalam aplikasi Anda",
    },
    {
      icon: ManagementImg,
      title: "Management Laporan",
      desc: "Kemudahan integrasi layanan live chat 24/7 ke dalam aplikasi Anda",
    },
  ]);

  return (
    <section className="wrapper section-break">
      <div className="container">
        <h2 className="main-heading-2 ">
          Fitur Unggulan{" "}
          <span className="text-primary md:border-2 relative md:border-primary md:bg-[#E5F9FF] md:whitespace-nowrap md:px-2">
            <span className="hidden md:block absolute -top-[2px] left-[38%] h-1 w-[64px] bg-white"></span>
            Caqap Omnichannel
            <span className="hidden md:block absolute -bottom-[2px] left-[38%] h-1 w-[64px] bg-white"></span>
          </span>{" "}
          Panel
        </h2>
        <div className="mt-6 md:mt-[32px] lg:mt-[50px] grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {data.map((r, i) => {
            return (
              <div
                key={`product-${i}`}
                className="border border-primary bg-white p-4 rounded-[4px] flex gap-4 flex-col md:flex-row"
              >
                <div className="flex-shrink-0 flex-grow-0">
                  <img src={r.icon} alt="icon" />
                </div>
                <div>
                  <p className="desc font-bold text-primary mt-3 md:mt-0">
                    {r.title}
                  </p>
                  <p className="desc-2 mt-2 text-[#7197AC]">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSuperiorFeature;
