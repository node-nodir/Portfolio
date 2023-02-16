import React from "react";
import { FaUserTie } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import Marquee from "react-fast-marquee";

// ------> Css
import "./about.css";

function About() {
  return (
    <section id="about" className="py-10">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          About Me{" "}
          <span className="inline-block ml-2">
            <FaUserTie className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <div className="max-w-[700px] mx-auto mt-8">
          <p className="text-gray-300 text-center">
            Hello there! My full name is Khalikulov Nodirbek. I'm from Uzbekistan, I live in
            Tashkent, but I was born in Samarkand. I like to create different websites. My interest
            in web development started in 2020. I first started learning programming from Html &&
            Css. And learned JavaScript, one of the programming languages.
          </p>
          <div className="mt-5">
            <p className="text-gray-300 text-center">
              Here are a few technologies I’ve been working with recently:
            </p>
            <Marquee
              className="flex mt-5 -z-10"
              direction={"left"}
              speed={60}
              gradientWidth={0}
              // pauseOnClick={true}
            >
              <li className="flex items-center text-gray-300 cursor-pointer ml-5 border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
                <span className="inline-block">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>{" "}
                JavaScript (ES6+)
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer ml-5 border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
                <span className="inline-block">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                React Js
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer ml-5 border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
                <span className="inline-block">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                TypeScript
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer ml-5 border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
                <span className="inline-block">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                Next Js
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer ml-5 border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
                <span className="inline-block">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                Tailwind Css
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer ml-5 border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
                <span className="inline-block">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                Redux && Context
              </li>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
