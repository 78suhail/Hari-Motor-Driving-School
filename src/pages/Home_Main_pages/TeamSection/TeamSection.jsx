import React from "react";

const instructors = [
  {
    name: "Marcus Lamb",
    role: "Driving Instructor",
    img: "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    name: "Erik Harrison",
    role: "Marketing Director",
    img: "/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
  },
  {
    name: "Anthony Jackson",
    role: "Lead Instructor",
    img: "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
  },
  {
    name: "Misty Peterson",
    role: "Driving Instructor",
    img: "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-myBg py-16 px-4 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white font-semibold uppercase">Meet Our Team</p>
        <h2 className="text-3xl font-bold text-white mb-10">Our Instructors</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={instructor.img}
                  alt={instructor.name}
                  className="w-full h-60 object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-pointer"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {instructor.name}
                </h3>
                <p className="text-sm text-gray-600">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
