import React from "react";
import { IoIosCode } from "react-icons/io";
import { BsTelephoneOutbound } from "react-icons/bs";

// ------> Css
import "./hero.css";

function Hero() {
  return (
    <section id="home" className="mt-12 sm:mt-[70px] pt-14 sm:py-36">
      <div className="container">
        <div className="max-w-[600px]">
          <h2 className="flex items-end font-semibold text-4xl sm:text-5xl text-white tracking-normal">
            Hi, I'm
            <ul id="enthusiasm" className="list flex items-center m-0 p-0">
              <li id="N" className="item">
                N
              </li>
              <li id="O" className="item">
                o
              </li>
              <li id="D" className="item">
                d
              </li>
              <li id="I" className="item">
                i
              </li>
              <li id="R" className="item">
                r
              </li>
              <li id="B" className="item">
                b
              </li>
              <li id="E" className="item">
                e
              </li>
              <li id="K" className="item">
                k
              </li>
              <li id="DOT" className="item">
                .
              </li>
            </ul>
          </h2>
          <strong className="dev flex items-center font-medium text-base sm:text-2xl mt-3 mb-3 sm:mt-2 sm:mb-3 text-gray-300 mr-2 -z-20">
            Frontend developer{" "}
            <span className="inline-block ml-2">
              <IoIosCode />
            </span>
          </strong>
          <p className="text-gray-300 text-base">
            Front End Developer with more than half a year of experience working with JavaScript,
            React Js, Next Js to deliver exceptional customer experiences. Higly responsible and
            open-minded employee.
          </p>
          <a
            href="tel:+998970130322"
            className="flex items-center mx-auto sm:mx-0 w-fit text-sm border border-[#64ffda] text-[#64ffda] rounded-[4px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-4 duration-200 mt-6 group"
          >
            Contact Me <BsTelephoneOutbound className="ml-2 text-[#64ffda]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
