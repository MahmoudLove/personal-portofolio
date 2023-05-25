import React from 'react';

const SectionHeader = ({ children }) => {
  return (
    <h1 className="uppercase inline-block text-2xl relative mt-2 mb-6 after:block after:h-1 after:w-[80%] after:bg-gradient-to-r after:from-orange-400 after:to-pink-500 after:absolute after:left-[50%] after:bottom-[-7px] after:translate-x-[-50%]">
      {children}
    </h1>
  );
};

export default SectionHeader;
