import React from "react";

const HomeHero = () => {
  return (
    <section className="wrapper pt-[40px] lg:pt-[50px]">
      <div className="container">
        <div className="bg-[url('/images/line-vector.png')] flex justify-center">
          <img src="/images/home/hero.png" alt="home-hero" />
        </div>
        <h5 className="f text-primary subtitle text-center">
          Multi-saluran, satu platform untuk komunikasi
        </h5>
        <h1 className="main-heading text-center w-full mt-[12px]">
          Solusi Omnichannel <span className="text-primary">CRM Terbaik</span>
        </h1>
        <p className="mt-[10px] lg:mt-[24px] text-center desc">
          Dengan <span className="text-primary">Caqap CRM</span>,
          sentralisasikan data pelanggan dan prospek untuk strategi peningkatan
          penjualan, pemasaran, dan layanan pelanggan yang lebih efisien dan
          inovatif hingga 75%.
        </p>
        <div className="mt-[22px] flex flex-col sm:flex-row justify-center w-full  gap-3">
          <button className="btn bg-primary text-white gap-2 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clipPath="url(#clip0_217_482)">
                <path
                  d="M14.8044 13.6153L16.9606 14.6916C16.8584 15.2023 16.5822 15.6617 16.179 15.9915C15.7759 16.3213 15.2708 16.501 14.75 16.5C12.9604 16.498 11.2447 15.7862 9.97922 14.5208C8.71378 13.2554 8.00198 11.5396 8 9.75003C7.99985 9.22983 8.17997 8.72565 8.50968 8.32329C8.8394 7.92093 9.29835 7.64524 9.80844 7.54315L10.8847 9.6994L9.96875 11.0625C9.90031 11.1652 9.85825 11.2832 9.84631 11.406C9.83437 11.5288 9.85292 11.6527 9.90031 11.7666C10.4369 13.042 11.4515 14.0565 12.7269 14.5932C12.8411 14.6426 12.966 14.6629 13.09 14.6521C13.2141 14.6413 13.3335 14.5998 13.4375 14.5313L14.8044 13.6153ZM22.25 12C22.2504 13.6833 21.8149 15.3381 20.986 16.8032C20.1572 18.2683 18.9631 19.4938 17.52 20.3605C16.077 21.2272 14.4341 21.7055 12.7514 21.7489C11.0686 21.7923 9.4033 21.3993 7.9175 20.6082L4.72531 21.6722C4.46102 21.7604 4.1774 21.7731 3.90624 21.7092C3.63509 21.6452 3.38711 21.5069 3.19011 21.3099C2.99311 21.1129 2.85486 20.8649 2.79087 20.5938C2.72688 20.3226 2.73967 20.039 2.82781 19.7747L3.89187 16.5825C3.19639 15.2749 2.80793 13.8261 2.756 12.3459C2.70406 10.8658 2.99001 9.39328 3.59213 8.04015C4.19425 6.68703 5.09672 5.48885 6.23105 4.53658C7.36537 3.58431 8.70173 2.90298 10.1387 2.54429C11.5756 2.1856 13.0754 2.15899 14.5242 2.46647C15.973 2.77395 17.3327 3.40745 18.5001 4.31888C19.6675 5.2303 20.6119 6.3957 21.2616 7.72662C21.9114 9.05753 22.2494 10.519 22.25 12ZM18.5 14.25C18.5001 14.1107 18.4614 13.9741 18.3882 13.8555C18.315 13.737 18.2102 13.6411 18.0856 13.5788L15.0856 12.0788C14.9675 12.0199 14.836 11.9933 14.7043 12.0015C14.5726 12.0097 14.4455 12.0526 14.3356 12.1257L12.9584 13.0444C12.3262 12.6969 11.806 12.1766 11.4584 11.5444L12.3772 10.1672C12.4503 10.0574 12.4931 9.93019 12.5013 9.79851C12.5096 9.66683 12.4829 9.53531 12.4241 9.41722L10.9241 6.41722C10.8619 6.29166 10.7658 6.18603 10.6467 6.11229C10.5275 6.03855 10.3901 5.99967 10.25 6.00003C9.25544 6.00003 8.30161 6.39512 7.59835 7.09838C6.89509 7.80164 6.5 8.75547 6.5 9.75003C6.50248 11.9373 7.37247 14.0343 8.91911 15.5809C10.4657 17.1276 12.5627 17.9975 14.75 18C15.2425 18 15.7301 17.903 16.1851 17.7146C16.64 17.5261 17.0534 17.2499 17.4017 16.9017C17.7499 16.5535 18.0261 16.1401 18.2145 15.6851C18.403 15.2301 18.5 14.7425 18.5 14.25Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_217_482">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            KONSULTASI GRATIS
          </button>
          <button className="btn border borde-primary text-primary font-bold">
            PRODUK KAMI
          </button>
        </div>
        <div className="py-[50px]">
          <h2 className="seconds-heading text-center">
            Dipercaya Oleh Berbagai Industri
          </h2>
          <div className="flex flex-wrap justify-center gap-[12px] md:gap-[24px] lg:gap-[40px] mt-[16px] lg:mt-[32px]">
            <img
              src="/images/home/bebeclub.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/telkomsel.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/nutricia.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/samsung.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/nutriclub.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/unilever.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
            <img
              src="/images/home/bayer.png"
              alt="sponsor"
              className="flex-grow-0 flex-shrink-0 h-[45px] lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
