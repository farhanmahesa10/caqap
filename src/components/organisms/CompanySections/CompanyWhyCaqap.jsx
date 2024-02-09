import React, { useState } from "react";
import ChatbotImg from "../../../assets/chatbot-dark.svg";
import WAAPIImg from "../../../assets/wa-api-dark.svg";
import OpenAPIImg from "../../../assets/api-dark.svg";
import LiveChatImg from "../../../assets/live-chat-dark.svg";
import WABlastImg from "../../../assets/wa-blast-dark.svg";
import ManagementImg from "../../../assets/management-dark.svg";
const CompanyWhyCaqap = () => {
  const [data, setData] = useState([
    {
      icon: ChatbotImg,
      title: "Satu Inbox, Semua Channel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: WAAPIImg,
      title: "Broadcast Mudah, Penjualan Bertambah",
      desc: "Kemudahan integrasi untuk tingkatkan pengelolaan akun WhatsApp bisnis",
    },

    {
      icon: OpenAPIImg,
      title: "Open API",
      desc: "Kemudahan integrasi modul omnichannel dengan platform lain",
    },
    {
      icon: LiveChatImg,
      title: "Miliki Platform Chat Bisnis Anda Sendiri",
      desc: "Kemudahan integrasi layanan live chat 24/7 ke dalam aplikasi Anda",
    },
    {
      icon: WABlastImg,
      title: "Kirim Broadcast & OTP Lebih Efisien via WhatsApp",
      desc: "Kemudahan integrasi layanan live chat 24/7 ke dalam aplikasi Anda",
    },
    {
      icon: ManagementImg,
      title: "Kelola Laporan Lebih Efisien",
      desc: "Kemudahan integrasi layanan live chat 24/7 ke dalam aplikasi Anda",
    },
  ]);
  return (
    <section className="wrapper section-break">
      <div className="container">
        <h2 className="text-center main-heading-2">
          Mengapa Harus Memilih{" "}
          <span className="text-primary md:border-2 relative md:border-primary md:bg-[#E5F9FF] md:whitespace-nowrap md:px-2">
            <span className="hidden md:block absolute -top-[2px] left-[45%] h-1 w-[25px] bg-white"></span>
            Caqap CRM
            <span className="hidden md:block absolute -bottom-[2px] left-[45%] h-1 w-[25px] bg-white"></span>
          </span>
        </h2>
        <div className="mt-[24px] md:mt-[50px]  grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {data.map((r, i) => {
            return (
              <div
                key={`product-${i}`}
                className="border border-[#9BD4E6] bg-white p-4 rounded-[4px] flex gap-4 flex-col md:flex-row"
              >
                <div className="flex-shrink-0 flex-grow-0">
                  <img src={r.icon} alt="icon" />
                </div>
                <div>
                  <p className="desc lg:text-[20px] font-bold text-primary-dark  md:mt-0">
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

export default CompanyWhyCaqap;
