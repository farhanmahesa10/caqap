import React from "react";
import ArrowLeftIcon from "../../assets/leftarrow.svg";
import OmniIcon from "../../assets/omnichat.svg";
import SalesImg from "../../assets/sales.svg";
import CloudImg from "../../assets/cloud.svg";
import Customermg from "../../assets/customer.svg";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";

const ProductDropdown = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed  top-0 md:top-[103px] w-screen md:w-full h-screen bg-white md:bg-opacity-0 md:h-auto  z-[61] md:wrapper ">
        <div className="md:container ">
          <ClickAwayListener
            onClickAway={() => {
              setOpen(false);
            }}
          >
            <>
              <div
                className="mt-[42px] md:mt-0 p-[24px] flex flex-col gap-[24px] bg-white  md:shadow-product"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div
                  className="flex gap-2  md:hidden items-center clickable md:cursor-default"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img
                    src={ArrowLeftIcon}
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <p className="desc text-primary-dark md:text-[19px] md:font-bold">
                    Semua Produk
                  </p>
                </div>
                <p className="desc hidden md:block text-primary-dark md:text-[19px] md:font-bold">
                  Semua Produk
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px]  ">
                  <div
                    className="p-2 rounded-[4px] bg-[#F8FBFC] border border-[#D1E4EA] clickable"
                    onClick={() => {
                      navigate("/produk");
                    }}
                  >
                    <div className="md:flex  gap-[12px]">
                      <div className="flex-shrink-0 flex-grow-0">
                        <img
                          src={OmniIcon}
                          alt="icon"
                          className="flex-shrink-0 flex-grow-0"
                        />
                      </div>
                      <div className="">
                        <p className="mt-2 md:mt-0 desc md:text-[19px] text-primary-dark">
                          Omnichannel Chat
                        </p>
                        <p className="mt-1  text-[#7197AC] desc-2">
                          Lacak Penjualan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-[4px] ">
                    <div className="md:flex  gap-[12px]">
                      <div className="flex-shrink-0 flex-grow-0">
                        <img
                          src={SalesImg}
                          alt="icon"
                          className="flex-shrink-0 flex-grow-0"
                        />
                      </div>
                      <div>
                        <p className="mt-2 md:mt-0 desc text-primary md:text-[19px]">
                          Sales Marketing
                        </p>
                        <p className="mt-1 text-[#7197AC] desc-2 ">
                          Atur pemasaran produk anda
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-[4px] ">
                    <div className="md:flex  gap-[12px]">
                      <div className="flex-shrink-0 flex-grow-0">
                        <img
                          src={CloudImg}
                          alt="icon"
                          className="flex-shrink-0 flex-grow-0"
                        />
                      </div>
                      <div>
                        <p className="mt-2 md:mt-0 desc text-primary-dark md:text-[19px]">
                          Cloud Call Center
                        </p>
                        <p className="mt-1 text-[#7197AC] desc-2 ">
                          Otomatiskan proses operasional bisnis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-[4px] ">
                    <div className="md:flex gap-2">
                      <div className="flex-shrink-0 flex-grow-0">
                        <img
                          src={Customermg}
                          alt="icon"
                          className="flex-shrink-0 flex-grow-0"
                        />
                      </div>
                      <div>
                        <p className="mt-2 md:mt-0 desc text-primary-dark  md:text-[19px]">
                          Customer Service
                        </p>
                        <p className="mt-1 text-[#7197AC] desc-2 ">
                          Kelola pelayanan pelanggan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-gradient-to-r from-white  via-[#00B8F0] to-white "></div>
                <div className="text-center">
                  <p className="text-ubuntu text-[14px] md:text-[16px] text-primary-dark">
                    Butuh solusi khusus untuk kebutuhan bisnis anda? Silahkan
                    konsultasikan kepada kami
                  </p>
                </div>
                <div className=" flex gap-4 justify-center  flex-wrap w-full">
                  <button className="bg-white flex rounded-[4px] border border-primary">
                    <p className="py-2 px-3 border-r font-medium border-[#E3E3E3] text-primary-dark">
                      <FiPhone className="font-bold" />
                    </p>
                    <p className="py-2 px-3 text-[14px] text-primary-dark font-medium whitespace-nowrap">
                      (+62) 0210123123
                    </p>
                  </button>
                  <button className="bg-white flex rounded-[4px] border border-primary">
                    <p className="py-2 px-3 border-r font-medium border-[#E3E3E3] text-primary-dark">
                      <BsEnvelope className="font-bold" />
                    </p>
                    <p className="py-2 px-3 text-[14px] text-primary-dark font-medium whitespace-nowrap">
                      sales@caqap.id
                    </p>
                  </button>
                </div>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-white  via-[#00B8F0] to-white "></div>
            </>
          </ClickAwayListener>
        </div>
      </div>
    </>
  );
};

export default ProductDropdown;
