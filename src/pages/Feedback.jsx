import React from "react";
import { quote, group } from "../assets";

const Feedback = () => {
  return (
    <section className="h-full pt-16">
      <h4 className="text-2xl font-poppins uppercase text-fyle font-medium text-center">
        Client Feedback
      </h4>
      <h2 className="text-5xl font-poppins font-semibold uppercase text-wrap text-center mt-6">
        People say's about us!
      </h2>
      <div className="mx-auto container relative mt-16">
        <img
          src={quote}
          alt="quote"
          className="absolute left-[15%] top-[-30%] -z-[1]"
        />
        <p className="font-poppins text-xl max-w-5xl mx-auto ">
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum et Malorum
          original.
        </p>
        <p className="mx-auto w-full uppercase font-poppins text-gray-400 max-w-5xl text-xl mt-4 font-light">
          <span className="font-poppins font-bold text-rose-500">
            Jannat Tumpa
          </span>{" "}
          - coo, amerimar enterprises,inc.
        </p>
      </div>
      <div className="bg-fyle w-full h-80 mt-20 relative flex items-center justify-center">
          <img src={group} className=""/>
      </div>
    </section>
  );
};

export default Feedback;
