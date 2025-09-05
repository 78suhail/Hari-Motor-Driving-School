// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

// User Pages
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Gallery from "./pages/ Gallery/ Gallery"
import Faqs from "./pages/FAQs/Faqs";
import OurTeam from "./pages/OurTeam/OurTeam";
import DrivingGuidelines from "./pages/DrivingGuidelines/DrivingGuidelines";
import Services from "./pages/Services_page/Services";
import PricingPlan from "./pages/PricingPlan/PricingPlan";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import TestimonialForm from './pages/Testimonials/TestimonialForm'

// Admin Pages
import Dashboard from "./pages/AdminPages/Dashboard";
import ManageAbout from "./pages/AdminPages/ManageAbout";
import ManageContact from "./pages/AdminPages/ManageContact";
import ManageCourses from "./pages/AdminPages/ManageCourses";
import ManageFaq from "./pages/AdminPages/ManageFaq";
import ManageGallery from "./pages/AdminPages/ManageGallery";
import ManageHome from "./pages/AdminPages/ManageHome";
import ManagePricing from "./pages/AdminPages/ManagePricing";
import ManageServices from "./pages/AdminPages/ManageServices";
import ManageTeam from "./pages/AdminPages/ManageTeam";
import Settings from "./pages/AdminPages/Settings";

// Branch Pages
import BranchPage from "./pages/Branchs/BranchPage";
import { branches } from "./data/branches";

const App = () => {
  return (
    <Routes>
      {/* -------- User Side -------- */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="service" element={<Services />} />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="driving-guidelines" element={<DrivingGuidelines />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="testimonialForm" element={<TestimonialForm />} />

        {/* Branch Pages */}
        {branches.map((branch) => (
          <Route
            key={branch.path}
            path={branch.path.replace("/branches/", "branches/")}
            element={<BranchPage branch={branch} />}
          />
        ))}

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage/>} />
      </Route>

      {/* -------- Admin Side -------- */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="home" element={<ManageHome />} />
        <Route path="about" element={<ManageAbout />} />
        <Route path="courses" element={<ManageCourses />} />
        <Route path="team" element={<ManageTeam />} />
        <Route path="gallery" element={<ManageGallery />} />
        <Route path="contact" element={<ManageContact />} />
        <Route path="services" element={<ManageServices />} />
        <Route path="pricing" element={<ManagePricing />} />
        <Route path="faq" element={<ManageFaq />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
