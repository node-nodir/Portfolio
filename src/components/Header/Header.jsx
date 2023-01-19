import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbDownload } from "react-icons/tb";
// ------> Pdf
import Resume from "../../Assets/pdf/resume.pdf";

function Header() {
  const [scrollDown, setScrollDown] = useState("");
  const [showModal, setShowModal] = useState(false);

  let lastScrollY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      if (lastScrollY < window.scrollY) {
        setScrollDown("nav-hidden");
      } else {
        setScrollDown("");
      }
    },
    []
  );

  // ------> Check Scroll
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <header
      className={`sm:${scrollDown} bg-[#0a192f] fixed top-0 sm:top-0 w-full h-fit duration-500 border-b border-b-[rgba(100,255,218,0.1)]`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-3 sm:py-4">
          <a
            className="font-serif flex items-center justify-center font-semibold text-base text-[#64ffda] border-2 border-dashed border-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] rounded-full w-8 sm:w-10 h-8 sm:h-10 duration-200"
            href="/"
          >
            N
          </a>
          <div className="hidden sm:flex items-center">
            <ul className="flex items-center space-x-6">
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a className="nav_link text-white group-hover:text-[#64ffda] duration-150" href="/">
                  Experience
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a className="nav_link text-white group-hover:text-[#64ffda] duration-150" href="/">
                  Work
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a className="nav_link text-white group-hover:text-[#64ffda] duration-150" href="/">
                  Contactme
                </a>
              </li>
            </ul>
            <a
              href={Resume}
              download="Nodirbek's resume.pdf"
              className="flex items-center text-sm ml-5 border border-[#64ffda] text-[#64ffda] rounded-[6px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-3 duration-200"
            >
              Resume
              <span className="inline-block ml-2">
                <TbDownload />
              </span>
            </a>
          </div>
          <button className="block sm:hidden" onClick={() => setShowModal(true)}>
            <AiOutlineUnorderedList className="text-white text-2xl" />
          </button>
        </nav>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
}

export default Header;
