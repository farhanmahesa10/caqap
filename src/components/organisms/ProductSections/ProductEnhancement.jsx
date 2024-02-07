import React, { useState } from "react";
import WAIcon from "../../../assets/whatsapp.svg";
const ProductEnhancement = () => {
  const [data, setData] = useState([
    {
      title: "Percakapan Berkelanjutan",
      desc: "Akomodir kesempatan melanjutkan percakapan dan menjawab pertanyaan yang mungkin muncul di benak prospek.",
    },
    {
      title: "Pengingat Pecakapan Tingkat Lanjut",
      desc: "Fitur pengingat tindak lanjut untuk menghubungi prospek sesuai jadwal yang ditetapkan untuk pastikan konsistensi engagement.",
    },
    {
      title: "Solusi Real-time",
      desc: "Akses ke informasi produk dan panduan penjualan tersentralisasi untuk solusi real-time pertanyaan atau kekhawatiran prospek.",
    },
  ]);

  return (
    <section className="wrapper section-break">
      <div className="container">
        <div className="flex flex-col md:flex-row  justify-between gap-[40px] lg:gap-[150px] items-center">
          <div className="max-w-[600px] w-full">
            <h2 className="main-heading-2 md:text-[37px]">
              Meningkatkan keterlibatan penjualan
            </h2>
            <div className="mt-6 flex flex-col gap-[24px]">
              {data.map((r, i) => {
                return (
                  <div className="flex gap-[10px]" key={`product-${i}`}>
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM14.2806 8.28063L9.03063 13.5306C8.96097 13.6004 8.87826 13.6557 8.78721 13.6934C8.69616 13.7312 8.59857 13.7506 8.5 13.7506C8.40144 13.7506 8.30385 13.7312 8.2128 13.6934C8.12175 13.6557 8.03903 13.6004 7.96938 13.5306L5.71938 11.2806C5.57865 11.1399 5.49959 10.949 5.49959 10.75C5.49959 10.551 5.57865 10.3601 5.71938 10.2194C5.86011 10.0786 6.05098 9.99958 6.25 9.99958C6.44903 9.99958 6.6399 10.0786 6.78063 10.2194L8.5 11.9397L13.2194 7.21937C13.2891 7.14969 13.3718 7.09442 13.4628 7.0567C13.5539 7.01899 13.6515 6.99958 13.75 6.99958C13.8486 6.99958 13.9461 7.01899 14.0372 7.0567C14.1282 7.09442 14.2109 7.14969 14.2806 7.21937C14.3503 7.28906 14.4056 7.37178 14.4433 7.46283C14.481 7.55387 14.5004 7.65145 14.5004 7.75C14.5004 7.84855 14.481 7.94613 14.4433 8.03717C14.4056 8.12822 14.3503 8.21094 14.2806 8.28063Z"
                          fill="#6ACB7A"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="desc font-medium text-primary-dark">
                        {r.title}
                      </p>
                      <p className="mt-2 text-[#7197AC] desc-2">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
              <button className="btn bg-primary text-white gap-2 font-bold mt-3 w-full md:w-fit">
                <img src={WAIcon} alt="wa icon" />
                KONSULTASI GRATIS
              </button>
            </div>
          </div>
          <div>
            <img
              src="/images/product/peningkatan.png"
              alt="product enhancement"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEnhancement;
