import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div name="hero" className="mt-2 mb-10">
      <p className="text-pink-600 text-xl sm:text-2xl sm:text-center">
        Hi My name is
      </p>
      <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] sm:text-center">
        Mahmoud Abdelkhalek
      </h1>
      <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] sm:text-center">
        Full Stack MERN developer
      </h2>
      <p className="sm:leading-10 text-[#8892b0] py-4  sm:text-2xl sm:text-center">
        Passionate 23 years old developer who loves technology and building web
        and had proven ability to adapt in both self-starting and collaborative
        environment while staying focused on achieving high-quality results
        under strict dead line applications. I developed customer-specific end
        products in certien time , now iam excited to pursue new companies to
        grow my skills while building many more apps
      </p>
      <div>
        <Link to="skills" smooth={true} duration={500}>
          <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-black hover:bg-[rgb(250,224,92)] hover:border-[rgb(250,224,92)]">
            <span className="sm:text-xl">View Skills</span>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 sm:text-2xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
