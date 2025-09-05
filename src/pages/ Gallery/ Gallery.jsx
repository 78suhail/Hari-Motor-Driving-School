import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { FaChevronDown } from "react-icons/fa";

/* ---------------------------------------------------
   Gallery Images
--------------------------------------------------- */
const galleryImages = [
  "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
  "/Images/TeamSection_img/handsome-male-taxi-driver-costume.jpg",
  "/Images/TeamSection_img/portrait-brunette-woman-her-car.jpg",
  "/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
  "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
 
];

/* ---------------------------------------------------
   Banner Section
   - Mobile: full image (object-contain)
   - Desktop: cover image (object-cover)
--------------------------------------------------- */
const Banner = () => (
  <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
    {/* Mobile Image */}
    <img
      src="/Images/Gallery/young-woman-testing-car-car-showroom.jpg"
      alt="Contact Hero Mobile"
      className="absolute inset-0 w-full h-full object-contain bg-black opacity-90 block md:hidden"
    />

    {/* Desktop Image */}
    <img
      src="/Images/Gallery/young-woman-enjoying-road-trip.jpg"
      alt="Contact Hero Desktop"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-80 hidden md:block"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60" />

    {/* Banner Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
        Gallery
      </h1>
      <div className="mt-4 animate-bounce">
        <FaChevronDown className="w-7 h-7 text-white mx-auto" />
      </div>
    </div>
  </div>
);

/* ---------------------------------------------------
   Modal Component
--------------------------------------------------- */
const ImageModal = ({ imgSrc, onClose }) => {
  // Close modal on ESC key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!imgSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2 sm:px-0"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl flex items-center justify-center p-2 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-3xl font-bold 
                     bg-black bg-opacity-40 rounded-full w-8 h-8 flex items-center justify-center 
                     hover:bg-opacity-70 transition z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Large Image */}
        <img
          src={imgSrc}
          alt="Gallery Large"
          className="rounded-lg max-h-[70vh] w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-2xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};

/* ---------------------------------------------------
   Gallery Grid with Pagination
--------------------------------------------------- */
const GalleryGrid = () => {
  const imagesPerPage = 6;
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState(null);

  // Pagination logic
  const pageCount = Math.ceil(galleryImages.length / imagesPerPage);
  const startIdx = (page - 1) * imagesPerPage;
  const currentImages = galleryImages.slice(startIdx, startIdx + imagesPerPage);

  return (
    <>
      {/* Grid Section */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full px-4 sm:px-6 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {currentImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
                onClick={() => setModalImg(img)}
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          count={pageCount}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          shape="rounded"
          className="mt-4"
        />
      </div>

      {/* Modal */}
      <ImageModal imgSrc={modalImg} onClose={() => setModalImg(null)} />
    </>
  );
};

/* ---------------------------------------------------
   Main Gallery Page
--------------------------------------------------- */
const Gallery = () => {
  return (
    <div className="bg-myBgColor min-h-screen">
      {/* Banner */}
      <Banner />

      {/* Gap between Banner and Gallery */}
      <div className="mt-12 mb-12">
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
