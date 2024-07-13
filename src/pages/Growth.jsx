import React from "react";
import { heart, clock, check, trophy } from "../assets/";

const data = [
  { icon: heart, number: "199+", content: "Satisfied Customers" },
  { icon: clock, number: "1591+", content: "Days of Operation" },
  { icon: check, number: "283+", content: "Complete Projects" },
  { icon: trophy, number: "75+", content: "Win Awards" },
];

const Growth = () => {
  return (
    <section className="h-full py-16 bg-gray-50">
      <h4 className="text-2xl font-poppins uppercase text-fyle font-medium text-center">
        Expert growth
      </h4>
      <h2 className="text-5xl font-poppins font-semibold uppercase text-wrap text-center mt-6">
        our company growth
      </h2>
      <div className="grid grid-cols-4 mt-10 px-72 overflow-hidden gap-10">
        {data.map((items, index) => (
          <div key={index} className="p-8 bg-white space-y-4 rounded-md hover:shadow-xl transition-all">
            <figure className="w-full">
              <img src={items.icon} className="mx-auto w-12" />
            </figure>
            <h4 className="font-poppins font-light text-6xl text-center">
              {items.number}
            </h4>
            <p className="font-poppins font-light text-xl text-center">
              {items.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Growth;
