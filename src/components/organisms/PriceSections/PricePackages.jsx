import React, { useState } from "react";
import Package1Img from "../../../assets/package-1.svg";
import Package2Img from "../../../assets/package-2.svg";
import Package3Img from "../../../assets/package-3.svg";
import CheckImg from "../../../assets/check.svg";
import TimesImg from "../../../assets/times.svg";
import RectangleImg from "../../../assets/rectabgle.svg";
import WAIcon from "../../../assets/whatsapp.svg";
import FireImg from "../../../assets/fire.svg";

const PricePackages = () => {
  const [activeData, setActiveData] = useState(1);
  const [activePackage, setActivePackage] = useState(2);

  const [data, setData] = useState([
    {
      id: 1,
      title: "Starter",
      icon: Package1Img,
      isPopuler: false,
      desc: "Solusi mudah untuk meningkatkan penjualan bagi perusahaan yang baru berkembang melalui omnichannel. \n \n Paket yang terjangkau untuk perusahaan kecil dan menengah.",
      price: 720000,
    },
    {
      id: 2,
      title: "Pro",
      icon: Package2Img,
      isPopuler: true,
      desc: "Solusi lengkap untuk perusahaan yang ingin meningkatkan pengalaman pelanggan melalui omnichannel. \n \n Fitur dan layanan yang disesuaikan dengan kebutuhan bisnis dan operasional khusus.",
      price: 1499000,
    },
    {
      id: 3,
      title: "Bisnis",
      icon: Package3Img,
      isPopuler: false,
      desc: "Solusi scalable untuk perusahaan yang membutuhkan sistem omnichannel yang lebih kompleks. \n \n Paket yang terjangkau untuk perusahaan kecil dan menengah.",
      price: 3499000,
    },
    {
      id: 4,
      title: "Enterprise",
      icon: Package3Img,
      isPopuler: false,
      desc: "Solusi omnichannel yang komprehensif untuk perusahaan global. \n \n Fitur dan layanan yang disesuaikan dengan kebutuhan bisnis dan operasional kompleks.",
      price: 0,
    },
  ]);

  const [packages2, setPackages2] = useState([
    {
      id: 1,
      price: 720000,
      features: [
        {
          title: "Account Verification",
          children: [
            {
              allow: true,
              desc: "Dukungan Badge Centang hijau WhatsApp*",
            },
            {
              allow: true,
              desc: "Masking akun Whatsapp",
            },
          ],
        },
        {
          title: "Agent Productivity",
          children: [
            {
              allow: true,
              desc: "5 Quota agent",
            },
            {
              allow: true,
              desc: "Alokasi agen otomatis",
            },
            {
              allow: true,
              desc: "Autosave riwayat percakapan",
            },
            {
              allow: true,
              desc: "Template pesan terkustomisasi",
            },
            {
              allow: true,
              desc: "Reply otomatis terjadwal",
            },
          ],
        },
        {
          title: "WhatsApp Business Optimization",
          children: [
            {
              allow: true,
              desc: "1000 WhatsApp Conversation Credit",
            },
            {
              allow: false,
              desc: "WhatsApp Balance Credit",
            },
          ],
        },
        {
          title: "Artificial Intelligence (AI)",
          children: [
            {
              allow: false,
              desc: "Paraphrasing pesan",
            },
            {
              allow: false,
              desc: "Expansi pesan lebih mendetil",
            },
            {
              allow: false,
              desc: "Summary percakapan agent otomatis",
            },
            {
              allow: false,
              desc: "Identifikasi sentimen pelanggan",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      price: 720000,
      features: [
        {
          title: "Account Verification",
          children: [
            {
              allow: true,
              desc: "Dukungan Badge Centang hijau WhatsApp*",
            },
            {
              allow: true,
              desc: "Masking akun Whatsapp",
            },
          ],
        },
        {
          title: "Agent Productivity",
          children: [
            {
              allow: true,
              desc: "5 Quota agent",
            },
            {
              allow: true,
              desc: "Alokasi agen otomatis",
            },
            {
              allow: true,
              desc: "Autosave riwayat percakapan",
            },
            {
              allow: true,
              desc: "Template pesan terkustomisasi",
            },
            {
              allow: true,
              desc: "Reply otomatis terjadwal",
            },
          ],
        },
        {
          title: "WhatsApp Business Optimization",
          children: [
            {
              allow: true,
              desc: "1000 WhatsApp Conversation Credit",
            },
            {
              allow: false,
              desc: "WhatsApp Balance Credit",
            },
          ],
        },
        {
          title: "Artificial Intelligence (AI)",
          children: [
            {
              allow: false,
              desc: "Paraphrasing pesan",
            },
            {
              allow: false,
              desc: "Expansi pesan lebih mendetil",
            },
            {
              allow: false,
              desc: "Summary percakapan agent otomatis",
            },
            {
              allow: false,
              desc: "Identifikasi sentimen pelanggan",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      price: 720000,
      features: [
        {
          title: "Account Verification",
          children: [
            {
              allow: true,
              desc: "Dukungan Badge Centang hijau WhatsApp*",
            },
            {
              allow: true,
              desc: "Masking akun Whatsapp",
            },
          ],
        },
        {
          title: "Agent Productivity",
          children: [
            {
              allow: true,
              desc: "5 Quota agent",
            },
            {
              allow: true,
              desc: "Alokasi agen otomatis",
            },
            {
              allow: true,
              desc: "Autosave riwayat percakapan",
            },
            {
              allow: true,
              desc: "Template pesan terkustomisasi",
            },
            {
              allow: true,
              desc: "Reply otomatis terjadwal",
            },
          ],
        },
        {
          title: "WhatsApp Business Optimization",
          children: [
            {
              allow: true,
              desc: "1000 WhatsApp Conversation Credit",
            },
            {
              allow: false,
              desc: "WhatsApp Balance Credit",
            },
          ],
        },
        {
          title: "Artificial Intelligence (AI)",
          children: [
            {
              allow: false,
              desc: "Paraphrasing pesan",
            },
            {
              allow: false,
              desc: "Expansi pesan lebih mendetil",
            },
            {
              allow: false,
              desc: "Summary percakapan agent otomatis",
            },
            {
              allow: false,
              desc: "Identifikasi sentimen pelanggan",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      price: 720000,
      features: [
        {
          title: "Account Verification",
          children: [
            {
              allow: true,
              desc: "Dukungan Badge Centang hijau WhatsApp*",
            },
            {
              allow: true,
              desc: "Masking akun Whatsapp",
            },
          ],
        },
        {
          title: "Agent Productivity",
          children: [
            {
              allow: true,
              desc: "5 Quota agent",
            },
            {
              allow: true,
              desc: "Alokasi agen otomatis",
            },
            {
              allow: true,
              desc: "Autosave riwayat percakapan",
            },
            {
              allow: true,
              desc: "Template pesan terkustomisasi",
            },
            {
              allow: true,
              desc: "Reply otomatis terjadwal",
            },
          ],
        },
        {
          title: "WhatsApp Business Optimization",
          children: [
            {
              allow: true,
              desc: "1000 WhatsApp Conversation Credit",
            },
            {
              allow: false,
              desc: "WhatsApp Balance Credit",
            },
          ],
        },
        {
          title: "Artificial Intelligence (AI)",
          children: [
            {
              allow: false,
              desc: "Paraphrasing pesan",
            },
            {
              allow: false,
              desc: "Expansi pesan lebih mendetil",
            },
            {
              allow: false,
              desc: "Summary percakapan agent otomatis",
            },
            {
              allow: false,
              desc: "Identifikasi sentimen pelanggan",
            },
          ],
        },
      ],
    },
  ]);

  let Money = new Intl.NumberFormat("en-US");
  return (
    <section className="wrapper section-break">
      <div className="container">
        <h2 className="seconds-heading md:text-[24px] lg:text-[24px] text-center">
          Bandingkan Paket
        </h2>
        <div className="mt-[24px] md:mt-[50px] flex overflow-x-auto gap-3 pb-2 clickable scrollbar-thin">
          {data.map((r, i) => {
            return (
              <div
                className={` 
               ${
                 activeData === r.id
                   ? "border border-primary relative"
                   : "border border-[#E7EFF1]"
               } 

               transition-all duration-200

                w-[290px] flex-shrink-0 flex-grow-0 p-4 rounded-[4px] bg-white  min-h-[320px] flex flex-col justify-between`}
                key={`price-package-${i}`}
                onClick={() => {
                  setActiveData(r.id);
                }}
              >
                {activeData === r.id && (
                  <div className="absolute top-0 left-0 w-[20px] h-[20px]  ">
                    <img src={RectangleImg} alt="rectabgle" />
                  </div>
                )}

                <div className="">
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <img
                        src={r.icon}
                        alt="icon"
                        className="flex-grow-0 flex-shrink-0"
                      />
                      <p className=" font-bold text-[20px] text-solid-black">
                        {r.title}
                      </p>
                    </div>
                    {r.isPopuler && (
                      <span className="p-1 text-[14px] rounded-[4px] bg-[#FFE0E0] text-[#D12E2E] flex gap-2 whitespace-nowrap">
                        Paling Populer <img src={FireImg} alt="fire icon" />
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="mt-4 text-[14px] text-solid-black ">
                      {r.desc}
                    </p>
                  </div>
                </div>

                <div>
                  {r.price > 0 ? (
                    <p className="text-solid-black">
                      {" "}
                      <span className="text-[15px] ">Rp </span>
                      <span className="font-bold text-[18px]">
                        {Money.format(r.price)}
                      </span>
                      <span className="text-[15px] text-[#9AB3C0]">
                        {" "}
                        /bulan
                      </span>
                    </p>
                  ) : (
                    <p className="text-solid-black font-bold text-[18px]">
                      Konsultasi Gratis
                    </p>
                  )}
                  <div className="mt-3">
                    <button className="btn bg-primary text-white gap-2 w-full">
                      <img src={WAIcon} alt="icon" />
                      Hubungi Sales
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-[48px] md:mt-[100px] flex overflow-x-auto gap-3 pb-2 clickable scrollbar-thin">
          {packages2.map((pack, index) => {
            return (
              <div
                key={`package-${index}`}
                className={`
                ${
                  activePackage === pack.id
                    ? "border border-primary relative"
                    : "border border-[#E7EFF1]"
                } 
   
                  transition-all duration-200

                w-[290px] flex flex-col gap-[32px] md:gap-[48px] flex-shrink-0 flex-grow-0  p-4 rounded-[4px] bg-white  justify-between`}
                onClick={() => {
                  setActivePackage(pack.id);
                }}
              >
                {activePackage === pack.id && (
                  <div className="absolute top-0 left-0 w-[20px] h-[20px]  ">
                    <img src={RectangleImg} alt="rectabgle" />
                  </div>
                )}

                {pack.features.map((r, i) => {
                  return (
                    <div className={`packages-2-${index} flex flex-col gap-3`}>
                      <p className=" font-bold text-[15px] text-solid-black">
                        {r.title}
                      </p>
                      {r.children.map((res, ind) => {
                        return (
                          <div
                            className="flex gap-1 items-start"
                            key={`child-${i}-${ind}`}
                          >
                            {res.allow ? (
                              <img
                                src={CheckImg}
                                alt="check icon"
                                className="flex-shrink-0 flex-grow-0 mt-[2px]"
                              />
                            ) : (
                              <img
                                src={TimesImg}
                                alt="times icon"
                                className="flex-shrink-0 flex-grow-0 mt-[2px]"
                              />
                            )}

                            <p className="text-[15px] text-[#7197AC]">
                              {res.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                <div className="mt-[48px]">
                  {pack.price > 0 ? (
                    <p className="text-solid-black">
                      {" "}
                      <span className="text-[15px] ">Rp </span>
                      <span className="font-bold text-[18px]">
                        {Money.format(pack.price)}
                      </span>
                      <span className="text-[15px] text-[#9AB3C0]">
                        {" "}
                        /bulan
                      </span>
                    </p>
                  ) : (
                    <p className="text-solid-black font-bold text-[18px]">
                      Konsultasi Gratis
                    </p>
                  )}
                  <div className="mt-3">
                    <button className="btn bg-primary text-white gap-2 w-full">
                      <img src={WAIcon} alt="icon" />
                      Hubungi Sales
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricePackages;
