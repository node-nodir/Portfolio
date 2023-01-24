import React from "react";
import { FaUserTie } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";

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
          <p className="text-gray-300 text-start sm:text-center">
            Hello there! My full name is Khalikulov Nodirbek. I'm from Uzbekistan, I live in
            Tashkent, but I was born in Samarkand. I like to create different websites. My interest
            in web development started in 2020. I first started learning programming from Html &&
            Css. And learned JavaScript, one of the programming languages.
          </p>
          <div className="mt-5">
            <p className="text-gray-300 text-start">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
              <li className="flex items-center text-gray-300 cursor-pointer">
                <span className="inline-block mr-2">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>{" "}
                JavaScript (ES6+)
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer">
                <a href="https://reactjs.org/">
                  <span className="inline-block mr-2">
                    <BiCaretRight className="text-[#64ffda]" />
                  </span>
                  React Js
                </a>
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer">
                <span className="inline-block mr-2">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                TypeScript
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer">
                <span className="inline-block mr-2">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                Next Js
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer">
                <span className="inline-block mr-2">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                Tailwind Css
              </li>
              <li className="flex items-center text-gray-300 cursor-pointer">
                <span className="inline-block mr-2">
                  <BiCaretRight className="text-[#64ffda]" />
                </span>
                Redux && Context
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
