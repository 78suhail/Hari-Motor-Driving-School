import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function BannerSlider() {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Side - Swiper */}
        <div className="col-span-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-lg overflow-hidden group"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/Images/Banner/Banner4.jpg"
                  alt="Slide 1"
                  className="w-full h-[400px] object-cover"
                />
                {/* <div className="absolute top-1/4 left-12 p-4 overflow-hidden">
                  <div className="transition-all duration-700 ease-in-out transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 animate-bannerText">
                    <h2 className="text-gray-600">
                      Delhi’s Trusted Car Driving School
                    </h2>
                    <h1 className="text-xl font-bold text-gray-900 max-w-xs">
                      Learn Driving With Experts
                    </h1>
                    <p className="mt-2 text-lg">Easy license process.</p>
                    <p className="text-lg">100% customer satisfaction.</p>
                    <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                      Book Your First Class
                    </button>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/Images/Banner/Banner.jpg"
                  alt="Slide 1"
                  className="w-full h-[400px] object-cover"
                />
                {/* <div className="absolute top-1/4 left-12 p-4 overflow-hidden">
                  <div className="transition-all duration-700 ease-in-out transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 animate-bannerText">
                    <h2 className="text-gray-600">
                      Delhi’s Trusted Car Driving School
                    </h2>
                    <h1 className="text-xl font-bold text-gray-900 max-w-xs">
                      Learn Driving With Experts
                    </h1>
                    <p className="mt-2 text-lg">Easy license process.</p>
                    <p className="text-lg">100% customer satisfaction.</p>
                    <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                      Book Your First Class
                    </button>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/Images/Banner/person-taking-driver-s-license-exam.jpg"
                  alt="Slide 1"
                  className="w-full h-[400px] object-cover"
                />
                {/* <div className="absolute top-1/4 left-12 p-4 overflow-hidden">
                  <div className="transition-all duration-700 ease-in-out transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 animate-bannerText">
                    <h2 className="text-gray-600">
                      Delhi’s Trusted Car Driving School
                    </h2>
                    <h1 className="text-xl font-bold text-gray-900 max-w-xs">
                      Learn Driving With Experts
                    </h1>
                    <p className="mt-2 text-lg">Easy license process.</p>
                    <p className="text-lg">100% customer satisfaction.</p>
                    <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                      Book Your First Class
                    </button>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/Images/Banner/Banner3.jpg"
                  alt="Slide 1"
                  className="w-full h-[400px] object-cover"
                />
                {/* <div className="absolute top-1/4 left-12 p-4 overflow-hidden">
                  <div className="transition-all duration-700 ease-in-out transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 animate-bannerText">
                    <h2 className="text-gray-600">
                      Delhi’s Trusted Car Driving School
                    </h2>
                    <h1 className="text-xl font-bold text-gray-900 max-w-xs">
                      Learn Driving With Experts
                    </h1>
                    <p className="mt-2 text-lg">Easy license process.</p>
                    <p className="text-lg">100% customer satisfaction.</p>
                    <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                      Book Your First Class
                    </button>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Side - Static Small Banners */}
        <div className="flex flex-col gap-4">
          <img
            src="/Images/Banner/123.jpg"
            alt="Small Banner 1"
            className="w-full h-[195px] object-cover rounded-lg"
          />
          <img
            src="/Images/Banner/12.jpg"
            alt="Small Banner 2"
            className="w-full h-[195px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
