import React from "react";
import TeamSection from "../Home_Main_pages/TeamSection/TeamSection";
import DrivingExperience from "../Home_Main_pages/DrivingExperience/DrivingExperience";
import WhyChooseUs from "../Home_Main_pages/WhyChooseUs/WhyChooseUs";
import Home_Contact_Form from "../Home_Main_pages/Contact_Form/Contact_Form";
import BannerSlider from "../Home_Main_pages/Banner/BannerSlider";
import OurServices from "../Home_Main_pages/OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
import StatsBanner from '../Home_Main_pages/Banner/StatsBanner'

const Home = () => {
  return (
    <>
      <div>
        <div>
          <BannerSlider />
        </div>
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
          <OurServices />
        </div>
        <div className="mt-2">
          <StatsBanner/>
        </div>
        <div className="mt-4">
          <Testimonials/>
        </div>
        <div>
          <Home_Contact_Form />
        </div>
      </div>
    </>
  );
};

export default Home;
