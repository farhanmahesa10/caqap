import React from "react";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-[50px] wrapper bg-[#1283C2]">
      <div className=" container py-[50px] ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[100px] lg:gap-[200px]">
          <div className="md:max-w-[500px]">
            <h2 className="seconds-heading text-center text-white md:text-start lg:text-[32px]">
              Kami membantu bisnis anda berkembang
            </h2>
            <p className="desc-2  text-center text-white mt-4 md:text-start">
              <span className="md:font-bold"> PT. Caqap CRM</span>
              <br />
              Jalan Joglo Raya No.52, Jakarta, Indonesia 11640.{" "}
              <br className="md:hidden" />
              <a href="#" className="md:font-bold underline">
                Lihat Map
              </a>
            </p>

            <div className="mt-4 flex gap-4 justify-center md:justify-start flex-wrap">
              <button className="bg-white flex rounded-[4px]">
                <p className="p-3 border-r font-medium border-neutral-400">
                  <FiPhone />
                </p>
                <p className="p-3 font-medium whitespace-nowrap">
                  (+62) 0210123123
                </p>
              </button>
              <button className="bg-white flex rounded-[4px]">
                <p className="p-3 border-r font-medium border-neutral-400">
                  <BsEnvelope />
                </p>
                <p className="p-3 font-medium whitespace-nowrap">
                  sales@caqap.id
                </p>
              </button>
            </div>
          </div>

          <div className="flex flex-col  gap-4 items-center  md:items-start">
            <p className="desc text-white lg:text-[17px]">Hubungi Kami</p>
            <p className="desc text-white lg:text-[17px]">Kebijakan Privasi</p>
            <p className="desc text-white lg:text-[17px]">Konsultasi Gratis</p>
          </div>
        </div>
        <hr className="my-8 text-[#7DD1FF]" />
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          <p className="desc text-white lg:text-[17px]">
            Copyright ©2024 PT Caqap Teknologi Indonesia
          </p>
          <div className="flex gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="white" />
              <g clip-path="url(#clip0_31_91)">
                <path
                  d="M25.75 15.9999C25.7469 18.3828 24.8726 20.6824 23.2917 22.4655C21.7109 24.2485 19.5326 25.392 17.1671 25.6805C17.1145 25.6864 17.0611 25.6812 17.0107 25.665C16.9602 25.6489 16.9137 25.6222 16.8743 25.5868C16.8348 25.5513 16.8034 25.5079 16.782 25.4594C16.7605 25.411 16.7496 25.3585 16.75 25.3055V18.2499H19C19.1028 18.2501 19.2045 18.2292 19.2989 18.1884C19.3933 18.1476 19.4783 18.0879 19.5487 18.0129C19.619 17.9379 19.6732 17.8493 19.7078 17.7525C19.7424 17.6557 19.7568 17.5528 19.75 17.4502C19.7334 17.2573 19.6444 17.0779 19.5009 16.9479C19.3574 16.818 19.1701 16.7472 18.9765 16.7499H16.75V14.4999C16.75 14.102 16.908 13.7205 17.1893 13.4392C17.4706 13.1579 17.8521 12.9999 18.25 12.9999H19.75C19.8528 13.0001 19.9545 12.9792 20.0489 12.9384C20.1433 12.8976 20.2283 12.8379 20.2987 12.7629C20.369 12.6879 20.4232 12.5993 20.4578 12.5025C20.4924 12.4057 20.5068 12.3028 20.5 12.2002C20.4834 12.007 20.3941 11.8273 20.2502 11.6973C20.1063 11.5673 19.9185 11.4968 19.7246 11.4999H18.25C17.4543 11.4999 16.6912 11.8159 16.1286 12.3785C15.566 12.9411 15.25 13.7042 15.25 14.4999V16.7499H13C12.8971 16.7496 12.7954 16.7705 12.701 16.8113C12.6066 16.8521 12.5216 16.9118 12.4513 16.9868C12.3809 17.0618 12.3268 17.1504 12.2921 17.2472C12.2575 17.3441 12.2431 17.447 12.25 17.5495C12.2665 17.7427 12.3558 17.9224 12.4997 18.0524C12.6436 18.1824 12.8314 18.2529 13.0253 18.2499H15.25V25.3074C15.2503 25.3603 15.2394 25.4127 15.218 25.4611C15.1967 25.5095 15.1653 25.5528 15.126 25.5882C15.0866 25.6237 15.0403 25.6504 14.9899 25.6666C14.9395 25.6828 14.8863 25.6882 14.8337 25.6824C12.405 25.3866 10.1758 24.1898 8.5874 22.3288C6.99901 20.4678 6.16716 18.0783 6.25652 15.6333C6.44402 10.5708 10.5446 6.45517 15.6109 6.25829C16.9225 6.20748 18.231 6.42175 19.4579 6.88826C20.6848 7.35477 21.8051 8.06395 22.7516 8.97338C23.6981 9.88281 24.4515 10.9738 24.9667 12.1811C25.4819 13.3884 25.7483 14.6872 25.75 15.9999Z"
                  fill="#1F506A"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_91">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="white" />
              <g clip-path="url(#clip0_31_103)">
                <path
                  d="M27.0307 11.2806L24.2275 14.0837C23.6613 20.6481 18.1254 25.7499 11.5 25.7499C10.1388 25.7499 9.01661 25.5343 8.16442 25.1087C7.47723 24.7646 7.19598 24.3962 7.12567 24.2912C7.06298 24.1972 7.02234 24.0902 7.0068 23.9782C6.99125 23.8663 7.00121 23.7523 7.03592 23.6448C7.07062 23.5372 7.12919 23.4389 7.20723 23.3572C7.28527 23.2754 7.38078 23.2124 7.48661 23.1727C7.51098 23.1634 9.75911 22.2999 11.1869 20.6565C10.3951 20.0055 9.70387 19.241 9.13567 18.3877C7.97317 16.6618 6.67192 13.6637 7.07317 9.18337C7.08589 9.04101 7.13902 8.90525 7.22631 8.79207C7.31361 8.67889 7.43142 8.59301 7.56588 8.54454C7.70034 8.49608 7.84586 8.48704 7.98528 8.51851C8.12471 8.54997 8.25224 8.62061 8.35286 8.72212C8.38567 8.75494 11.4729 11.8252 15.2472 12.8209V12.2499C15.2458 11.6512 15.3642 11.0583 15.5954 10.5061C15.8266 9.95381 16.1659 9.45341 16.5935 9.03431C17.0087 8.61968 17.5028 8.29241 18.0465 8.07182C18.5903 7.85123 19.1727 7.74178 19.7594 7.74994C20.5465 7.7577 21.3182 7.96899 21.9995 8.36325C22.6807 8.75752 23.2484 9.32135 23.6472 9.99994H26.5C26.6485 9.99982 26.7936 10.0437 26.917 10.1261C27.0405 10.2085 27.1367 10.3257 27.1935 10.4628C27.2503 10.6 27.2652 10.7509 27.2362 10.8964C27.2072 11.042 27.1357 11.1757 27.0307 11.2806Z"
                  fill="#1F506A"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_103">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="white" />
              <g clip-path="url(#clip0_31_95)">
                <path
                  d="M19 16C19 16.5933 18.8241 17.1734 18.4944 17.6667C18.1648 18.1601 17.6962 18.5446 17.1481 18.7716C16.5999 18.9987 15.9967 19.0581 15.4147 18.9424C14.8328 18.8266 14.2982 18.5409 13.8787 18.1213C13.4591 17.7018 13.1734 17.1672 13.0576 16.5853C12.9419 16.0033 13.0013 15.4001 13.2284 14.8519C13.4554 14.3038 13.8399 13.8352 14.3333 13.5056C14.8266 13.1759 15.4067 13 16 13C16.7956 13 17.5587 13.3161 18.1213 13.8787C18.6839 14.4413 19 15.2044 19 16ZM25.75 11.5V20.5C25.7485 21.8919 25.1949 23.2264 24.2107 24.2107C23.2264 25.1949 21.8919 25.7485 20.5 25.75H11.5C10.1081 25.7485 8.77358 25.1949 7.78933 24.2107C6.80509 23.2264 6.25149 21.8919 6.25 20.5V11.5C6.25149 10.1081 6.80509 8.77358 7.78933 7.78933C8.77358 6.80509 10.1081 6.25149 11.5 6.25H20.5C21.8919 6.25149 23.2264 6.80509 24.2107 7.78933C25.1949 8.77358 25.7485 10.1081 25.75 11.5ZM20.5 16C20.5 15.11 20.2361 14.24 19.7416 13.4999C19.2471 12.7599 18.5443 12.1831 17.7221 11.8425C16.8998 11.5019 15.995 11.4128 15.1221 11.5865C14.2492 11.7601 13.4474 12.1887 12.818 12.818C12.1887 13.4474 11.7601 14.2492 11.5865 15.1221C11.4128 15.995 11.5019 16.8998 11.8425 17.7221C12.1831 18.5443 12.7599 19.2471 13.4999 19.7416C14.24 20.2361 15.11 20.5 16 20.5C17.1931 20.4988 18.337 20.0243 19.1806 19.1806C20.0243 18.337 20.4988 17.1931 20.5 16ZM22.75 10.375C22.75 10.1525 22.684 9.93499 22.5604 9.74998C22.4368 9.56498 22.2611 9.42078 22.0555 9.33564C21.85 9.25049 21.6238 9.22821 21.4055 9.27162C21.1873 9.31502 20.9868 9.42217 20.8295 9.5795C20.6722 9.73684 20.565 9.93729 20.5216 10.1555C20.4782 10.3738 20.5005 10.6 20.5856 10.8055C20.6708 11.0111 20.815 11.1868 21 11.3104C21.185 11.434 21.4025 11.5 21.625 11.5C21.9234 11.5 22.2095 11.3815 22.4205 11.1705C22.6315 10.9595 22.75 10.6734 22.75 10.375Z"
                  fill="#1F506A"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_95">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
