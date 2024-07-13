import React, { useState } from "react";
import Sideimg from "../assets/hero.png";
import ContactForm from "../components/ContactForm"; 

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="container mx-auto flex items-center gap-4 justify-around">
        <div className="flex-initial w-[40%] flex flex-col gap-9 items-start justify-center">
          <h2 className="text-4xl font-worksans uppercase text-fyle font-medium">
            Award Winning
          </h2>
          <h1 className="text-6xl uppercase font-poppins font-semibold">
            Digital Marketing Agency
          </h1>
          <p className="text-sm font-poppins leading-relaxed tracking-wide">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <button
            className="bg-fyle px-7 py-4 text-white font-worksans uppercase font-medium rounded-md shadow-lg"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
        <figure className="shrink-0 shadow-lg">
          <img src={Sideimg} alt="hero" />
        </figure>
      </div>
      <ContactForm isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Home;
