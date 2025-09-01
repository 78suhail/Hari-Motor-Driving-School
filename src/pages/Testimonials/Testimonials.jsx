import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";import { FaPhoneAlt } from 'react-icons/fa';


const testimonials = [
  {
    name: "James Charles",
    role: "Driving Student",
    image: "/Images/CustomerReview/Banner.jpg",
    feedback:
      "I would recommend asking for valise if get your lessons in driving school. the first lessons to the last one lesson.",
  },
  {
    name: "Mason Robert",
    role: "Driving Student",
    image: "/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
    feedback:
      "My driving instructor was fantastic; calm, patient and encouraging! I recommend her to anybody looking to start driving.",
  },
  {
    name: "Mariana Mojarin",
    role: "Driving Student",
    image: "/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
    feedback:
      "I highly recommend my instructor she was calm, and motivated. Anyone looking to start driving would be benefited.",
  },
   {
    name: "Mason Robert",
    role: "Driving Student",
    image: "/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
    feedback:
      "My driving instructor was fantastic; calm, patient and encouraging! I recommend her to anybody looking to start driving.",
  },
   {
    name: "Mason Robert",
    role: "Driving Student",
    image:"/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
    feedback:
      "My driving instructor was fantastic; calm, patient and encouraging! I recommend her to anybody looking to start driving.",
  },
  // Add more feedback objects as needed
];

const Testimonials = () => (
 <>
  <section className="py-8 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="text-blue-600 font-semibold text-lg">Testimonials</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">What Saying Students Feedback</h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-200 relative mx-2">
              <div className="relative mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 mx-auto"
                />
                <span className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 text-xl border-4 border-white">
                  <FaQuoteRight />
                </span>
              </div>
              <div className="mb-6 text-gray-600 italic text-center">“{t.feedback}”</div>
              <div className="text-lg font-bold text-gray-900 text-center">{t.name}</div>
              <div className="text-blue-600 text-sm text-center">{t.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  

 </>
);

export default Testimonials;
