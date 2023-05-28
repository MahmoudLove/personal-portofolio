import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import useScrollDirection from '@/utils/useScrollDirection';
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  let srollDirection = useScrollDirection('down');
  console.log(typeof srollDirection);
  if (srollDirection === undefined) srollDirection = 'up';
  const navigationData = [
    {
      section: 'about',
      name: 'hero',
    },
    {
      section: 'skills',
      name: 'skills',
    },
    {
      section: 'projects',
      name: 'projects',
    },
    {
      section: 'contact',
      name: 'contact',
    },
    {
      socialIcons: true,
    },
  ];
  return (
    <>
      <div
        className={`flex justify-between items-center fixed z-50 ${
          srollDirection === 'up' ? 'top-0' : 'top-[-45px]'
        } bg-[rgba(2,12,27)] h-10 w-full px-1 transition-all duration-[.8s] ease-in-out`}
      >
        <Head>
          <link rel="icon" href="/logo.ico" />
        </Head>
        <div
          onClick={toggleMenu}
          className={`p-2  flex flex-col absolute top-[50%] translate-y-[-50%] right-3 z-50 sm:hidden`}
        >
          <span
            className={`inline-block w-9 h-[3px] bg-[rgb(250,224,92)] my-[5px] duration-200 ${
              menuOpen ? 'rotate-[-45deg] translate-y-[5px]' : ''
            }`}
          ></span>
          <span
            className={` w-9 h-[3px] my-[]5px bg-[rgb(250,224,92)] duration-200 ${
              menuOpen ? 'hidden' : 'inline-block'
            }`}
          ></span>
          <span
            className={`inline-block w-9 h-[3px] bg-[rgb(250,224,92)] my-[5px] duration-200 ${
              menuOpen ? 'rotate-[45deg] translate-y-[-5px]' : ''
            }`}
          ></span>
        </div>
        <div>
          <Image src="/logo.ico" width={35} height={35} alt="logo" />
        </div>
        <ul
          className={`flex fixed gap-3 items-center text-xl flex-col h-screen w-screen top-0 pt-12 z-20 duration-500 ease-in-out bg-[rgba(2,12,27)] ${
            menuOpen ? 'right-0' : 'right-[-40rem]'
          } sm:static sm:flex-row sm:h-auto sm:w-auto sm:pt-0 `}
        >
          {navigationData.map((navItem, index) => {
            if (navItem.section)
              return (
                <li
                  key={index}
                  className={`uppercase cursor-pointer after:bg-[rgb(155,133,26)] after:block inline-block after:h-1 after:w-0 transition-all
                 ease-in-out duration-300 hover:text-white hover:after:w-full font-bold ${
                   menuOpen
                     ? `opacity-0 navAnimation delay-[${index / 7 + 0.5}s]`
                     : ''
                 } `}
                >
                  <Link
                    onClick={toggleMenu}
                    to={navItem.name}
                    smooth={true}
                    duration={500}
                  >
                    {navItem.section}
                  </Link>
                </li>
              );
            else if (navItem.socialIcons)
              return (
                <div
                  key={index}
                  className={`${
                    menuOpen
                      ? `opacity-0 navAnimation delay-[${index / 7 + 0.5}s]`
                      : ''
                  }  flex items-center gap-3 sm:hidden`}
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mahmoud-abdelkhalek-37501b232"
                    className="text-3xl cursor-pointer after:h-1 after:w-0 transition-all ease-in-out duration-300 hover:text-white after:block inline-block hover:after:w-full"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/mahabdelkhalekk?t=AcNv9nnlaDmBp2s8Qp7UQw&s=09"
                    className="text-3xl cursor-pointer after:h-1 after:w-0 transition-all ease-in-out duration-300 hover:text-white after:block inline-block hover:after:w-full"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/MahmoudLove"
                    className="text-3xl cursor-pointer after:h-1 after:w-0 transition-all ease-in-out duration-300 hover:text-white after:block inline-block hover:after:w-full"
                  >
                    <FaGithub />
                  </a>
                </div>
              );
          })}
        </ul>
      </div>
      <ul className="fixed bottom-[5%] left-0 z-[5]">
        <li className="bg-blue-600 rounded-sm py-2 w-[80px] ml-[-60px] hover:ml-0 h-[20px] flex justify-between items-center duration-300">
          <a
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300 "
            href="https://www.linkedin.com/in/mahmoud-abdelkhalek-37501b232"
          >
            <span className="">Linkidin</span> <FaLinkedin size={20} />
          </a>
        </li>
        <li className="bg-[#333333] rounded-sm py-2 w-[80px] ml-[-60px] hover:ml-0 h-[20px] flex justify-between items-center duration-300">
          <a
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300 "
            href="https://github.com/MahmoudLove"
          >
            <span className="">Github</span> <FaGithub size={20} />
          </a>
        </li>
        <li className="bg-pink-500 rounded-sm py-2 w-[80px] ml-[-60px] hover:ml-0 h-[20px] flex justify-between items-center duration-300">
          <a
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300 "
            href="https://twitter.com/mahabdelkhalekk?t=AcNv9nnlaDmBp2s8Qp7UQw&s=09"
          >
            <span className="">Twitter</span> <FaTwitter size={20} />
          </a>
        </li>
      </ul>
    </>
  );
}
