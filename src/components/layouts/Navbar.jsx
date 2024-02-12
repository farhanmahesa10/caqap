import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import WAIcon from "../../assets/whatsapp.svg";
import TimesImg from "../../assets/timescircle.svg";
import ProductDropdown from "./ProductDropdown";
const Navbar = (props) => {
  const { activePage } = props;
  const [showSide, setShowSide] = useState(false);
  const [showProductNav, setShowProductNav] = useState(false);

  // #7D5DFF color active

  const toggleProductNav = useCallback(() => {
    setShowProductNav(!showProductNav);
  }, [showProductNav]);

  const menus = useMemo(() => {
    return [
      {
        link: "/",
        label: "Beranda",
        key: "beranda",
      },
      {
        link: "#",
        customClick: (e) => {
          setShowProductNav(!showProductNav);
        },
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
    ];
  }, [showProductNav]);

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      setShowSide(false);
    });
  }, []);
  return (
    <div className="mb-[103px]">
      {/* desktop nav */}
      <div className="wrapper hidden md:flex fixed w-full top-0 pt-[24px] backdrop-blur-md z-40">
        <div className="container">
          <div
            className="py-[17px]  px-3 bg-white flex justify-between items-center"
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
                if (r.customClick) {
                  return (
                    <p
                      key={`navbar-desk-${i}`}
                      className={`hover:text-primary hover:cursor-pointer ${
                        r.key === activePage && "text-primary"
                      }`}
                      onClick={r.customClick}
                    >
                      {r.label}
                    </p>
                  );
                }

                return (
                  <Link to={r.link} key={`nav---${i}`}>
                    <p
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
          <div className="h-[1px] bg-gradient-to-r from-white  via-[#00B8F0] to-white "></div>
        </div>
      </div>

      {/* mobil nav */}
      <div className="fixed w-full top-0">
        <div
          className="  backdrop-blur-md z-40 py-[18px] rounded-[4px]  px-4 bg-white flex justify-between md:hidden items-center"
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
        <div className="h-[1px] bg-gradient-to-r from-white  via-[#00B8F0] to-white "></div>
      </div>

      {/* side menu */}
      <div
        className={`fixed md:hidden overflow-hidden w-screen top-0 z-[60]  bg-white ${
          !showSide ? "h-0" : "h-screen"
        } transition-all duration-200`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex-shrink-0 w-full p-[24px] flex flex-col  items-center mt-[120px] gap-[24px]">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-[40px] flex-shrink-0 flex-grow-0"
          />
          {menus.map((r) => {
            if (r.customClick) {
              return (
                <div
                  className="flex items-center gap-3 clickable p-1"
                  onClick={r.customClick}
                  key={`nav-` + r.key}
                >
                  <p
                    className={` ${
                      activePage === r.key && "text-primary"
                    } text-ubuntu text-[24px]`}
                  >
                    {r.label}
                  </p>
                </div>
              );
            }
            return (
              <Link key={`nav-` + r.key} to={r.link}>
                <div className="flex items-center gap-3 clickable p-1">
                  <p
                    className={` ${
                      activePage === r.key && "text-primary"
                    } text-ubuntu text-[24px]`}
                  >
                    {r.label}
                  </p>
                </div>
              </Link>
            );
          })}
          <Link href={"#"} className="w-full">
            <button className="btn bg-primary-gradient gap-2  text-white w-full">
              <img src={WAIcon} alt="WA Icon" /> Hubungi Kami
            </button>
          </Link>

          <div className="clickable" onClick={() => setShowSide(false)}>
            <img src={TimesImg} alt="times circle" />
          </div>
        </div>
      </div>

      {/* product nav*/}

      {showProductNav && (
        <ProductDropdown open={showProductNav} setOpen={setShowProductNav} />
      )}
    </div>
  );
};

export default Navbar;
