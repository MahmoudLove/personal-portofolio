import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <div name="hero" className="mt-2 mb-10">
      <p className="text-pink-600">Hi My name is</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
        Mahmoud Abdo
      </h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
        Full Stack MErn developer
      </h2>
      <p className="text-[#8892b0] py-4 max-w-[700px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        exercitationem fugit consequatur, cum, aliquid iste ipsa, pariatur
        inventore eos harum magnam nobis repellat! Voluptates excepturi at,
        ratione veritatis quo incidunt.
      </p>
      <div>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-black hover:bg-[rgb(250,224,92)] hover:border-[rgb(250,224,92)]">
          View Skills
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
