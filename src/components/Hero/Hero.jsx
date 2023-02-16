import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";

// ------> Images
import Front from "../../Assets/Images/dev.png";

// ------> Css
import "./hero.css";

function Hero() {
  return (
    <section id="home" className="mt-12 sm:mt-[70px] pt-14 pb-8 sm:pt-36 sm:pb-24">
      <div className="container flex flex-wrap justify-center lg:flex lg:items-center lg:justify-between">
        <div className="max-w-[500px] text-center lg:text-start">
          <h2 className="flex items-end font-semibold text-4xl sm:text-5xl text-white tracking-normal !text-center">
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
          <strong className="inline-block dev font-normal text-base sm:text-2xl mt-3 mb-3 sm:mt-2 sm:mb-3 text-gray-300 -z-20">
            Frontend developer
          </strong>
          <p className="text-gray-300 text-base">
            Front End Developer with more than half a year of experience working with JavaScript,
            React Js, Next Js to deliver exceptional customer experiences. Highly responsible and
            open-minded employee.
          </p>
          <a
            href="tel:+998970130322"
            className="flex items-center mx-auto lg:mx-0 w-fit text-sm border border-[#64ffda] text-[#64ffda] rounded-[4px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-4 duration-200 mt-6 group"
          >
            Contact Me <BsTelephoneOutbound className="ml-2 text-[#64ffda]" />
          </a>
        </div>
        <img
          className="max-w-[400px] w-full h-[370px] sm:ml-5 mt-5 sm:mt-0"
          src={Front}
          alt="front-img"
        />
      </div>
    </section>
  );
}

export default Hero;
