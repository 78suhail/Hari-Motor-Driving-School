import React from "react";
import BannerSlider from "../Home_Main_pages/Banner/BannerSlider";  
//import WhyChoosePrime from "../components/WhyChoose/WhyChoosePrime";
import TeamSection from "../Home_Main_pages/TeamSection/TeamSection";
import DrivingExperience from "../Home_Main_pages/DrivingExperience/DrivingExperience";
import WhyChooseUs from "../Home_Main_pages/WhyChooseUs/WhyChooseUs";
import Services from "../Home_Main_pages/OurServices/Services";
import Home_Contact_Form from "../Home_Main_pages/Contact_Form/Contact_Form";
import ImageSwiper from '../Home_Main_pages/Banner/BannerSlider_2'

const Home = () => {
  return (
    <>
      <div>
       <div>
        <ImageSwiper/>
       </div>
        {/* <div className="mt-2">
          <BannerSlider />
        </div> */}
        <div className="mt-2">
          <WhyChooseUs />
        </div>
        <div className="mt-2">
          <DrivingExperience />
        </div>
        <div className="mt-2">
          <TeamSection />
        </div>

        <div className="mt-2">
          <Services />
        </div>

        <div>
          <Home_Contact_Form />
        </div>
      </div>
    </>
  );
};

export default Home;
