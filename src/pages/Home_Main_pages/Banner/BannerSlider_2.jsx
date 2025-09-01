import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageSwiper = () => {
  return (
    <div className="w-full bg-black">
      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}  
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        <SwiperSlide>
          <img
            src="/Images/Banner/Banner.jpg"
            alt="Image 1"
            className="w-full h-[30vh] md:h-[40vh] lg:h-[40vh] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/Banner/Banner.jpg"
            alt="Image 2"
            className="w-full h-[30vh] md:h-[40vh] lg:h-[40vh] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/Banner/Banner.jpg"
            alt="Image 3"
            className="w-full h-[30vh] md:h-[40vh] lg:h-[40vh] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
