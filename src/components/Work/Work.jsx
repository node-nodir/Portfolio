import React from "react";
import { TfiGallery } from "react-icons/tfi";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ------> Carausel data
const data = [
  {
    title: "Elektronika do’konlari",
  },
  {
    title: "Oziq-ovqat do’kolari",
  },
  {
    title: "Konselariya do’konlari",
  },
  {
    title: "Aksesuar do’konlari",
  },
  {
    title: "Kosmetika do’konlari",
  },
  {
    title: "Konselariya do’konlari",
  },
];

function Work() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section id="experience" className="py-10 sm:py-20">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Portfolio{" "}
          <span className="inline-block ml-2">
            <TfiGallery className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <p className="text-gray-300 text-center max-w-[700px] w-full mx-auto mt-8 sm:mt-12">
          Here's a list of some of the projects I've done. I gained a lot of experience while doing
          these projects.
        </p>
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          className="mySwiper mt-12"
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
        >
          {data?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="w-[200px] h-[200px] border">
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex space-x-2">
            <p>You can view all projects</p>
            <div
              ref={navigationPrevRef}
              className="flex items-center justify-center w-8 h-8 border-2 border-[#64ffda] bg-[#0a192f] hover:bg-[rgba(100,255,218,0.1)] cursor-pointer rounded-full duration-150"
            >
              {<HiArrowSmLeft className="w-[20px] h-[20px] font-light text-[#64ffda]" />}
            </div>
            <div
              ref={navigationNextRef}
              className="flex items-center justify-center w-8 h-8 border-2 border-[#64ffda] bg-[#0a192f] hover:bg-[rgba(100,255,218,0.1)] cursor-pointer rounded-full duration-150"
            >
              {<HiArrowSmRight className="w-[20px] h-[20px] font-light text-[#64ffda]" />}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Work;
