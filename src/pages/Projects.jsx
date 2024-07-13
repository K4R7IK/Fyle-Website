import React, { useState } from "react";
import { img1, img, img2 } from "../assets"; // Ensure you have these images in your assets folder

const data = [
  {
    title: "Genderless Kei - Japan's Hot",
    content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    img: img1, 
  },
  {
    title: "Better Strategy & Quality",
    content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    img: img,
  },
  {
    title: "Genderless Kei - Japan's Hot",
    content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    img: img2,
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="h-full py-16">
      <h4 className="text-2xl font-poppins uppercase text-fyle font-medium text-center">
        Our Project
      </h4>
      <h2 className="text-5xl font-poppins font-semibold uppercase text-wrap text-center mt-6">
        why we are best
      </h2>
      <div className="flex justify-center items-stretch mt-16 gap-10">
        <figure className="w-[770px] h-[567px] overflow-hidden rounded-lg">
          <img src={hoveredIndex !== null ? data[hoveredIndex].img : img1} alt="project" className="object-cover w-full" /> 
        </figure>
        <div className="grid grid-row-3">
          {data.map((item, index) => (
            <div
              className="max-w-md bg-gray-100 hover:bg-fyle hover:text-white py-8 px-12 space-y-3 transition-all duration-200"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-poppins font-medium">{item.title}</h3>
              <p className="text-base font-poppins leading-loose">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
