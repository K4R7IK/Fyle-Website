import React from "react";
import {target,meter,shield,up} from "../assets";

const data = [
  {
    pic: target,
    title: "Clarified Vision & Target",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    pic: meter,
    title: "High Performance",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    pic: shield,
    title: "Maintain Security",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    pic: up,
    title: "Better Straegy & Planning",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
];

const Chooseus = () => {
  return (
    <section className="h-full py-16">
      <h4 className="text-2xl font-poppins uppercase text-fyle font-medium text-center">
        why choose us
      </h4>
      <h2 className="text-5xl font-poppins font-semibold uppercase text-wrap text-center mt-6">
        why we are best
      </h2>
      <div className="container mx-auto flex mt-16">
        {data.map((items,index) => (
          <div className="max-w-sm flex justify-start flex-col gap-4" key={index}>
            <img src={items.pic} alt="target" className="h-20 w-fit" />
            <h3 className="text-2xl font-poppins font-medium">
              {items.title}
            </h3>
            <p className="text-md font-poppins">
              {items.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chooseus;
