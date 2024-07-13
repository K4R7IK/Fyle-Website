import React, { useState } from "react";
import { img1, img2, icon, arrow } from "../assets/";

const images = [
  {
    src: img1,
    alt: "image1",
    title: "Web development",
    text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: icon,
  },
  {
    src: img2,
    alt: "image2",
    title: "App development",
    text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: icon,
  },
  {
    src: img1,
    alt: "image1",
    title: "Web development",
    text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: icon,
  },
  {
    src: img2,
    alt: "image2",
    title: "App development",
    text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: icon,
  },
  {
    src: img1,
    alt: "image1",
    title: "Web development",
    text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: icon,
  },
  {
    src: img2,
    alt: "image2",
    title: "App development",
    text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: icon,
  },
];

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);

  const totalPages = images.length;

  const handleImageHover = (index) => {
    setHoveredImageIndex(index);
    setCurrentPage(index);
  };
  const handleClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  return (
    <section className="bg-gray-50 h-screen pt-16 space-y-4">
      <div className="container space-y-4 mx-auto">
        <h4 className="text-2xl font-poppins uppercase text-fyle font-medium">
          What we do
        </h4>
        <div className="columns-2 gap-40">
          <div className="space-y-2">
            <h2 className="text-5xl font-poppins font-semibold uppercase text-wrap">
              Services provide
            </h2>
            <h2 className="text-5xl font-poppins font-semibold uppercase text-wrap">
              for you
            </h2>
          </div>
          <p className="lg:text-lg text-md font-poppins leading-loose">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>
      <div className="ml-40 space-y-2">
        <div className="flex p-4 gap-10 overflow-x-auto scrollbar-none">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 shadow-lg"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => setHoveredImageIndex(-1)}
            >
              <img src={item.src} alt={item.alt} className="h-full" />
              {hoveredImageIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-fyle/80 px-5 flex flex-col justify-center items-center gap-5 transition-all backdrop-blur-lg rounded-lg">
                  <img src={item.icon} alt="icon" />
                  <h2 className="text-xl font-bold text-white uppercase font-poppins">
                    {item.title}
                  </h2>
                  <p className="text-md text-white font-poppins font-medium">
                    {item.text}
                  </p>
                  <button className="bg-white text-fyle py-3 px-6 rounded transition-all flex font-poppins uppercase font-medium">
                    Read More
                    <img src={arrow} alt="arrow" className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-start gap-2 px-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => handleClick(pageIndex)}
              onMouseEnter={() => setHoveredImageIndex(pageIndex)}
              onMouseLeave={() => setHoveredImageIndex(-1)}
              className={`rounded-full transition-all duration-300 ${
                pageIndex === currentPage
                  ? "h-3 w-5 bg-black"
                  : "h-3 w-3 bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
