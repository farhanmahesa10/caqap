import React from "react";

const HomeMultiChannel = () => {
  return (
    <section className="section-break wrapper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[32px]">
          <div className="flex flex-col items-center md:items-start order-1 md:order-2">
            <p className="desc text-primary md:font-bold">Multi-channel</p>
            <h1 className="main-heading-2">Multi-channel Chat Integrations</h1>
            <p className="mt-[24px] desc text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eu nulla nec metus pulvinar facilisis sit amet vel orci.
              Suspendisse tellus leo, pretium eu accumsan nec, vehicula non
              elit.
            </p>
            <div className="flex flex-wrap items-center gap-2 py-[16px] md:py-[32px]">
              <button className="btn border border-[#00B8F0]  text-[#00B8F0] py-[6px] px-3 desc-2 gap-2">
                <img src="/images/home/chatbot.png" alt="chatbot" /> Chatbot
              </button>

              <button className="btn border border-[#00B8F0] text-[#00B8F0] py-[6px] px-3 desc-2 gap-2">
                <img src="/images/home/line.png" alt="line" /> Line
              </button>
              <button className="btn border border-[#00B8F0] text-[#00B8F0] py-[6px] px-3 desc-2 gap-2">
                <img src="/images/home/gmail.png" alt="chatbot" /> Gmail
              </button>
              <button className="btn border border-[#00B8F0] text-[#00B8F0] py-[6px] px-3 desc-2 gap-2">
                <img src="/images/home/messanger.png" alt="chatbot" /> Facebook
              </button>
              <button className="btn border border-[#00B8F0] text-[#00B8F0] py-[6px] px-3 desc-2 gap-2">
                <img src="/images/home/api.png" alt="chatbot" /> API Integrated
              </button>
            </div>
            <p className="text-center md:text-start subtitle text-primary underline">
              Konsultasi Dengan Sales Kami
            </p>
          </div>
          <div className="order-2 md:order-1">
            <img src="/images/home/multi-channel.png" alt="multi channel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMultiChannel;
