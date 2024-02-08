import React, { useState } from "react";
import RectangleImg from "../../../assets/rectabgle.svg";
import HeadsetImg from "../../../assets/headset.svg";
import PresentIcon from "../../../assets/present.svg";
import PhonecallIcon from "../../../assets/phonecall.svg";
import WAIcon from "../../../assets/whatsapp.svg";
import PhoneIcon from "../../../assets/phone.svg";
import ScheduleIcon from "../../../assets/schedule.svg";
import { Link } from "react-router-dom";

const ContactHero = () => {
  const [data, setData] = useState([
    {
      icon: HeadsetImg,
      title: "Livechat",
      desc: "Bicara langsung dengan konsultan kami melalui telepon atau email.",
      link: "#",
      btnText: "Hubungi via Whatsapp",
      btnIcon: WAIcon,
    },
    {
      icon: PresentIcon,
      title: "By Call",
      desc: "Siap membantu Anda untuk menjawab segala pertanyaan seputar produk Caqap",
      link: "#",
      btnText: "021 123 456",
      btnIcon: PhoneIcon,
    },
    {
      icon: PhonecallIcon,
      title: "Schedule Meeting",
      desc: "Jadwalkan demo produk pilihan Anda secara langsung dengan tim Cawap",
      link: "#",
      btnText: "Jadwalkan Sekarang",
      btnIcon: ScheduleIcon,
    },
  ]);

  return (
    <section className="wrapper bg-[url('/images/line-vector.png')] section-break lg:pt-[100px] bg-no-repeat">
      <div className="container lg:px-[250px]">
        <div className="w-full">
          <p className="text-center desc text-primary">Hubungi Kami</p>
          <h1 className="main-heading-2 mt-3 md:mt-4 text-center">
            Diskusikan kebutuhan bisnis Anda dengan kami
          </h1>
          <p className="mt-3 md:mt-4 desc lg:text-[17px] text-center">
            Tim sales kami siap menjawab permasalahan bisnis dan memberikan
            solusiyang paling tepat untuk Anda.
          </p>
        </div>
        <div className="mt-[50px] md:mt-[75px] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[32px]">
          {data.map((r, i) => {
            return (
              <div
                key={`contact-feature-${i}`}
                className="w-full border border-primary rounded-[4px] relative bg-white "
              >
                <div className="absolute">
                  <img src={RectangleImg} alt="icon" />
                </div>
                <div className="flex flex-col justify-between p-4 lg:min-h-[280px]">
                  <div>
                    <div className="flex flex-col items-center">
                      <img
                        src={r.icon}
                        alt="icon"
                        className="flex-grow-0 flex-shrink-0 "
                      />
                    </div>
                    <p className="font-bold desc md:text-[28px] text-center mt-1">
                      {r.title}
                    </p>
                    <p className="mt-2 md:mt-4 text-center text-[14px]">
                      {r.desc}
                    </p>
                  </div>
                  <div className="w-full">
                    <Link to={r.link}>
                      <button className="btn bg-primary text-white gap-2 mt-2 w-full whitespace-nowrap ">
                        <img src={r.btnIcon} alt="whatsapp" />
                        {r.btnText}
                      </button>
                    </Link>
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

export default ContactHero;
