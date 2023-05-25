import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const ProjectsSection = () => {
  const projectsData = [
    {
      name: 'Lotus Store',
      para: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate suscipit tenetur, omnis adipisci vel incidunt soluta excepturi unde Mahmoud blackosis',
      float: 'next',
      src: '/lotus.jpg',
      codeLink: '#',
      demoLink: 'https://www.lotusbymariam.beauty/',
      depend: ['Next', 'tailWind', 'graphQl'],
    },
    {
      name: 'Shehata Store',
      para: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate suscipit tenetur, omnis adipisci vel incidunt soluta excepturi unde Mahmoud blackosis',
      float: 'next',
      src: '/shehata.jpg',
      codeLink: 'https://github.com/MahmoudLove/shehata-repo-2',
      demoLink: 'https://shehata-repo-2.vercel.app/',
      depend: ['Next', 'MongoDB', 'TailWind'],
    },
    {
      name: 'PregnaCate',
      para: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate suscipit tenetur, omnis adipisci vel incidunt soluta excepturi unde Mahmoud blackosis',
      float: 'JS',
      src: '/pregnaCare.jpg',
      codeLink: 'https://github.com/Epca-PregnaCare/_Egypt',
      demoLink: 'https://epca-pregnacare.github.io/_Egypt/',
      depend: ['JavaScript', 'Leaflet'],
    },
    {
      name: 'ToDo App',
      para: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate suscipit tenetur, omnis adipisci vel incidunt soluta excepturi unde Mahmoud blackosis',
      float: 'next',
      src: '/toDo.jpg',
      codeLink: 'https://github.com/MahmoudLove/toDo-app',
      demoLink: 'https://to-do-app-xi-self.vercel.app/',
      depend: ['Next', 'React-dnd'],
    },
  ];
  return (
    <div className="mt-2 mb-10" name="projects">
      <SectionHeader>Latest Projects</SectionHeader>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-x-3 gap-y-6 justify-items-center">
        {projectsData.map((project) => {
          return (
            <div
              key={project.name}
              className="projectParent   overflow-hidden   relative w-[170px] h-[280px] "
            >
              <span className="floating">{project.float}</span>
              <Image
                src={project.src}
                width={250}
                height={250}
                className="w-full h-full  brightness-50"
                alt="fas"
              />
              <div className="projectsText px-1 ">
                <h2 className="text-blue-400 text-center">Lotus store</h2>
                <p className="leading-[16px]">{project.para}</p>
                <div>
                  <div className="flex flex-wrap text-sm gap-[1.5px] mb-[2px]">
                    <span>Dependencies:</span>
                    {project.depend.map((d) => (
                      <span key={d} className="bg-gray-500 p-[1px]">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-around mt-2">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="bg-[#333333] p-[1.5px] rounded-md text-white"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="bg-red-500 p-[1.5px] rounded-md text-white"
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
