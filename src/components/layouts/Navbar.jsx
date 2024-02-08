import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WAIcon from "../../assets/whatsapp.svg";
const Navbar = (props) => {
  const { activePage } = props;
  const [showSide, setShowSide] = useState(false);
  // #7D5DFF color active
  const [menus, setMenus] = useState([
    {
      link: "/",
      label: "Beranda",
      key: "beranda",
    },
    {
      link: "/produk",
      label: "Produk",
      key: "produk",
    },
    {
      link: "/harga",
      label: "Harga",
      key: "harga",
    },
    {
      link: "/perusahaan",
      label: "Perusahaan",
      key: "perusahaan",
    },
  ]);

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      setShowSide(false);
    });
  }, []);
  return (
    <div>
      <div className="wrapper hidden md:flex">
        <div className="container">
          <div
            className="py-[17px]  px-3 bg-white flex justify-between"
            style={{
              boxShadow: "0px 15px 24px 0px #10679633",
            }}
          >
            <div className="clickable">
              <Link to={"/"}>
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="flex gap-6 items-center">
              {menus.map((r, i) => {
                return (
                  <Link to={r.link} key={`nav-mob-${i}`}>
                    <p
                      key={`navbar-${i}`}
                      className={`hover:text-primary ${
                        r.key === activePage && "text-primary"
                      }`}
                    >
                      {r.label}
                    </p>
                  </Link>
                );
              })}

              <Link to={"/contact"}>
                <button className="btn bg-primary gap-2  text-white w-full">
                  <img src={WAIcon} alt="wa icon" /> Hubungi Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pt-[42px] pb-[18px] px-4 bg-white flex justify-between md:hidden"
        style={{
          boxShadow: "0px 15px 24px 0px #10679633",
        }}
      >
        <div className="clickable" onClick={() => setShowSide(true)}>
          <img src="/images/burger.png" alt="humburger" />
        </div>
        <div className="clickable">
          <Link to={"/"}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="py-[6px] px-[11px] bg-[#D8FFDE] rounded-[4px] clickable">
          <img src="/images/whatsapp.png" alt="whatsapp" />
        </div>
      </div>
      {/* side menu */}
      <div
        className={`w-screen h-screen fixed top-0 duration-100 backdrop-blur-sm ${
          !showSide && "translate-x-full"
        }`}
        onClick={() => {
          setShowSide(false);
        }}
      >
        <div
          className={`fixed md:hidden top-0 -right-2 z-[70] duration-200 w-80 h-screen overflow-y-auto transition-transform  shadow-lg bg-white ${
            !showSide && "translate-x-full"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex-shrink-0 border-b p-4 flex justify-between items-center">
            <img src="/images/logo.png" alt="logo" className="h-[40px]" />
            {/* <FaTimes className="clickable" onClick={() => setShowSide(false)} /> */}
          </div>
          <div className="  gap-[24px] flex flex-col mt-2 p-4 ">
            {menus.map((r) => {
              return (
                <Link key={`nav-` + r.key} href={r.link}>
                  <div className="flex items-center gap-3 clickable">
                    <p className={` ${activePage === r.key && "text-primary"}`}>
                      {r.label}
                    </p>
                  </div>
                </Link>
              );
            })}
            <div className="w-full">
              <Link href={"/login"} className="w-full">
                <button className="btn bg-primary-gradient  text-white w-full">
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
