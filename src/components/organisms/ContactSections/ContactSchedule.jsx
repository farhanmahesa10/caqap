import React from "react";
import { Input } from "../../atoms";
import NameIcon from "../../../assets/InputName.svg";
import CompanyIcon from "../../../assets/InputCompany.svg";
import EmailIcon from "../../../assets/InputEmail.svg";
import PhoneIcon from "../../../assets/InputPhone.svg";
const ContactSchedule = () => {
  return (
    <section className="wrapper section-break">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[50px] p-4 md:p-8 lg:p-[50px] border border-primary rounded-[12px] md:rounded-[24px] bg-white">
          <div className="">
            <div className="bg-[url('/images/contact/schedule-bg.png')] bg-no-repeat">
              <img src="/images/contact/schedule.png" alt="image" />
            </div>
            <div className="] relative -top-[60px]">
              <h2 className="seconds-heading lg:text-[37px">
                {" "}
                Jadwalkan meeting
              </h2>
              <p className="desc-2 text-[#7197AC] mt-2 font-normal">
                Konsultasikan kebutuhan Anda dengan tim kami dan pelajari
                bagaimana Caqap Omnichannel dapat menjadi solusi yang tepat
                untuk bisnis Anda
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <Input
              label="Nama Lengkap"
              placeholder="Nama Lengkap"
              rightIcon={<img src={NameIcon} alt="icon" />}
            />
            <Input
              label="Nama Perusahaan"
              placeholder="Nama Perusahaan"
              rightIcon={<img src={CompanyIcon} alt="icon" />}
            />
            <Input
              label="Alamat Email"
              placeholder="Email"
              rightIcon={<img src={EmailIcon} alt="icon" />}
            />
            <Input
              label="Nomor Ponsel"
              placeholder="No. Ponsel"
              rightIcon={<img src={PhoneIcon} alt="icon" />}
            />
            <button className="btn bg-primary w-full text-white">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSchedule;
