import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banners.css";

function Banners() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={true}
        scrollbar={{ draggable: true }}
        className="relative w-full h-screen overflow-hidden rounded-box"
      >
        <SwiperSlide>
          <img
            className=" object-cover object-bottom "
            style={{ width: "100%", height: "100%" }}
            src="https://ik.imagekit.io/c1jhxlxiy/129492%20(1).jpg?updatedAt=1712430293331"
            alt="banner"
          />
          {/* <div className="h-full w-[85%] mx-auto flex items-center relative">
            {/* <div className="card w-96 glass shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-5xl text-emerald-950 font-bold">
                  Card title!
                </h2>
                <p className="text-start text-gray-600 text-lg my-5">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-start">
                  <button className="btn bg-emerald-700 text-white border-none text-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-bottom"
            style={{ width: "100%", height: "100%" }}
            src="https://ik.imagekit.io/c1jhxlxiy/2148598586.jpg?updatedAt=1712430293288"
            alt="banner1"
          />
          {/* <div className="h-full w-[85%] mx-auto flex items-center relative">
            <div className="card w-96 glass shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-5xl text-purple-900 font-bold">
                  Card title!
                </h2>
                <p className="text-start text-gray-600 text-lg my-5">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-start">
                  <button className="btn bg-purple-700 text-white border-none text-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-bottom"
            style={{ width: "100%", height: "100%" }}
            src="https://ik.imagekit.io/c1jhxlxiy/15112%20(1).jpg?updatedAt=1712430531692"
            alt="banner"
          />
          {/* <div className="h-full w-[85%] mx-auto flex items-center relative">
            <div className="card w-96 glass shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-5xl text-pink-900 font-bold">
                  Card title!
                </h2>
                <p className="text-start text-gray-600 text-lg my-5">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-start">
                  <button className="btn bg-pink-700 text-white border-none text-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Banners;
