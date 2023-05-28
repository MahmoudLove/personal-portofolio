import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
const SkillsSection = () => {
  const skillsData = [
    {
      name: 'Node.Js',
      src: '/node.png',
      mastery: 5,
    },
    {
      name: 'React.Js',
      src: '/react.png',
      mastery: 5,
    },
    {
      name: 'Next.Js',
      src: '/next.jpg',
      mastery: 5,
    },
    {
      name: 'Tail Wind',
      src: '/tailwind.png',
      mastery: 5,
    },
    {
      name: 'Express',
      src: '/express.png',
      mastery: 5,
    },
    {
      name: 'Mongo DB',
      src: '/mongo.png',
      mastery: 5,
    },
  ];
  return (
    <div name="skills" className="mt-2 mb-10">
      <SectionHeader>Skills</SectionHeader>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-3 gap-y-6 justify-items-center">
        {skillsData.map((skill, index) => {
          return (
            <div
              key={index}
              className="w-[170px] h-[225px] sm:w-[250px] sm:h-[300px] shadow-md shadow-[#040c16] hover:scale-110 bg-[rgba(2,12,40)] rounded-lg relative"
            >
              <div className="rotator rounded-lg"></div>
              <div className="rounded-lg "></div>
              <Image
                src={skill.src}
                width={250}
                height={250}
                className="w-full rounded-lg"
                alt={skill.name}
              />
              <h1 className="skillName text-lg">{skill.name}</h1>

              <div className="flex mt-1 items-center justify-between ">
                <span className="pl[1px]">Mastery:</span>
                <span className="flex gap-1 pr-[1px]">
                  {[...Array(skill.mastery)].map((n) => (
                    <FaStar key={n} />
                  ))}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
