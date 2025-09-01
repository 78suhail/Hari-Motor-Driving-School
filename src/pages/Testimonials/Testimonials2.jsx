import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Michel Jordan",
    role: "Driving Student",
    feedback:
      "My instructor was very professional and understanding. He helped me understand the common mistakes, rules etiquette and was very reasonable.",
    image: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    name: "Alex Micelis",
    role: "Driving Student",
    feedback:
      "I would definitely recommend asking for Valise if you get your lessons in Airport driving school. The first lessons to the last one lesson.",
    image: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    name: "Eliana Santiago",
    role: "Driving Student",
    feedback:
      "My driving instructor was fantastic; calm, patient and encouraging! I would recommend her to anybody looking to start driving lessons.",
    image: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
    {
    name: "Michel Jordan",
    role: "Driving Student",
    feedback:
      "My instructor was very professional and understanding. He helped me understand the common mistakes, rules etiquette and was very reasonable.",
    image: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    name: "Alex Micelis",
    role: "Driving Student",
    feedback:
      "I would definitely recommend asking for Valise if you get your lessons in Airport driving school. The first lessons to the last one lesson.",
    image: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    name: "Eliana Santiago",
    role: "Driving Student",
    feedback:
      "My driving instructor was fantastic; calm, patient and encouraging! I would recommend her to anybody looking to start driving lessons.",
    image: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-gray-50 relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-blue-600 font-semibold flex items-center justify-center text-[22px] gap-2">
          🎓 Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
         What Saying Students Feedback
        </h2>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl  shadow-md p-6 px-4 relative flex flex-col justify-between h-full">
                {/* Stars */}
                <div className="flex text-blue-600 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-600 italic mb-6">{t.feedback}</p>

                {/* Author */}
                <div className="flex items-center gap-5">
                  <img
                    src={t.image}
                    alt={t.name}
                   className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-blue-600 shadow-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{t.name}</h4>
                    <p className="text-blue-600 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Quote Icon */}
                <FaQuoteRight className="absolute bottom-6 right-6 text-blue-600 text-3xl opacity-30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
