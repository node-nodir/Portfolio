import React from "react";
import { BiUser } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";

// ------> Pdf
import Resume from "../../Assets/pdf/resume.pdf";

function Modal({ showModal, setShowModal }) {
  // ------> Check_wrapper
  const handleClick = (evt) => {
    if (evt.target.id === "wrapper") {
      setShowModal(false);
    } else {
      return;
    }
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className={`${
        showModal ? "bg-black backdrop-blur-sm bg-opacity-25 fixed w-full h-full" : ""
      }`}
    >
      <div
        className={`${
          showModal ? "top-[55%]" : " -bottom-[900px]"
        } w-full absolute h-full duration-300 bg-white rounded-t-xl px-4 z-50`}
      >
        <div className="flex items-center justify-end">
          <button className="">
            <VscChromeClose />
          </button>
        </div>
        <ul className="grid grid-cols-3 gap-5 mt-14">
          <li
            onClick={() => setShowModal(false)}
            className="border hover:border-[#0a192f] rounded-md duration-300"
          >
            <a
              className="flex flex-col items-center font-medium text-sm text-[#0a192f] py-2 border"
              href="#home"
            >
              <span className="block text-lg  mb-1">
                <AiOutlineHome />
              </span>
              Home
            </a>
          </li>
          <li
            onClick={() => setShowModal(false)}
            className="border hover:border-[#0a192f] rounded-md duration-300"
          >
            <a
              className="flex flex-col items-center font-medium text-sm text-[#0a192f] py-2"
              href="#about"
            >
              <span className="block text-lg  mb-1">
                <BiUser />
              </span>
              About
            </a>
          </li>
          <li
            onClick={() => setShowModal(false)}
            className="border hover:border-[#0a192f] rounded-md duration-300"
          >
            <a
              className="flex flex-col items-center font-medium text-sm text-[#0a192f] py-2"
              href="/"
            >
              <span className="block text-lg  mb-1">
                <MdWorkOutline />
              </span>
              Experience
            </a>
          </li>
          <li
            onClick={() => setShowModal(false)}
            className="border hover:border-[#0a192f] rounded-md duration-300"
          >
            <a
              href={Resume}
              download="Nodirbek's resume.pdf"
              className="flex flex-col items-center font-medium text-sm text-[#0a192f] py-2"
            >
              <span className="block text-lg  mb-1">
                <TfiGallery />
              </span>
              Portfolio
            </a>
          </li>
          <li
            onClick={() => setShowModal(false)}
            className="border hover:border-[#0a192f] rounded-md duration-300"
          >
            <a
              className="flex flex-col items-center font-medium text-sm text-[#0a192f] py-2"
              href="/"
            >
              <span className="block text-lg  mb-1">
                <TbBrandTelegram />
              </span>
              Contactme
            </a>
          </li>
          <a
            href={Resume}
            download="Nodirbek's resume.pdf"
            className="flex items-center w-fit h-fit text-sm border border-[#0a192f] text-white hover:text-[#0a192f] rounded-[6px] bg-[#0a192f] hover:bg-white py-2 px-3 mt-[10px] duration-300"
          >
            Resume
            <span className="inline-block ml-2">
              <TbDownload />
            </span>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
